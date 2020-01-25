# Othello
  
This is my second milestone project for Code Institute, an interactive front-end project. As this project is supposed to bring together and 
practice my JavaScript skills, I decided to build a two player, mobile first, offline version of the board game Othello!
___

## UX

### User Stories 

***For the gamer:***

* As a user, I wish to play a game of Othello without needing the board game.
* As a user, I wish to challenge someone around me for a game of othello.
* As a user, I wish to read the rules of the game to clearify how it works. 
* As a user, I wish to practice certain patterns to improve my skills at othello.

*The ways this project help the user achieve these goals:*

* By providing a board game of othello with a clean layout which is viually pleasing.
* By providing a 2 player game mode availible in different sizes creating different lenghts and challenges.
* By providing clear rules and instructions which the game follows as well.
* By providing a game that flipps all discs correctly after the rules. 

***For the developer***

* As a developer, I want to write vanilla Javascript to put what I've been learning to the test.
* As a developer, I want to make a game which has a clear structure and set of rules and create 
that logistics from scratch. 
* As a developer, I wish to create a project that can grow as my skills grow. With the potential to later
become a larger project. 

*The ways this project helped me, the developer to achieve these goals:*

* The Othello game is quite simple board game, but has a clear set of rules a move can be made. 
* The development of this game has to be structured around the rules of the game to make sure no false moves can be made.
* Othello is said to take a minute to learn, but a lifetime to master. This game can be continually expanded.
First to a single player game mode, and then expand on the functionallity of the "opponent" in this game mode,
making it more clever and harder to play against.  

### Wireframes, Flowcharts and Communitaction Diagrams

