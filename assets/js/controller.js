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

//close the main navigation, hiding it by changing height 100% to 0 %. 
function closeMenu() {
    document.getElementById('overlay_startID').style.height = "0%";
    document.getElementById('startNav').style.display = "none";
}

function openMenu() {
    document.getElementById('overlay_startID').style.height = "100%";
    document.getElementById('startNav').style.display = "block";
    closeRules();
}

//toggle nav bar. checks of the navbar is closed or open with a boolean statement.
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

function closeGameOverMessage() {
    document.getElementById('game_over').style.display = "none";
    openMenu();
}

function closePassTurnMessage() {
    document.getElementById('switch_player').style.display = "none";
}

// called upon on the start button. does the initial start of the game
function startGame() {
    init();
}


//Goes through every position of the board array and send each result up to view.
//drawBoard does this with the x, y and player values. x and y tells the position, and
//the player value which is either 0, 1, or 2 draws which disc if any into this position. 
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
    placeDiscData(firstDisc, firstDisc, playerWhite, false);
    placeDiscData(firstDisc + 1, firstDisc + 1, playerWhite, false);
    placeDiscData(firstDisc + 1, firstDisc, playerBlack, false)
    placeDiscData(firstDisc, firstDisc + 1, playerBlack, false);
}


function placeDisc(x, y, player) {
    var isGameOver = false;
    var playerCouldMove = true;
    if (placeDiscData(x, y, player)) { //checks if the picked position is availible

        if (boardFull(size, getScoreBlack(), getScoreWhite())) {
            isGameOver = true;
        }
        mTogglePlayer();
        if (!isAnyMovesPossible(currentPlayer)) {
            mTogglePlayer();
            playerCouldMove = false;
            if (!isAnyMovesPossible(currentPlayer)) {
                isGameOver = true;
            }
            mTogglePlayer();
        }

        if (isGameOver) {
            gameOverMessage(getScoreBlack(), getScoreWhite());
        }
        else if (!playerCouldMove) {
            switchPlayerMessage();
            mTogglePlayer();
            displayCurrentPlayer();
        }

        copyBoardArrayToDrawBoard();
        /*
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

function boardFull(size, scoreBlack, scoreWhite) {
    if ((size * size) == scoreBlack + scoreWhite) {
        return true;
    }
    return false;
}

function isAnyMovesPossible(player) {
    var canPlay = false;
    console.log("player" + player);
    for (x = 0; x < size; x++) {
        for (y = 0; y < size; y++) {
            if (rules(x, y, player, false)) { //check if function rules return the value true, if so moves can be made.
                canPlay = true;
                console.log("canPlay" + canPlay);
            }
        }
    }
    return canPlay; //if return false, no more moves can be made. Game Over. 
}



//called upon by startGame() and calls all of these when the start button is clicked
function init() {
    drawBoard(size);
    buildBoardArray(size);
    initDiscs(size)
    copyBoardArrayToDrawBoard();
    closeMenu();
}
