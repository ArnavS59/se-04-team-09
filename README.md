BEER GAME ------------------------------------------------------------------------------------------ GitHub Group 9

Note: To properly view this document use 8 character tabs.

1.Installation
2.How to use
3.Code Structure
4.WorkLogs
5.Future Insight
----------------------------------------------------------------------------------------------------------------------
1.INSTALLATION

	1.1 Prerequisites

		React version : 17.0.1
		Use : 
		> sudo npm install -g create-react-app

		Python version : 3.8.1
		Use :
		> sudo apt-get install python3-pip

		MySQL version : 8.0.23
		Use :
		> sudo apt-get install mysql-server
		> sudo secure_mysql_installation
		
		Sqlite version : 3.31.1
		Use :
		> sudo apt-get install sqlite3
		> sudo apt-get install sqlitebrowser


	
	1.2 Initializing
		
		Before testing any of the parts get the project using : > git clone https://github.com/lorenzorota/se-02-team-10.git
		
		1.2.1 Frontend:
		
				1.2.1.1 Default Template :
				
				It is found at ../se-03-team-09/flask-server/templates.
				It is automatically run when you run the server.
				Note: If you have problems trying to run it frontend-wise, use :
				> npm install bootstrap --save
				> npm install --save react-router-dom
				
				1.2.1.2 Template 1:
				
				Create your react app using : > npx create-react-app my-app
				Go into my-app folder
				Install the external packages:
				> npm install bootstrap --save
				> npm install --save react-router-dom
				> npm install react-pro-sidebar
				> npm install react-icons --save
				Copy  files & folders : "src, public, startbootstrap-simple-sidebar-gh-pages, and package.json" from my-app folder in git to your react folder my-app,
				> npm start
				
				1.2.1.3 Template 2:
				
				Check Sprint 1+2 for documentation.
				Note: Documentation may not state how to run the code, so you must get the information from previous sprints if you want to use a different template.
		
		1.2.2 Database initialization:
		
			Enter mysql in the machine: > sudo mysql -u root -p
			Use command: > Create database testdb;
			Import tables in testdb: > sudo mysql -u root -p testdb < 'path'/SQLSchema.sql ('path' for whatever path you cloned the git at)
			
		1.2.3 Database server side:
		
			Testing Database API server-side, run following commands: 
				> sudo apt-get install python3-pip
				> sudo pip3 install virtualenv
				> virtualenv env
				> source env/bin/activate
				> sudo pip3 install flask flask-sqlalchemy
				> sudo apt-get install libmysqlclient21
				> sudo apt-get install libmysqlclient-dev
				> sudo apt-get install python-dev default-libmysqlclient-dev
				> sudo pip3 install flask-mysqldb
				> sudo pip3 install flask-mysql
			Copy the "app.py" file into the folder you created above named "env".
			Change the MYSQL credentials located at the top of the "app.py" file to match your MYSQL server.
			Run the script using the command: FLASK_APP=app.py flask run (server side not functional yet)

		1.2.4 Database backend side:

			Go to the folder where app.py is
			> pip3 install flask flask-sqlalchemy
			> pip3 install flask-mysql
			> (sudo) python3 app.py
			
			Note: 

				Two problems may arise, 1st that flaskext.mysql is not known as a module, try installing using : > pip intall flask-mysql
				and visit https://flask-mysql.readthedocs.io/en/latest/# for any other problem.
				2nd there may be a security problem where root@localhost is not allowed to enter. You will need to change the native password of
				the user root at mysql to the credentials you are using at app.py and go to /usr/local/lib/python3.8/dist-packages/flaskext/mysql.py
				and change the default credentials there to your credentials. This happend when the project was run from a new linux virtual machine.

			Note to Devs:

				If you want to run app.py again you need to run these 2 commands so you do not have duplicate key:
				> sudo mysql -u root -p testdb < 'path'/Drop-Tables.sql ('path' for whatever path you cloned the git at)
				> sudo mysql -u root -p testdb < 'path'/SQLSchema.sql ('path' for whatever path you cloned the git at)
				
		1.2.5 Combined Project:
			
			
			Prerequisites:
			> sudo pip3 install SQLAlchemy
			> sudo pip3 install flask-login
			> sudo pip3 install -U Werkzeug
			
			Be sure to use a virtual environment for the combined project.
			
			Simply go to ../se-03-team-09/flask-server and to run server:
			> python3 main.py
			
			To run test cases:
			> python3 test.py
			