#### Wireframes: 
[Start Page, Desktop and Mobile View](https://github.com/HeimirDavid/Othello/blob/master/assets/images/readme-img/wireframe-start.jpg)
      
[Game Page, Desktop View](https://github.com/HeimirDavid/Othello/blob/master/assets/images/readme-img/wireframe-dv.jpg)
      
[Game Page, Mobile View](https://github.com/HeimirDavid/Othello/blob/master/assets/images/readme-img/wireframe-mv.jpg)
      
#### Flowcharts: 
[First Game Logistics](https://github.com/HeimirDavid/Othello/blob/master/assets/images/readme-img/first-logistics-flowchart.jpg)
      
[Rules Function Logistics](https://github.com/HeimirDavid/Othello/blob/master/assets/images/readme-img/rules-function.jpg)
      
[Game Flow Function, controls after a placed disc](https://github.com/HeimirDavid/Othello/blob/master/assets/images/readme-img/game-flow.jpg)
      
#### Communication Diagrams: 
[Initialize the Board](https://github.com/HeimirDavid/Othello/blob/master/assets/images/readme-img/initialize-board.jpg)
      
#### Other:
[Direction Array Logistics](https://github.com/HeimirDavid/Othello/blob/master/assets/images/readme-img/direction-array.jpg)
______

## Features

#### Feature 1 - Start Menu
The start menu is the first thing a user sees when opening the game.
Firstly, it welcomes the player and describes what version of othello this is.
There are two things asked of the player, which board size they wish to use, and to press the "start!" button.
Board size 8x8 is the default size.    
This menu can be accessed at any time during the game. Therefore this menu can also be closed at the top right
corner without resetting a gaming session. 

#### Feature 2 - The Board Page 
This page is where the board game is. If the game has been initialized four discs will be displayed 
at the center of the board. Othervise the user will be shown an empty board with a message encouraging him/her to start a game.
The board is clickable and if the player click on a square that is a valid move, a disc will appear there and the 
others that should flipp will do so.    
*In Desktop view:*   
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
____

## Technologies Used
#### languages, Libraries, Version Control, Editors:
* **Main Languages Used:** HTML, CSS and Javascript was used to create this project.
* **Libraries:** 
1. Bootstrap 4 was used as a core structure of the HTML document for its gridsystem and responsiveness.
Link: https://getbootstrap.com/docs/4.0/getting-started/download/#bootstrapcdn
2. Fontawesome was used for the menu icon on smaller screens.
link: https://fontawesome.com/icons?d=gallery
* **MVC Architecture:** MVC (Model-View-Controller) was used in this project as the design and fundamentals of how it is structured.
* **Version Control:** Git was used for version control in this project and github to host the deployed project and the repository.
* **Editors:** For the majority of the project Cloud9 was used but in the end it was moved over to gitpod.
links: Cloud9 - https://aws.amazon.com/cloud9/ 
       Gitpod - https://www.gitpod.io/

____
## Testing
The functionality of the game has been manually tested at different stages of this project. 
One principle that has been used is regression testing after each added functionality.
Another technique was to console log the data from a specific function in development.  
A regular test after each modification would include: 
* Does the page still load?
* Does the game layout still looks the same way on all platforms?
* Does the menu buttons still work? 
* Is it still possible to click on a square and place a disc? 
* Does the placement of a disc flipp any other discs, and if so, correctly?
* Does this add on to the scorecounters?
* Does it toggle between players? 
* Does the pop-up messages still work at intended places?
* Does the game end at correct stages?
* Does the game over menu takes you to where you want to go?

### Game Functionality 
Due to the way this project has been structured with modules that serves a precise purpose each 
functionality has been easy to test straight away if it works, does nothing, or maybe even made the game worse. 
Example of this is how the functions to draw the board was built first, and then the one that draws the squares 
before any logistics of where they are supposed to be was made. The process of moving player data into the board array
was also possible to test straight away. If a player placed a disc somewhere on the board, it's supposed to show in the 
array and vice versa. 
The game rules therefore was easy to put in place due to the fact that you would straight away see if something 
wasn't working the way it was intended to. One example of a bug that was clearified as the rules started to work was 
the directions of a row one could flip discs. Two directions didn't work so all were tested with both black and white player.
The south and the northwest direction didn't work and the fault was in the direction array where these values were wrong.
Another interesting bug was in the beginning of the rules development as player white was not able to flip any discs while 
player black was able to. It took a long time to realize that it was due to a missing # on the color value of the disc itself.

One issue was the flow of the game. A bug that was discovered by my brother was the fact that if one player couldn't make a move, but the other one could, 
next time this would happen the game would notify that it was over. Which was not correct. The game is only over when no player
can make a move. 
This needed furter testing. After each player make a move controls need to be made, as followed:
* Is the board full?
* One player can not make a move? 
* No player can not make a move and the board is not full.
These three criterias have been taken care of and now works fine.

#### HTML and CSS
* ***W3C validator*** was used to test the CSS and HTML files which both returned a few varnings.
*CSS:* Two varnings on the .menu-button class, one in mobile view and one in desktop. Both were missing values on the top property.    
*HTML:* 1. First error due to an li element being a direct child of a div.
        2. Error for break tag containing a closing tag. 
        3. Warning due to type attributes on the JavaScript resources.
        4. Warning due to section not containing a heading.
All of these except one have been modified and edited to now pass the tests. The warning 
due to lack of heading tag on one of the sections have not been edited.

#### responsiveness
* This site has been tested on multiple browsers and devices.
**browsers including:** Microsoft Edge, Safari, Chrome, Samsung Internet.
**Devices including:** Android phones and IOS, Ipad, windows computer with resolution 1920 x 1080, and 15-inch Macbook.    
Almost all changes have been simultaneously checked on mobile devices and laptop computer. A few bugs have appeared with the size of the board and 
position of the scoreboard underneath. One being on browsers with a menu at the bottom, for example Samsung Internet.
This menu pushed the scoreboard up and positioning it underneath the board itself. This has been fixed by positioning
the scoreboard from the top.
Another issue has been the centering of the board. Since it is created using javascript it was a different challenge for
me to center it. It's now centered with a function that calculates the boards width, exctract it from 100% of its container,
and dividing it by half: "calc((100% - "+ boardWidth +")/2)";. This keeps the board centered on all of the tested screen sizes and browsers.    
***Side Note:*** Chrome Developer Tools seem to not be completely accurate with the size of the board and the page on smaller screens.
In the tools it seems as the board doesn't rezise for smaller screens but if you open the game on a mobile device or tablet
it looks fine. Therefore all changes to the looks of the page have been checked on both mobile and tablet devices throughout 
this project. 
____
## Deployment
This project used git as version control and Github Pages to deploy straight from the master branch.
There is no difference between the deployed version and the development version.   
**The steps I took to deploy this project:**

* Under my site's (Othello) reposity I went to settings.
* Under "GitHub Pages", I used the source drop-down and choosed master-branch as publishing source.
* You can find the link to the website under the "Github Pages" section, where there is a notification stating:   
"Your site is published at "https://heimirdavid.github.io/Othello/".

**To clone this website:**
1. Navigate to the repository from the main page.
2. Click the green button "Clone or download", located to the right under the repository name.
3. Click the icon to the right of the URL to copy the URL of the clone.
4. Open the IDE of your choice and open its terminal window.
5. type in "git clone " followed by the copied URL.
6. Press Enter to clone the repository. 

**To run locally:**
* Clone repository to your local file system.
* Open the Othello folder.
* Navigate to the index.html file.
* Open it with your prefered web browser. 

## Credits
* Instructions for how to use the canvas and draw circles upon it came from w3schools.  
  link: https://www.w3schools.com/tags/canvas_arc.asp
* The solution for using media query with JavaScript came from stackoverflow.   
  link: https://stackoverflow.com/questions/31511001/is-there-a-javascript-equivalent-to-using-media-query
* Additional lesson on MVC appart from the teaching from my father came from this tutorial:     
  link: https://www.youtube.com/watch?v=1IsL6g2ixak 
* The solution for creating the 2 dimensional board array came from geeksforgeeks.     
  link: https://www.geeksforgeeks.org/how-to-create-two-dimensional-array-in-javascript/?fbclid=IwAR3DWeciHn7i4xnejNfmnbIVbJGQcl4SiTJpTjQvdJuM--DCtYzpYPatp0c*/
* Favicon generator used.    
  link: https://www.websiteplanet.com/sv/webtools/favicon-generator/

**All of these are also credited for and linked to in the code where they are used.**
#### Content
**Rules:** Both the rules that the game is built upon and the rules page is based on the documentation
from the World Othello Federation. 
Here is a link to their rules site: https://www.worldothello.org/about/about-othello/othello-rules/official-rules/english

**Media**
* The logo was made by Palli Kristmundsson and i have his approval for using it.
* The background image were obtained from unsplash, from Riho Kroll: https://unsplash.com/photos/RgLaH00kZOk

## Acknowledgements
### Special Thanks: 
* To my mentor Moosa Hassan for supporting me in this project and guiding me with great feedback and help.
* To Palli Kristmundsson, my father for teaching me about MVC architecture as a way of structuring 
and building a project, which this is based on. As well as teaching me about fundamental programming solutions and long 
talks into the night back and forth on logic and structure. 
