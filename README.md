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

		Python version : 3.8.1
		Use :
		> sudo apt-get install python3-pip

		MySQL version : 8.0.23
		Use :
		Make sure to have sql 
		> sudo apt-get install mysql-server
		> sudo secure_mysql_installation

	
	1.2 Initializing
		
		Firstly start with > git clone https://github.com/lorenzorota/se-04-team-09.git
		
		1.2.1 Frontend/Backend:
			cd into flaskserver folder
			> pip install -r requirements.txt
			> python main.py
		
		1.2.2 Database initialization:
			Enter mysql in the machine: > sudo mysql -u root -p
			Enter your password
			Goto Database Folder and copy paste the contents of schemasql.sql into the sql terminal
			You can use the command > show tables; to make sure the tables were added into the db. 

		1.2.3 Test Cases:
				> cd into flaskserver
				> python3 tests.py
----------------------------------------------------------------------------------------------------------------------
2. HOW TO USE
	
	2.1 Landing Page
	
		You can choose to signin or signup either as a student or a professor.
		 
	2.2 Signin Page
		
		Press Signin button accordingly to your status.
		Insert Username & Password and submit.

	2.3 Signup Page
		
		Press Signup button accordingly to your status.
		Insert the required fields.
		Press submit button so your credentials are saved at the database.

	2.4 Instructor View

		2.4.1 Creating Games (Functional)

			Choose prefered settings for the game.
			Time Delay is used for the delay in communication.
			After you press "Create Games", you can proceed to Inspecting.
			Press Reset button to reset the game in the same settings.
			Press Freeze button to stop the current game.
			Press Inspect Games button to inspect the games.
		
		2.4.2 Inspect Games (Functional)
			
			Show the statistics of the current games.
			Press Plot button to plot the graph for the costs of the selected game.
			Press Freeze button to stop the selected game.
			
	2.5 Student View
				
		2.5.1 Pre-Game Page (Functional)
			
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

----------------------------------------------------------------------------------------------------------------------
3. Code Strucutre

	3.1 Writing Sytle
		
		.js, .html and, .py are written in Camel-case.
		.css and, .scss files are written in Kebab-case.

	3.2 File Strucutre
		
		Database .sql code is found in the "Database" folder.
		Database backend & serverside code is found in "flaskserver" folder, one can find all the functionalities here.
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
	
	4.3 Sprint 4
		
		Arnav Singh & Petri Gjoni
		# se-04-team-9
		SE Sprint 04, Team 9
		
		Sprint #	Date		Contribution
		04		27/04/21 	All contributions in the Sprint4Documenation.pdf file
		
		:)

-----------------------------------------------------------------------------------------------------------------------

		

