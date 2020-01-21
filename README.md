#Othello
  
This is my second milestone project for Code Institute, a interactive front-end project. As this project is suposed to bring together and 
practice my Javascript skills, I decided to build a two player, mobile first, offline version of the board game Othello!

One or two paragraphs providing an overview of your project.

Essentially, this part is your sales pitch.

___

## UX

#### User stories 

***for the gamer:***

* as a user, I wish to play a game of Othello without needing the board game.
* as a user, I wish to challenge someone around me for a game of othello.
* as a user, I wish to read the rules of the game to clearify how it works. 
* as a user, I wish to practice certain patterns to improve my skills at othello.

*The ways this project help the user achieve these goals:*

* By providing a board game of othello with a clean layout which is viually pleasing.
* By providing a 2 player game mode availible in different sizes creating different lenghts and challenges.
* By providing clear rules and instructions which the game follows as well.
* By providing a game that flipps all discs correctly after the rules. 

***for the developer***

* As a developer, I want to write vanilla Javascript to put what I've been learning to the test.
* As a developer, I want to make a game which has a clear structure and set of rules and create 
that logistics from scratch. 
* as a developer, i wish to create a project that can grow as my skills grow. With the potential to later
become a larger project. 

*The ways this project helped me, the developer to achieve these goals:*

* The Othello game is quite simple board game, but has a clear set of rules a move can be made. 
* The development of this game has to be structured around the rules of the game to make sure no false moves can be made.
* Othello is said to take a minute to learn, but a lifetime to master. This game can be continually expanded.
first to a single player game mode, and then expand on the functionallity of the "opponent" in this game mode,
making it more clever and harder to play against.  

Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

As a user type, I want to perform an action, so that I can achieve a goal.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.
______

## Features

#### Feature 1 - Start Menu
The start menu is the first thing a user sees when opening the game.
firstly, it welcomes the player and describes what version of othello this is.
There are two things asked of the player, which board size they wish to use, and to press the "start!" button.
Board size 8x8 is the default size.    
This menu can be accessed at any time during the game. Therefore this menu can also be closed at the top right
corner without resetting a gaming session. 

#### Feature 2 - The Board Page 
This page is where the board game is. If the game has been initialized four discs will be displayed 
at the center of the board. Othervise the user will be shown an empty board with a message encouraging him/her to start a game.
The board is clickable and if the player click on a square that is a valid move, a disc will appear there and the 
others that should flipp will do so. 
*In Desktop view*
Above the board and centered, is a text displaying which player should make the next move.
On each side of the board is a scorecounter displaying the disc of the player and a number
with the current score of respective player.


#### Feature 3 - Rules Page
The basic goal of the game is displayed and then there are instructions of how a valid move 
can be made in the game. This is explained with both readable instructions and images.
Then there is a list of the different rules of the game, containing images where appropriate. 
In the end there are some examples of how certain moves can turn discs in multiple directions.
This page can be opened at any time during a game session, and closed by clicking on either side 
to close it without interupting the current game session. 

#### Feature 4 - Notification pop-ups
***There are two pop-ups in this game***
First notifies the player that he/she unfortunatly can't make a valid move at this point, his/hers turn will
be skipped and the other player will play instead. This can be closed by clicking the "continue" button.

Second lets the players know that the game is over. Their score is displayed and they can choose to either press
"Continue" or "Restart". Continue closes the pop-up and lets the players look over the previous game. Restart 
takes the player back to the start menu.

### Features left to implement 
1. I wish to make this game availible as a single player game where one plays against the program. 
This can be expandable as well by making the opponent more difficult, making it possible to implement different difficulties as well.
2. It would be possible to expand this to be an online game where you can play against other players remotly.
This can also be expanded with logins and scoreboards. 


In this section, you should go over the different parts of your project, and describe each in a sentence or so.

Existing Features
Feature 1 - allows users X to achieve Y, by having them fill out Z
...
For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

Features Left to Implement
Another feature idea
##Technologies Used
#### languages, Libraries, Version Control, Editors:
* **Main Languages Used:** HTML, CSS and Javascript was used to create this project.
* **Libraries:** 
1. Bootstrap 4 was used as a core structure of the HTML document for its gridsystem and responsiveness.
Link: https://getbootstrap.com/docs/4.0/getting-started/download/#bootstrapcdn
2. Fontawesome was used for the menu icon on smaller screens.
link: https://fontawesome.com/icons?d=gallery
* **Version Control:** git was used for version control in this project and github to host the deployed project and the repository.
* **Editors:** For the majority of the project Cloud9 was used but in the end it was moved over to gitpod.
links: Cloud9 - https://aws.amazon.com/cloud9/ 
       Gitpod - https://www.gitpod.io/

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.

Credits
Content
The text for section Y was copied from the Wikipedia article Z
Media
The photos used in this site were obtained from ...
Acknowledgements
I received inspiration for this project from X