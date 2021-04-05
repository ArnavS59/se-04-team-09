from flask import Blueprint, render_template, request, flash, redirect, url_for, jsonify, session, Flask
from models import Student, Instructor
from werkzeug.security import generate_password_hash, check_password_hash
from __init__ import db, create_database
from flask_sqlalchemy import SQLAlchemy
from flask_login import login_required, current_user
from os import path
import json
from functools import wraps

#-----------------------------------------------------------------------
# Temporary working with database.db

db = SQLAlchemy()
DB_NAME = "database.db"
app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'I am the Secret Key of this Beer Game Project'
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
db.init_app(app)



from models import Instructor, Student

create_database(app)

#-----------------------------------------------------------------------

def stud_login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            flash('You need to login first.')
            return redirect(url_for('stud_login'))
    return wrap

def inst_login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            flash('You need to login first.')
            return redirect(url_for('ins_login'))
    return wrap

#-----------------------------------------------------------------------
# Landing Page

@app.route("/")
def my_index():
    return render_template("starter.html")

#-----------------------------------------------------------------------
# Student Pages (If you want to change the templates change the files at folder templates)

@app.route("/student")
@stud_login_required
def student():
    return render_template("index.html")

@app.route("/studentGraph")
@stud_login_required
def studentGraph():
    return render_template("index.html")

@app.route("/studentDecision")
@stud_login_required
def studentDecision():
    return render_template("index.html")

@app.route("/studentFactoryProduction")
@stud_login_required
def studentFactoryProduction():
    return render_template("index.html")

@app.route("/studentStatus")
@stud_login_required
def studentStatus():
    return render_template("index.html")


#-----------------------------------------------------------------------
# Instructor Pages (If you want to change the templates change the files at folder templates)

@app.route("/instructor")
@inst_login_required
def instructor():
    return render_template("index.html")

@app.route("/instructorView")
@inst_login_required
def instructorView():
    return render_template("index.html")


#-----------------------------------------------------------------------
# Instructor Login

@app.route('/ins-login', methods=['GET', 'POST'])
def ins_login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        inst = Instructor.query.filter_by(email=email).first()
        if inst:
            if check_password_hash(inst.password, password):
                session['logged_in'] = True
                return redirect(url_for('instructor'))
            else:
                flash('Incorrect password, try again.', category='error')
        else:
            flash('Email does not exist.', category='error')

    return render_template("ins_login.html", user=current_user)


#-----------------------------------------------------------------------
# Student Login

@app.route('/stud-login', methods=['GET', 'POST'])
def stud_login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        student = Student.query.filter_by(email=email).first()
        if student:
            if check_password_hash(student.password, password):
                session['logged_in'] = True
                return redirect(url_for('student'))
            else:
                flash('Your password is Incorrect, try again.', category='error')
        else:
            flash('Your Email does not exist.', category='error')

    return render_template("stud_login.html", user=current_user)

#-----------------------------------------------------------------------
# Logouts

@app.route('/stud-logout')
@stud_login_required
def stud_logout():
    session.pop('logged_in', None)
    flash('You are Logged Out')
    return redirect(url_for('my_index'))

@app.route('/inst-logout')
@inst_login_required
def inst_logout():
    session.pop('logged_in', None)
    flash('You are Logged Out')
    return redirect(url_for('my_index'))


#-----------------------------------------------------------------------
# Instructor Sign up

@app.route('/ins-sign-up', methods=['GET', 'POST'])
def ins_sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        first_name = request.form.get('firstName')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')

        inst = Instructor.query.filter_by(email=email).first()
        if inst:
            flash('Email already exists.', category='error')
        elif password1 != password2:
            flash('Passwords don\'t match.', category='error')
        elif len(password1) < 7:
            flash('Password must be at least 7 characters.', category='error')
        else:
            new_inst = Instructor(email=email, first_name=first_name, password=generate_password_hash(
                password1, method='sha256'))
            db.session.add(new_inst)
            db.session.commit()
            session['logged_in'] = True
            flash('Account created!', category='success')
            return redirect(url_for('instructor'))

    return render_template("ins_sign_up.html", user=current_user)


#-----------------------------------------------------------------------
# Student Sign up

@app.route('/stud-sign-up', methods=['GET', 'POST'])
def stud_sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        first_name = request.form.get('firstName')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')

        student = Student.query.filter_by(email=email).first()
        if student:
            flash('Email already exists.', category='error')
        elif password1 != password2:
            flash('Passwords don\'t match.', category='error')
        elif len(password1) < 7:
            flash('Password must be at least 7 characters.', category='error')
        else:
            new_student = Student(email=email, first_name=first_name, password=generate_password_hash(
                password1, method='sha256'))
            db.session.add(new_student)
            db.session.commit()
            flash('Account created!', category='success')
            session['logged_in'] = True
            return redirect(url_for('student'))

    return render_template("stud_sign_up.html", user=current_user)


app.run(debug=True)
