from flask import Blueprint, render_template, request, flash, redirect, url_for, jsonify, session, Flask
from flask_login import login_required, current_user
from os import path
import json
from functools import wraps
from flask_mysqldb import MySQL

# -----------------------------------------------------------------------
# Temporary working with database.db

import re
app = Flask(__name__)

app.config['MYSQL_HOST'] = "localhost"
app.config['MYSQL_USER'] = "root"
app.config['MYSQL_PASSWORD'] = "asingh19"
app.config['MYSQL_DB'] = "flaskapp5"
app.config['SECRET_KEY'] = 'I am the Secret Key of this Beer Game Project'

mysql = MySQL(app)

# -----------------------------------------------------------------------


@app.route('/', methods=["POST", "GET"])  # Login form do hashing
def login():
    msg = ''
    if request.method == 'POST' and 'email' in request.form and 'password' in request.form:
        # Create variables for easy access
        email1 = request.form['email']
        password1 = request.form['password']
        # Check if account exists using MySQL
        cursor = mysql.connection.cursor()
        cursor.execute(
            'SELECT * FROM User WHERE email = %s AND password = %s', (email1, password1,))
        # Fetch one record and return result
        account = cursor.fetchone()
        if account:
            # Create session data, we can access this data in other routes
            session['loggedin'] = True
            session['id'] = account[0]
            session['name'] = account[1]
            session['isInstruct'] = account[4]
            # print(session['isInstruct'])
            # if account[4]==1:
            #     return render_template('instructorview.html')
            # # session['email'] = account[3]
            #     # Redirect to home page
            # else:
            return redirect(url_for('home'))
        else:
            # Account doesnt exist or username/password incorrect
            msg = 'Incorrect email/password!'
    return render_template('starter.html', msg=msg)


@app.route('/logout')
def logout():
    # Remove session data, this will log the user out
    session.pop('loggedin', None)
    session.pop('id', None)
    session.pop('name', None)
    # Redirect to login page
    return redirect(url_for('login'))


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST' and 'name' in request.form and 'password' in request.form and 'email' in request.form:
        name1 = request.form['name']
        password1 = request.form['password']
        email1 = request.form['email']
        role1 = request.form.getlist('mycheck')

        if role1 == []:
            role1 = 0  # 0 means not an instrucot 1 means true is an instrucutor
        else:
            role1 = 1
        cursor = mysql.connection.cursor()
        cursor.execute('SELECT * FROM User WHERE email = %s', (email1,))
        account = cursor.fetchone()
        # If account exists show error and validation checks
        if account:
            flash('Account already exists!', category='error')
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email1):
            flash('Invalid email address!', category='error')
        elif not re.match(r'[A-Za-z0-9]+', name1):
            flash('Username must contain only characters and numbers!',
                  category='error')
        elif not name1 or not password1 or not email1:
            flash('Please fill out the form!', category='error')
        else:
            cursor.execute('INSERT INTO User VALUES (NULL,%s, %s, %s, %s)',
                           (name1, email1, password1, role1))
            mysql.connection.commit()
            session['loggedin'] = True
            session['name'] = name1
            session['isInstruct'] = role1

            cursor.execute('SELECT id FROM User WHERE email = %s',
                           (email1,))  # just get the recent most id
            newid = cursor.fetchone()
            newid2 = newid[0]  # the first column i.e the id
            session['id'] = newid2
            if role1 == 0:  # if player it was player also insert into player table
                cursor.execute('INSERT INTO Player VALUES(%s,NULL)', (newid2,))
                mysql.connection.commit()
            else:  # also insert into instructor table
                cursor.execute(
                    'INSERT INTO Instructor VALUES(%s,NULL)', [newid2])
                mysql.connection.commit()
            flash('Account sucessfully created!', category='success')
            return redirect(url_for('home'))
    elif request.method == 'POST':
        flash("Form empty")

    return render_template("register.html", user=current_user)



@app.route('/home/creategame', methods=['GET', 'POST'])
def creategame():
    if 'loggedin' in session and session["isInstruct"]:
        if request.method == 'POST' and 'sessionlength' in request.form and 'backlogcost' in request.form and 'Holdingcost' in request.form and 'startinginventory' in request.form and 'Roundscompleted' in request.form:
            startinginventory = request.form['startinginventory']
            sessionlength = request.form['sessionlength']
            Holdingcost = request.form['Holdingcost']
            Roundscompleted = request.form['Roundscompleted']
            backlogcost = request.form['backlogcost']
            # wholesaler_p = request.form['wholesalerp']
            # distributor_p = request.form['distributorp']
            # infoshare = request.form['infoshare']
            instructid = session['id']
            cursor = mysql.connection.cursor()
            cursor.execute('INSERT INTO Game VALUES (NULL,%s, %s, %s, %s, %s, %s, %s, %s)', (
                sessionlength, 0, 0, Holdingcost, backlogcost, 0, Roundscompleted, startinginventory))
            mysql.connection.commit()

            # Also insert into the instructor/game table
            cursor.execute(
                ' SELECT session_id FROM Game ORDER BY session_id DESC LIMIT 1;')
            recentgameid = cursor.fetchone()
            gameid = recentgameid[0]
            # session['gameid']=gameid
            cursor.execute('INSERT INTO Monitors VALUES (%s, %s)',(instructid, gameid))
            mysql.connection.commit()

            flash('Game sucessfully created!', category='success')
        return render_template('creategame.html')
    else:
        return redirect(url_for('index'))


