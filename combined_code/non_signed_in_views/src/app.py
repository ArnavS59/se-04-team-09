from flask import Flask, render_template, request, json, jsonify
from flask_cors import CORS, cross_origin
from flaskext.mysql import MySQL

app = Flask(__name__)


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'test'

mysql = MySQL()
mysql.init_app(app)
def execute_dbquery(query):
    con = mysql.connect()
    cur = con.cursor()
    cur.execute(query)
    try:
        con.commit()
        #cur.close()
    except:
        raise Exception("Could not connect to the database!")
    return cur


def AddToDatabase(Table, data):
    print(tuple(data))
    query = "INSERT INTO test.%s VALUES %r;" % (Table, tuple(data))
    execute_dbquery(query)

@app.route('/app', methods=['POST', 'GET'])
#To be updated later
#Just for sample testing
def index() :
    return 'The backend is set-up!'

@app.route('/app/register', methods = ['GET', 'POST'])
def register():
    data = json.loads(request.data)
    name, username, email, pw = data['name'], data['username'], data['email'], data['password']
    d = [username, name, email, pw]
    AddToDatabase('User', d)
    return ('User Added!')

@app.route('/app/login', methods = ['GET', 'POST'])
@cross_origin()
def login():
    data = json.loads(request.data)
    email, pw = data['email'], data['password']
    query = "SELECT COUNT(*) FROM test.User WHERE email = '%s' AND password = '%s'"%(email, pw)
    cur = execute_dbquery(query)
    count = cur.fetchone()[0]
    if (count > 0):
        response = jsonify('Logged in successfully!')
    else:
        response = jsonify('Invalid Credentials!')
   #response.headers.add("Access-Control-Allow-Origin", "http://localhost:3000")
    return response


if __name__ == "__main__":
    app.run(debug=True)

