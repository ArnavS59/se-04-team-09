# se-01-team-09
SE Sprint 01, Team 09, 09.03.2021

On this sprint the contributors focused on the front-end. They used HTML, CSS, REACT JS and SCSS. The testing was done using plain JS code. 
**Note:** 
1. The repository contributors have made templates for each page and state and have not dealt with routing.
2. Please run as seperate files not as a whole project.

This repository contains the following files (extensive details have been included in the documentation file):
1.	Firstreactproject folder contains:
  A.	Src folder contains: 
    a.	Home.html – the main webpage of the Beer Game which shall redirect to the authentication page.
    b.	Pictures folder contains the pictures used in the home.html.
    c.	App.jsx contains all the main components login and register
    d.	App.scss style sheet styles the App.jsx file and the components while manifesting the transition animation. 
    e.	Components folder and in it Login folder with: 
        i.	login.jsx for user login container component. 
        ii.	register.jsx for user registration container component. 
        iii.	style.scss styles login.jsx and register.jsx.
        iv.	index.jsx exports the login and register component and the styls scss to be applied. 
    f.	Test cases run on the authentication page through the file App.test.js. In order to run the test cases, run the command npm test in the root folder.
                                                                     
                                                                     -Up to here the contribution was made by Korin Hoxha-
                                                                     
                                                                     -below you can find the contribution by Subigya Poudel-
The folder **signed_in_views** contains folders:
1. instructor_view folder
   a. edit_games folder
   b. general_template_for_instructors folder
   c. my_games folder
   d. new_game folder
2. player_view folder
   a. activity_single folder
   b. game_screen folder
   c. general_template_for_players folder
   d. index_page folder
   e. my_games folder
   f. my_instructors folder
   g. single_game folder
   
   
**Recommendations for improvements:**
The documentation in the first sprint has failed to mention these possibilities: 
1. The demand set by the instructor can have three patterns:
   ○ Pattern 1 - the default pattern.
   ○ Pattern 2 – shall have an increasing spike then balances out.
   ○ Pattern 3 – shall be set by the Instructor user.
2. The number of players is flexible and is set by the instructor (as the number of a classroom might not be even numbered). Example: If a Wholesaler is presen, a Wholesaler sector is added.
3. Though it is mentioned that the instructor must be able to supervise the current state of each game during a session it is not mentioned how to. We suggest a_ freeze game_ option that shall allow the instructor to pause the to interact with the Student users. The game shall be restored by using another _Continue_ button.
4. A Reset game option can be implemented to restart game to week 1 with the game’s default values.
5. Authentication credentials are set by the instrucor for the student players and he is able to print the passwords accordingly for all of them. So rather the instructor plays the role of an "admin".
6. It shall not allow a game to be started unless there are at least one player in the Factory station and one player in the Distributor station.



# se-01-team-09
SE Sprint 02, Team 09, 23.03.2021 Haolan Zheng Lalit Chaudhary