@app.route('/home/createdgames', methods=['GET', 'POST'])
def createdgames():
    if 'loggedin' in session and session["isInstruct"]:
        instructid = session['id']
        cur = mysql.connection.cursor()
        cur.execute(
            "SELECT * FROM Monitors where i_id = {};".format(instructid))

        userdetails = cur.fetchall()
        return render_template('createdgames.html', userdetails=userdetails)
    return redirect(url_for('login'))


@app.route('/home/joingame', methods=['GET', 'POST'])
def joingame():
    if 'loggedin' in session and not session['isInstruct']:
        if request.method == 'POST' and 'role' in request.form and 'gameid' in request.form:
            player_id = session['id']
            role1 = request.form['role']
            print(role1)
            gameid = request.form['gameid']
            cur = mysql.connection.cursor()
            cur.execute("SELECT * FROM Game where session_id = {};".format(gameid))
            game=cur.fetchone()
            if game:
                    cur.execute("SELECT EXISTS (SELECT * FROM Plays_In WHERE p_id= {} and g_id={});".format(player_id,gameid)) # to check if player already joined game
                    entries=cur.fetchone()
                    entry=entries[0]
                    if entry==1: # exists
                        flash("Cannot join the same game again",category='error')
                    else:
                        cur.execute("INSERT INTO Plays_in VALUES ({}, {},{});".format(player_id,gameid,role1))
                        mysql.connection.commit()
                        flash("Game joined succesfully")
            else:
                flash("There is no game for given id",category='error')
        return render_template('joingame.html')
    return redirect(url_for('index'))


# def rolecheck(id):







@app.route('/home/viewgames', methods=['GET', 'POST'])
def viewgame():
    if 'loggedin' in session and not session['isInstruct']:
        player_id = session['id']
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM Plays_in where p_id = {};".format(player_id))
        userdetails = cur.fetchall()
        return render_template('viewgames.html', userdetails=userdetails)
    return redirect(url_for('index'))


@app.route('/home/viewgamedetail', methods=['GET', 'POST'])
def viewgamedetail():
    if 'loggedin' in session and session['isInstruct']:
        data = []
        instructid = session['id']
        cur = mysql.connection.cursor()
        cur.execute(
            "SELECT g_id FROM Monitors where i_id = {};".format(instructid))
        ids = cur.fetchall()
        gameids = zip(*ids)
        for gameid in gameids:
            print(gameid)
            for values in gameid:
                cur.execute(
                    "SELECT * FROM Game where session_id= {} ;".format(values))
                gamedetails = cur.fetchall()
                data.append(gamedetails)
        print(data)
        return render_template('viewdetails.html', data=data)
    return redirect(url_for('index'))


@app.route('/home/modifygame/<int:id>', methods=['GET', 'POST'])
def modifygame(id):
    if 'loggedin' in session and session['isInstruct']:
        if request.method == 'GET':
            cur = mysql.connection.cursor()
            cur.execute("SELECT * FROM Game where session_id= {} ;".format(id))
            gamedetails = cur.fetchone()
            return render_template('modify.html', gamedetails=gamedetails)
        elif request.method == 'POST':
            # DB need to immplement here
            return 'ok'
    return redirect(url_for('login'))


@app.route('/home/deletegame/<int:id>', methods=['GET', 'POST'])
def deletegame(id):
    if 'loggedin' in session and session['isInstruct']:
        cur = mysql.connection.cursor()
        cur.execute("DELETE FROM Game WHERE session_id = {};".format(id))
        mysql.connection.commit()
        flash("Game sucesfully deleted")
        return render_template('createdgames.html')
    return redirect(url_for('login'))


@app.route('/home/entergame/<int:id>', methods=['GET', 'POST'])
def entergame(id):
    if 'loggedin' in session and not session['isInstruct']:
        return render_template('entergame.html')
    return redirect(url_for('login'))


@app.route('/home/leavegame/<int:id>', methods=['GET', 'POST'])
def leavegame(id):
    if 'loggedin' in session and not session['isInstruct']:
        player_id = session['id']
        cur = mysql.connection.cursor()
        cur.execute(
            "DELETE FROM Plays_In WHERE p_id = {} and g_id={};".format(player_id, id))
        mysql.connection.commit()
        flash("Game sucesfully left")
        return render_template('viewgames.html')
    return redirect(url_for('login'))


