////// Section for the main navigation ////////

function chooseSize(sizeBtn) { //function to select the size of the board. called upon by player on click.

    var button = [
        document.getElementById('button6x6'),
        document.getElementById('button8x8'),
        document.getElementById('button10x10')
    ]
    //for loop for creating radio buttons. removes the class active on all first.
    for (i = 0; i < button.length; i++) {
        button[i].classList.remove('board-button-active');
    }

    if (sizeBtn === 6) {
        size = 6;
        button[0].classList.add('board-button-active');
    }
    else if (sizeBtn === 8) {
        size = 8;
        button[1].classList.add('board-button-active');
    }
    else if (sizeBtn === 10) {
        size = 10;
        button[2].classList.add('board-button-active');
    }
    else {
        size = 8;
    }
    //draw the board with the size parameter picked by the player.
    drawBoard(size);
}

//firstly closes the main navigation by changing height 100% to 0 % and it's children elements to display none.
//then opening the boards main page.
function closeMenu() {
    var startNav = document.getElementById('startNav');
    var boardSection = document.getElementById('board_section');
    var boardContainer = document.getElementById('board_container');
    startNav.style.height = "0em";
    for(i = 0; i < startNav.children.length; i++) {
        startNav.children[i].style.display = "none";
    }
    
    boardSection.style.height = "100vh";
    boardContainer.style.visibility = "visible";
}

function openMenu() {
    var startNav = document.getElementById('startNav');
    startNav.style.height = "100%";
    for(i = 0; i < startNav.children.length; i++) {
        startNav.children[i].style.display = "block";
    }
    closeRules();
}

//toggle nav bar. checks if the navbar is closed or open with a boolean statement.
// runs a for loop to give the all 3 of the menu containers the appropriate width. 
function toggleNav() {
    var menu = document.getElementsByClassName('menu-button-container');
    var myWidth;
    if (menuOpen) {
        myWidth = "0%";
        menuOpen = false;
    }
    else {
        myWidth = "50%";
        menuOpen = true;
    }
    for (i = 0; i < 3; i++) {
        menu[i].style.width = myWidth;
    }
}

//Similar functions as previous. open and closes a section on click from the user by
// changing z-index, height, and display value.
function openRules() {
    var rulesPage = document.getElementById('rules_page');
    document.getElementById('overlay_rules').style.height = "100%";
    rulesPage.style.display = "block";
    rulesPage.style.zIndex = "5";

}

function closeRules() {
    var rulesPage = document.getElementById('rules_page');
    document.getElementById('overlay_rules').style.height = "0%";
    rulesPage.style.display = "none";
    rulesPage.style.zIndex = "-5";
}

function restartButton() {
    document.getElementById('game_over').style.display = "none";
    openMenu();
}

function closeGameOverMessage() {
    document.getElementById('game_over').style.display = "none";
}

function closePassTurnMessage() {
    document.getElementById('switch_player').style.display = "none";
}

// called upon on the start button. does the initial start of the game
function startGame() {
    init();
}


//Goes through every position of the board array and send each result up to view.
//drawDisc does this with the x, y and player values. x and y tells the position, and
//the player value which is either 0, 1, or 2. 
function copyBoardArrayToDrawBoard() {
    var player;

    for (x = 0; x < size; x++) {
        for (y = 0; y < size; y++) {
            player = getboardArrayValue(x, y);
            drawDisc(x, y, player);
        }
    }

    //get scores from model and send it to display for the players
    displayScore(getScoreWhite(), getScoreBlack());

    //get current player and send to display for the players
    displayCurrentPlayer(getCurrentPlayer());
}

//function to draw the first four discs of the board
function initDiscs(size) {
    var firstDisc = (size - 2) / 2;

    //false value here is to avoid the rules so the discs can be placed without meeting the demands of the rules function.
    placeDisc(firstDisc, firstDisc, playerWhite, false);
    placeDisc(firstDisc + 1, firstDisc + 1, playerWhite, false);
    placeDisc(firstDisc + 1, firstDisc, playerBlack, false)
    placeDisc(firstDisc, firstDisc + 1, playerBlack, false);
}

/*  play function controlls the flow of the game. it's the function that is being called upon by 
    the click of a player.
*/
function play(x, y, player) {
    var isGameOver = false;
    var playerCouldMove = true;
    if (placeDisc(x, y, player)) { //checks if the picked position is availible.
        if (boardFull(size, getScoreBlack(), getScoreWhite())) { //if the board is full, the game is over.
            isGameOver = true;
        }
        //a disc could be placed. First thing to do before next move is to toggle player.
        mTogglePlayer(); 
        if (!isAnyMovesPossible(currentPlayer)) { //can this new player make any moves?
            mTogglePlayer();                      //if not, toggle player again.
            playerCouldMove = false;
            if (!isAnyMovesPossible(currentPlayer)) { //can any moves be made by this player instead?
                isGameOver = true;                    //if not the game is over.
            }
            mTogglePlayer(); 
        }

        if (isGameOver) { //If "isGameOver" is true, the message will be displayed
            gameOverMessage(getScoreBlack(), getScoreWhite());
        }
        else if (!playerCouldMove) { //if the player could not move but the next one can,
            switchPlayerMessage();   //a message will be displayed, players turn will toggle,
            mTogglePlayer();         //and the display of current player will be updated.
            displayCurrentPlayer();
        }
        //lastly this new info in the board array will be displayed to the user.
        copyBoardArrayToDrawBoard();
        
        /* //old function, containing a few bugs
            copyBoardArrayToDrawBoard(); //Draw the board based on the boardArray

            if (boardFull(size, getScoreBlack(), getScoreWhite())) {
                isGameOver = true;
            }
            else if (!isAnyMovesPossible(currentPlayer)) {
                if (!couldPreviousPlayerMove) {
                    console.log("game Over")
                    isGameOver = true;
                }
                if (!isGameOver) {
                    console.log("Player cannot make a move, switch to oposing player.");
                    switchPlayerMessage();
                    mTogglePlayer();
                    displayCurrentPlayer();
                    couldPreviousPlayerMove = false;
                }
            }


            if (isGameOver) {
                gameOverMessage(getScoreBlack(), getScoreWhite());
            }
        } //places the disc data into the boardArray
        */
    }
}

//checks if every square on the board has a disc on it
function boardFull(size, scoreBlack, scoreWhite) {
    if ((size * size) == scoreBlack + scoreWhite) {
        return true;
    }
    return false;
}

// 
function isAnyMovesPossible(player) {
    var canPlay = false;
    for (x = 0; x < size; x++) {
        for (y = 0; y < size; y++) {
            if (rules(x, y, player, false)) { //check if function rules return the value true, if so moves can be made.
                canPlay = true;
            }
        }
    }
    return canPlay; //if return false, no moves can be made by this player. 
}

//called upon by startGame() and calls all of these when the start button is clicked
function init() {
    drawBoard(size);
    buildBoardArray(size);
    initDiscs(size)
    copyBoardArrayToDrawBoard();
    closeMenu();
}