"""
    class Game:

        def __init__(self, session_id = 'Default', session_length = 26, distributor_present =True, wholesaler_present =True,
                    holding_cost = 0.5, backlog_cost = 1.0, instructor_id = 'Default', active = False, info_sharing =False,
                    info_delay = 2, demand_id = 'Default', rounds_completed = 0, is_default_game  = False, 
                    starting_inventory = 6):

            self.session_id = session_id
            self.session_length = session_length
            self.distributor_present = distributor_present
            self.wholesaler_present = wholesaler_present
            self.holding_cost = holding_cost
            self.backlog_cost = backlog_cost
            self.instructor_id = instructor_id
            self.active = active
            self.info_sharing = info_sharing
            self.info_delay = info_delay
            self.demand_id = demand_id
            self.rounds_completed = rounds_completed
            self.is_default_game = is_default_game
            self.starting_inventory = starting_inventory

            game_data = [session_id, session_length, distributor_present, wholesaler_present,
                        holding_cost, backlog_cost, active, info_sharing,info_delay,
                        rounds_completed, is_default_game , starting_inventory]
            AddToDatabase('Game', game_data)


        def deactivate_wholesaler(self):

            if self.rounds_completed > 0:
                raise Exception('Game has started, Cannot Remove Wholesaler!')

            else:
                self.wholesaler_present = False
                return True

        def deactivate_distributor(self):

            if self.rounds_completed > 0:
                raise Exception('Game has started, Cannot Remove Distributor!')

            else:
                self.distributor_present = False
                return True


        def add_player(self, p_id):
            try:
                AddToDatabase('Plays_In', [self.session_id, p_id])
                return True

            except:
                raise Exception("Could not add player to the game!")
            
        def remove_player(self, p_id):
            query = "DELETE from test.Plays_In WHERE g_id ='%s'and p_id = %s;"% (str(self.session_id), p_id)
            try:
                execute_dbquery(query)
                return True

            except:
                raise Exception("Could not remove player from the game!")
        
        def advance_week(self):
            #Do other stuffs
            self.rounds_completed += 1
            #query = "UPDATE test.Game SET rounds_completed = %s WHERE session_id =  '%s'" % (self.rounds_completed, self.session_id) 
            #query2 = "UPDATE test.Round_History SET week = %s WHERE g_id = '%s'"% (self.rounds_completed, self.session_id)
            #execute_dbquery(query)
            #execute_dbquery(query2)
    #g = Game()
    #g.add_player(51)
    #g.remove_player(51)
    #g.deactivate_wholesaler()



    class Player:

        def __init__(self, id = 'Default', name = 'Defualt', email = 'Default', password = 'Default', currrent_game = g, role=0):
           
            self.id = id
            self.name, self.email = name, email
            self.role = role 
            self.password = password
            self.current_game = currrent_game
            self.current_inventory = self.current_game.starting_inventory
            self.current_backorder = 0

            user_data = [id, name, email, password]
            player_data = [id, currrent_game.session_id, role]
            AddToDatabase('User', user_data)
            AddToDatabase('Player', player_data)

        def join_instructors_game(self, g_id, i_id):
            try:
                AddToDatabase('Instructs', [i_id, self.id])
                AddToDatabase('Plays_In', [g_id, self.id])
                return True

            except:
                raise Exception("Could not add to the database!")
            
            
        def join_self_game(self):
            pass
            #To be implemented later

        def make_self_game(self):
            pass
            #To be implemented later


        def receive_beers(self, numberofBeers):

            self.current_inventory += numberofBeers

            query = "Select * from test.Round_History where g_id = '%s' and p_role = %s" % (self.current_game.session_id, str(self.role))
            if (execute_dbquery(query).fetchone == Null ):

                data = [self.current_game.session_id, self.role, self.current_game.rounds_completed, self.current_inventory, 
                        self.current_backorder, 0, 0]
                AddToDatabase('Round_History', data)

            else:
                query = "UPDATE test.Round_History SET inventory = %s WHERE g_id = '%s' and p_role = %s" % (self.current_inventory, self.current_game.session_id, str(self.role))
                execute_dbquery(query)


        def order_beers(self, numberofBeers):
            query = "Select * from test.Round_History where g_id = '%s' and p_role = %s" % (self.current_game.session_id, str(self.role))
            if (len(execute_dbquery(query).fetchall()) == 0 ):

                data = [self.id, self.current_game.rounds_completed, self.current_inventory, 
                        self.current_backorder, numberofBeers , 0, self.current_game.session_id, self.role]
                AddToDatabase('Round_History', data)

            else:
                query = "UPDATE test.Round_History SET order_request = %s WHERE g_id = '%s' and p_role = %s" % (numberofBeers, self.current_game.session_id, str(self.role))
                execute_dbquery(query)

        def shipped_out(self):

            if (self.current_inventory < self.current_backorder):
                self.current_backorder -= self.current_inventory
                self.current_inventory = 0
                

            else:
                self.current_inventory -= self.current_backorder
                shippedThisWeek = self.current_backorder
                self.current_backorder = 0

                if (self.role != 0):
                    query = "Select order_request from test.Round_History where g_id = '%s' and p_role = %s and week = %s" % (self.current_game.session_id, str(self.role -1 ), self.current_game.rounds_completed-self.current_game.info_delay)

                    shipping_request = list(execute_dbquery(query).fetchone())
                    print(shipping_request)
                    if (shipping_request[0] > self.current_inventory):
                        self.current_backorder += shipping_request[0] - self.current_inventory
                        shippedThisWeek += self.current_inventory
                        self.current_inventory = 0

                    else:
                        self.current_inventory -= shipping_request[0]
                        shippedThisWeek += shipping_request[0]

                    data = [self.id, self.current_game.rounds_completed, self.current_inventory, 
                                self.current_backorder, 0, shippedThisWeek, self.current_game.session_id, self.role]
                    AddToDatabase('Round_History', data)


    #p1 = Player(1, 'test', 'test@email', 'strong', g, 1)
    #p2 = Player(2, 'test2', 'test2@email', 'strong', g, 2)
    #p3 = Player(3, 'test3', 'test3@email', 'strong', g, 3)
    #p4 = Player(4, 'test4', 'test4@email', 'strong', g, 4)
    #p.join_instructors_game('Default', 100)



    class Instructor:

        def __init__(self, id = 'Default', name = 'Defualt', email = 'Default', password = 'Default', my_default_game = 'Default'):
            
            self.id = id
            self.name, self.email = name, email
            self.password = password
            self.my_default_game = my_default_game

            user_data = [id, name, email, password]
            instructor_data = [id, default_games]
            AddToDatabase('User', user_data)
            AddToDatabase('Instructor', instructor_data)

    #i = Instructor(100, 'Instructor1', 'Instructor_test@example.com', '$tr0ng', 'game1')


  



    class Demand_Pattern:

        def __init__(self, id = 0, name = 'Default', weeks = 26, owned_by = 'Default'):

            self.id = id
            self.name = name
            self.weeks = weeks
            self.owned_by = owned_by

            demand_Pattern_data = [id, name, weeks, owned_by]
            AddToDatabase('Demand_Pattern', demand_Pattern_data)
        
    #d = Demand_Pattern('h3u', 'Test Demand', 8, '1')
import unittest
class TestClass(unittest.TestCase):
    def test_shipment(self):
        #Start a game with 5 completed rounds
        g = Game ('Game1', 26, True, True, 0.5, 1.0, 'Instructor1', True, False, 2, 'Demand1', 5, True, 6)

        #role = 3 i.e. Distributor
        sender = Player( '3', 'Sender', 'sender@example.com', 'pa$$word', g, 3)

        #role = 2 i.e. Wholesaler
        receiver = Player('2', 'Receiver', 'receiver@example.com', 'pa$$w0rd', g, 2)
        sender.current_inventory = 6
        receiver.order_beers(8)
        #Wait for 2 more rounds
        g.advance_week()
        g.advance_week()
        sender.shipped_out()
        self.assertEqual(sender.current_backorder,2)

#A = TestClass()
#A.test_shipment()
"""