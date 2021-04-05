from flask import Flask, render_template, request
from flaskext.mysql import MySQL


app = Flask(__name__)
mysql = MySQL()


#Change user, password and dbname for your MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Password@21'
app.config['MYSQL_DB'] = 'testdb'


mysql.init_app(app)
@app.route('/', methods=['POST', 'GET'])


#------------------------------------------------------------------------------
# Functions used to run queries for the Database API

def execute_dbquery(query):

    con = mysql.connect()
    cur = con.cursor()
    cur.execute(query)
    try:
        con.commit()
        cur.close()
    except:
        raise Exception("Could not connect to the database!")
    return cur


def AddToDatabase(Table, data):
    query = "INSERT INTO testdb.%s VALUES %r;" % (Table, tuple(data))
    execute_dbquery(query)


#------------------------------------------------------------------------------
if __name__ == "__main__":
    #app.run(debug=True)

    
    #------------------------------------------------------------------------------
    # Table Game and functionalites of Game type classes

    class Game:

        #------------------------------------------------------------------------------
        # Initialization

        def __init__(self, session_id = 'Default', session_length = 26, distributor_present =True, wholesaler_present =True,
                    holding_cost = 0.5, backlog_cost = 1.0, active = False, info_sharing =False,
                    info_delay = 2, rounds_completed = 0, is_default_game  = False, 
                    starting_inventory = 6):

            self.session_id = session_id
            self.session_length = session_length
            self.distributor_present = distributor_present
            self.wholesaler_present = wholesaler_present
            self.holding_cost = holding_cost
            self.backlog_cost = backlog_cost
            self.active = active
            self.info_sharing = info_sharing
            self.info_delay = info_delay
            self.rounds_completed = rounds_completed
            self.is_default_game = is_default_game
            self.starting_inventory = starting_inventory

            game_data = [session_id, session_length, distributor_present, wholesaler_present,
                        holding_cost, backlog_cost, active, info_sharing, info_delay,
                        rounds_completed, is_default_game , starting_inventory]
            AddToDatabase('Game', game_data)
        

        #------------------------------------------------------------------------------
        def get_rounds_completed(self):
            query = "SELECT rounds_completed from testdb.Game where session_id = '%s'" % (self.session_id)
            rounds = execute_dbquery(query).fetchone()
            return int(rounds[0])

        #------------------------------------------------------------------------------
        def advance_week(self, time):
            #Do other stuff
            query = "UPDATE testdb.Game SET rounds_completed = %d WHERE session_id = '%s';" % ((self.rounds_completed+time), self.session_id) 
            execute_dbquery(query)

        #------------------------------------------------------------------------------
        def deactivate_wholesaler(self):

            if self.get_rounds_completed() > 0:
                raise Exception('Game has started, Cannot Remove Wholesaler!')
            else:
                self.wholesaler_present = False
                return True

        #------------------------------------------------------------------------------
        def deactivate_distributor(self):

            if self.get_rounds_completed() > 0:
                raise Exception('Game has started, Cannot Remove Distributor!')

            else:
                query = "UPDATE testdb.Game SET distributor_present = False WHERE session_id ='%s'" % (self.session_id)
                return True


        #------------------------------------------------------------------------------
        def add_player(self, player):
            try:
                AddToDatabase('Plays_In', [self.session_id, player.id])
                return True

            except:
                raise Exception("Could not add player to the game!")

        #------------------------------------------------------------------------------
        def remove_player(self, player):
            query = "DELETE from testdb.Plays_In WHERE g_id ='%s'and p_id = '%s';" % (self.session_id, player.id)
            try:
                execute_dbquery(query)
                return True

            except:
                raise Exception("Could not remove player from the game!")
        

    #------------------------------------------------------------------------------
    # Default TestCase    
    g = Game()

    #------------------------------------------------------------------------------
    # Used for Table User and Player and their functionalities

    class Player:
        
        #------------------------------------------------------------------------------
        # Initialization

        def __init__(self, id = 'Default', name = 'Defualt', email = 'Default', password = 'Default', current_game = g, role=0):
           
            self.id = id
            self.name, self.email = name, email
            self.role = role 
            self.password = password
            self.current_game = current_game
            self.current_inventory = self.current_game.starting_inventory
            self.current_backorder = 0

            user_data = [id, name, email, password]
            player_data = [id, current_game.session_id, role]
            AddToDatabase('User', user_data)
            AddToDatabase('Player', player_data)

        #------------------------------------------------------------------------------

        def join_instructors_game(self, g_id, i_id):
            try:
                AddToDatabase('Instructs', [i_id, self.id])
                AddToDatabase('Plays_In', [g_id, self.id])
                return True

            except:
                raise Exception("Could not add to the database!")
            
        #------------------------------------------------------------------------------

        def join_self_game(self):
            pass
            #To be implemented later

        def make_self_game(self):
            pass
            #To be implemented later

        #------------------------------------------------------------------------------

        def receive_beers(self, numberofBeers):

            self.current_inventory += numberofBeers

            query = "Select * from testdb.Round_History where p_id = '%s' " % (self.id)

            try:
                execute_dbquery(query).fetchone
                query = "UPDATE testdb.Round_History SET inventory = %s WHERE p_id = %s and p_role = %s" % (numberofBeers, self.id, str(self.role))
                execute_dbquery(query)
            except:
                data = [self.id, self.current_game.rounds_completed, self.current_inventory, 
                        self.current_backorder, 0, 0]
                AddToDatabase('Round_History', data)

        #------------------------------------------------------------------------------

        def order_beers(self, numberofBeers):
            query = "Select * from testdb.Round_History where p_id = %s"  % (self.id)

            try:
                execute_dbquery(query).fetchone
                query = "UPDATE testdb.Round_History SET order_request = %s WHERE p_id = %s and p_role = %s" % (numberofBeers, self.id, str(self.role))
                execute_dbquery(query)
            except:
                data = [self.id, self.current_game.rounds_completed, self.current_inventory, 
                        self.current_backorder, numberofBeers , 0]
                AddToDatabase('Round_History', data)

        #------------------------------------------------------------------------------

        def shipped_out(self, game, receiver):

            if (self.current_inventory < self.current_backorder):
                self.current_backorder -= self.current_inventory
                self.current_inventory = 0
                

            else:
                self.current_inventory -= self.current_backorder
                self.current_backorder = 0
                shippedThisWeek = self.current_inventory

                if (self.role != 0):

                    query = "Select order_request from testdb.Round_History where p_id = '%s' and week = '%s'" % (receiver.id, (game.get_rounds_completed() - game.info_delay))
                    shipping_request = int((execute_dbquery(query).fetchone())[0])

                    if (shipping_request > self.current_inventory):
                        self.current_backorder += shipping_request - self.current_inventory
                        shippedThisWeek += self.current_inventory
                        self.current_inventory = 0

                    else:
                        self.current_inventory -= shipping_request
                        shippedThisWeek =+ shipping_request

                    data = [self.id, game.get_rounds_completed(), self.current_inventory, 
                                self.current_backorder, 0, shippedThisWeek]
                    AddToDatabase('Round_History', data)
        
        #------------------------------------------------------------------------------

    #------------------------------------------------------------------------------
    # Default TestCase

    p1 = Player(1, 'test', 'test@email', 'strong', g, 1)

    #------------------------------------------------------------------------------
    # Used for Table User and Instructor and their functionalities (N/A as for sprint 2)

    class Instructor:

        #------------------------------------------------------------------------------
        # Initialization
    
        def __init__(self, id = 'Default', name = 'Defualt', email = 'Default', password = 'Default', my_default_game = 'Default'):
            
            self.id = id
            self.name, self.email = name, email
            self.password = password
            self.my_default_game = my_default_game

            user_data = [id, name, email, password]
            instructor_data = [id, my_default_game.session_id]
            AddToDatabase('User', user_data)
            AddToDatabase('Instructor', instructor_data)
        
        #------------------------------------------------------------------------------
        # Allows instructor to monitor game

        def monitor_game(self, game):
            
            monitor_data = [self.id, game.session_id]
            try:
                AddToDatabase('Monitors', monitor_data)
            except:
                raise Exception("Could not let instructor monitor the game")

        #------------------------------------------------------------------------------
        # Change information delay for a game

        def change_delay(self, game, newDelay):

            query = "Select g_id From Monitors where i_id = '%s'" % (self.id)
            gamesID = execute_dbquery(query).fetchall()

            query = "Select session_id From Game where session_id = '%s'" % (game.session_id)
            id = execute_dbquery(query).fetchone()

            if id in gamesID:
                try:
                    query = "Update Game Set info_delay = %d where session_id = '%s'" % (newDelay, game.session_id)
                    execute_dbquery(query)
                except:
                    raise Exception("Could not change information delay")
            else:
                raise Exception("Game not found, could not change information delay")



    #------------------------------------------------------------------------------
    # Default TestCase

    i = Instructor(100, 'Instructor1', 'Instructor_test@example.com', '$tr0ng', g)


    #------------------------------------------------------------------------------
    # Used for Table Demand_Pattern and functionalities (N/A as for sprint 2)

    class Demand_Pattern:

        #------------------------------------------------------------------------------
        # Initialization

        def __init__(self, id = 0, name = 'Default', weeks = 26, owned_by = p1):

            self.id = id
            self.name = name
            self.weeks = weeks
            self.owned_by = owned_by

            demand_Pattern_data = [id, name, weeks, owned_by.id]
            AddToDatabase('Demand_Pattern', demand_Pattern_data)
            
        #------------------------------------------------------------------------------
        # Connects Demand with the game

        def conn_demand(self, game):
            
            data = [self.id, game.session_id]
            AddToDatabase('Used_In', data)


        #------------------------------------------------------------------------------
        # Create Demand

        def create(self, game, demand):

            demand_data = [self.id, game.rounds_completed, demand]
            AddToDatabase('Demand', demand_data)     

    #------------------------------------------------------------------------------
    # Default TestCase
        
    d = Demand_Pattern('h3u', 'Test Demand', 8, p1)


    #------------------------------------------------------------------------------
    # Test Cases

    import unittest
    class TestClass(unittest.TestCase):
        #------------------------------------------------------------------------------
        #TEST CASE 1
        
        def test_shipment(self):

            #Start a game with 5 completed rounds
            #Try to send and receive beers

            g1 = Game('Game1', 26, True, True, 0.5, 1.0, True, False, 2, 5, True, 6)

            #role = 3 i.e. Distributor
            sender = Player( '3', 'Sender', 'sender@example.com', 'pa$$word', g1, 3)

            #role = 2 i.e. Wholesaler
            receiver = Player('2', 'Receiver', 'receiver@example.com', 'pa$$w0rd', g1, 2)
            sender.current_inventory = 6
            receiver.order_beers(8)
            #Wait for 2 more rounds
            g1.advance_week(2)
            sender.shipped_out(g1,receiver)
            self.assertEqual(sender.current_backorder, 2)
            receiver.receive_beers(8)


        #------------------------------------------------------------------------------
        #TEST CASE 2

        def test_deactivate(self):
            #Start a game with 0 rounds completed
            #Change Wholesaler and distributor to inactive

            g2 = Game('Game2', 20, True, True, 0.5, 1.0, True, False, 2, 0, True, 6)

            g2.deactivate_distributor()
            g2.deactivate_wholesaler()


        #------------------------------------------------------------------------------
        #TEST CASE 3

        def test_add_remove(self):
            #Start a game 
            #Add and remove players from the game

            g3 = Game('Game3', 20, True, True, 0.5, 1.0, True, False, 2, 0, True, 6)

            p1 = Player('Player1', 'Player1', 'player1@example.com', 'pa$$word', g3, 3)
            p2 = Player('Player2', 'Player2', 'player2@example.com', 'pa$$word', g3, 3)

            g3.add_player(p1)
            g3.add_player(p2)
            g3.remove_player(p1)


        #-------------------------------------------------------------------------------
        #TEST CASE 4

        def test_ins_dem(self):

            #Initialize Instructor and Demand Pattern

            g4 = Game('Game4', 20, True, True, 0.5, 1.0, True, False, 2, 0, True, 6)
            p3 = Player('Player3', 'Player3', 'player3@example.com', 'pa$$word', g4, 3)

            ins = Instructor(5, 'Instructor', 'instructor@example.com', '$tr0ng', g4)
            demand = Demand_Pattern('1', 'demand', 8, p3)


        #-------------------------------------------------------------------------------
        #TEST CASE 5

        def test_monitors(self):

            #Tries to add an instructor to monitor the game

            g5 = Game('Game5', 20, True, True, 0.5, 1.0, True, False, 2, 0, True, 6)
            ins = Instructor(6, 'Instructor', 'instructor@example.com', '$tr0ng', g5)

            ins.monitor_game(g5)


        #-------------------------------------------------------------------------------
        #TEST CASE 6

        def test_change_delay(self):

            #Changes info delay for a game from an instructor
            
            g6 = Game('Game6', 20, True, True, 0.5, 1.0, True, False, 2, 0, True, 6)
            ins = Instructor(7, 'Instructor', 'instructor@example.com', '$tr0ng', g6)

            ins.monitor_game(g6)
            ins.change_delay(g6,3)


        #-------------------------------------------------------------------------------
        #TEST CASE 7

        def test_demand_connect(self):

            g7 = Game('Game7', 20, True, True, 0.5, 1.0, True, False, 2, 0, True, 6)
            p4 = Player('Player4', 'Player4', 'player4@example.com', 'pa$$word', g7, 3)
            demand = Demand_Pattern('2', 'demand', 8, p4)

            demand.conn_demand(g7)

        #-------------------------------------------------------------------------------
        #TEST CASE 8

        def test_demand_create(self):
            
            #Generates the demand for the week

            g8 = Game('Game8', 20, True, True, 0.5, 1.0, True, False, 2, 0, True, 6)
            p5 = Player('Player5', 'Player5', 'player5@example.com', 'pa$$word', g8, 3)
            demand = Demand_Pattern('3', 'demand', 8, p5)

            demand.create(g8, 10)
            


    unittest.main()