----------------------------------------------------------------------------------------------------------------------
2. HOW TO USE
	
	2.1 Landing Page
	
		There will be 4 buttons which lead to 4 paths from here.
		You can choose to signin or signup either as a student or a professor.
		 
	2.2 Signin Page
		
		Press Signin button accordingly to your status.
		Insert Username & Password and submit.

	2.3 Signup Page
		
		Press Signup button accordingly to your status.
		Insert the required fields.
		Press submit button so your credentials are saved at the database.

	2.4 Instructor View

		2.4.1 Creating Games (Non-functional)

			Choose prefered settings for the game.
			Time Delay is used for the delay in communication.
			After you press "Create Games", you can proceed to Inspecting.
			Press Reset button to reset the game in the same settings.
			Press Freeze button to stop the current game.
			Press Inspect Games button to inspect the games.
		
		2.4.2 Inspect Games (Non-functional)
			
			Show the statistics of the current games.
			Press Plot button to plot the graph for the costs of the selected game.
			Press Freeze button to stop the selected game.
			
	2.5 Student View
				
		2.5.1 Pre-Game Page (Non-functional)
			
			Shows your game password and position.
			If not registered you can press register now.
		
		2.5.2 Decision Page (Non-functional)
			
			Shows your inventory, incoming shipment , the demand and, the backorder.
			You can insert your decision and press Submit button to continue for next week.
			Press Go to Graph button to go to Graph Page.
			Press Check Others' Order button to go to Others' Order Page.
			Press Go to Fatory Info button to go to Factory Info Page.
			
		2.5.3 Graph Page (Non-functional)

			Shows information about the delays of the game regarding information and shipment exhange.
			Press Demand Plot to generate a demand graph.
			Press Order Plot to generate a order graph.
			Press Inv/Backorder Plot to generate a inverntoy status graph.
			Press Plot All to generate all the graph stated above in the same time.
			Press Back to Game button to go to Decision Page.
			Press Check Others' Order button to go to Others' Order Page.
			Press Go to Fatory Info button to go to Factory Info Page.
		
		2.5.4 Others' Order Page (Non-functional)
			
			Shows if the other players have made a decision.
			Press Back to Game button to go to Decision Page.
			Press Go to Graph button to go to Graph Page.
			Press Go to Fatory Info button to go to Factory Info Page.

		2.5.5 Factory Info Page (Non-functional)
			
			Shows the information about your postion status for all the weeks 
			Press Back to Game button to go to Decision Page.
			Press Go to Graph button to go to Graph Page.
			Press Check Others' Order button to go to Others' Order Page.

	2.6 Database API server side:

		This is not yet functional.
	
	2.7 Database API backend side:

		It can be run with the instruction given above.
		Test cases are done automatically. Results can be seen by accessing the database through mysql shell.
----------------------------------------------------------------------------------------------------------------------
3. Code Strucutre

	3.1 Writing Sytle
		
		.js, .html and, .py are written in Camel-case.
		.css and, .scss files are written in Kebab-case.

	3.2 File Strucutre
		
		Database .sql code is found in the "Database" folder.
		Database backend & serverside code is found in "Database API" folder, one can find all the functionalities here.
		Combined project can be found in "flask-server" folder.
			"flask-server" folder follows the default folder structure of any flask created server. 
			Frontend is found in templates.
		Different Frontend Templates can be found at "Frontend Templates" Folder.
		Previous sprint contribution is found in "Sprint 1+2"
-----------------------------------------------------------------------------------------------------------------------
4. Worklogs

	4.1 Sprint 1 + 2

		Can be found in ../se-03-team-09/Sprint 1+2/README.md
	
	4.2 Sprint 3
		
		Arber Lleshi & Emre
		# se-03-team-9
		SE Sprint 03, Team 9
		
		Sprint #	Date		Contribution
		03		05/04/21	Combined Frontend and Backend.
		03		05/04/21	Added features in app.py.
		03		05/04/21	Folder Structure Improvement.
		03		05/04/21	Documentation Improvement.
		
	Note for TAs: Due to lack of documentation, we could not make the program work so we used our code from previous sprints to make progress in this group.
------------------------------------------------------------------------------------------------------------------------
5. Future Insight

	5.1 Insight for Second Sprint

		Expand the Combined project.
		Add the functionalities of app.py
		Try and connect flask-server with the MySQL database.
------------------------------------------------------------------------------------------------------------------------


		