@app.route('/home/order/<int:units>', methods=['GET', 'POST'])
def orderbeer(units):
    if 'loggedin' in session and not session['isInstruct']:
        player_id = session['id']
        order_beers(id, units)
        flash("Order sucesfully placed!")
        return render_template('entergame.html')
    return redirect(url_for('login'))


@app.route('/home/week', methods=['GET'])  # to display the table quadrant 1
def getweekhistory():
    if 'loggedin' in session and not session['isInstruct']:
        player_id = session['id']
        cur = mysql.connection.cursor()
        cur.execute("SELECT * from Round_History where p_id = {}".format(player_id))
        gamedetails =cur.fetchone()
        if not gamedetails:
            gamedetails=None
        return render_template('entergame.html', gamedetails =gamedetails)
    return redirect(url_for('login'))


@app.route('/home/createdemandpattern', methods=['GET', 'POST'])
def createdemandpattern():
    if 'loggedin' in session and session['isInstruct']:
        return "TO BE IMPLEMENTED"
    return redirect(url_for('login'))


@app.route('/home')
def home():
    # Check if user is loggedin
    if 'loggedin' in session:
        # User is loggedin show them the home page
        # mapping to check if instructor or player
        if 'isInstruct' in session and session["isInstruct"]:
            # return "instruot ok"
            return render_template('instructor.html', name=session['name'])
        else:
            return render_template('player.html', name=session['name'])
    # User is not loggedin redirect to login page
    flash("You need to login first")
    return redirect(url_for('login'))


def get_rounds_completed(id):
    cur = mysql.connection.cursor()
    cur.execute(
        "SELECT rounds_completed from Game where session_id = {}".format(id))
    rounds = cur.fetchone()
    return int(rounds[0])


def advance_week(roundcomp, time, id):
    cur = mysql.connection.cursor()
    cur.execute("UPDATE Game SET rounds_completed = {} WHERE session_id = {};".format(
        (roundcomp+time), id))
    return


def order_beers(id, numberofBeers):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * from Round_History where p_id = {}".format(id))
    exists = cur.fetchone()

    if exists:  # if there is already a round history then just update else , insert the data.
        cur.execute("UPDATE Round_History SET order_request = {} WHERE p_id = {}".format(
            numberofBeers, id))
        mysql.connection.commit()
    else:
        cur.execute("INSERT INTO Round_History VALUES () ")
        mysql.connection.commit()
        # data = [self.id, self.current_game.rounds_completed, self.current_inventory,
        #                 self.current_backorder, numberofBeers , 0]
        # AddToDatabase('Round_History', data)



def receive_beers(id, numberofBeers, current_inventory):
    current_inventory += numberofBeers
    cur = mysql.connection.cursor()
    cur.execute("SELECT * from Round_History where p_id = {}".format(id))
    exists = cur.fetchone()
    if exists:
        cur.execute("UPDATE Round_History SET inventory ={} WHERE p_id = {}".format(
            numberofBeers, id))
        mysql.connection.commit()
    else:
        cur.execute("INSERT INTO Round_History VALUES () ")
        mysql.connection.commit()
        # data = [self.id, self.current_game.rounds_completed, self.current_inventory,self.current_backorder, 0, 0]
        # AddToDatabase('Round_History', data)


# def shipped_out(self, game, receiver):

#     if (self.current_inventory < self.current_backorder):
#         self.current_backorder -= self.current_inventory
#         self.current_inventory = 0

#     else:
#         self.current_inventory -= self.current_backorder
#         self.current_backorder = 0
#         shippedThisWeek = self.current_inventory

#         if (self.role != 0):

#             query = "Select order_request from testdb.Round_History where p_id = '%s' and week = '%s'" % (
#                 receiver.id, (game.get_rounds_completed() - game.info_delay))
#             shipping_request = int((execute_dbquery(query).fetchone())[0])

#             if (shipping_request > self.current_inventory):
#                 self.current_backorder += shipping_request - self.current_inventory
#                 shippedThisWeek += self.current_inventory
#                 self.current_inventory = 0

#             else:
#                 self.current_inventory -= shipping_request
#                 shippedThisWeek = + shipping_request

#             data = [self.id, game.get_rounds_completed(), self.current_inventory,
#                     self.current_backorder, 0, shippedThisWeek]
#             AddToDatabase('Round_History', data)


def getGamedetails(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Game where session_id= {} ;".format(id))
    gamedetails = cur.fetchone()
    length = gamedetails[1], holdingcost = gamedetails[4], backlogcost = gamedetails[
        5], roundcompleted = gamedetails[7], startinv = gamedetails[8]
    return length, holdingcost, backlogcost, roundcompleted, startinv


app.run(debug=True)
