var board = document.getElementById('board');
var squareSize;
var size = 8;
const playerWhite = 1;
const playerBlack = 2;
var currentPlayer = playerBlack;
var menuOpen = false;
var boardArray = new Array(size);
var couldPreviousPlayerMove = true;
var whiteScore = 0;
var blackScore = 0;


/* loops to create a 2d array which will keep the size of the board and
   the positioning of the discs throughout the game. this array IS the board.
   It will be updated by each move of a player and the board-drawing the player sees
   will be based of this arrays values.
   code  written by the help of this article from geeksforgeeks.com :
   https://www.geeksforgeeks.org/how-to-create-two-dimensional-array-in-javascript/?fbclid=IwAR3DWeciHn7i4xnejNfmnbIVbJGQcl4SiTJpTjQvdJuM--DCtYzpYPatp0c*/
function buildBoardArray(boardSize) {
    boardArray = new Array(boardSize);

    for (x = 0; x < boardSize; x++) {
        boardArray[x] = new Array(boardSize);
    }

    //here the array is filled with the default values of an empty board
    for (x = 0; x < boardSize; x++) {
        for (y = 0; y < boardSize; y++) {
            boardArray[x][y] = 0;
        }
    }
}

/*  Function to assign the position of the players disc into the boardArray.
    It checks if we should use the rules, which is by default true. 
    then if rules return true (canBePlaced = true) the boardArray will update with new values,
    and the score counters will update. */
function placeDisc(x, y, player, useRules = true) {

    if (useRules) {
        if (rules(x, y, player)) {

            boardArray[x][y] = player;
            scoreCounter();
            return true;
        } else {
            return false;
        }
    }
    else { //else is for the first 4 initial discs. which will not use pass through the rules function. 
        boardArray[x][y] = player;
        scoreCounter();
        return true;
    }
}

//Returns each X and Y value of the boardArray to later be used to draw the board from
function getboardArrayValue(x, y) {
    return boardArray[x][y];
}

// Goes through each position of the boardArray. if it get a match on either player the value for that
// player will increse.
function scoreCounter() {
    whiteScore = 0;
    blackScore = 0;
    var player;

    for (x = 0; x < size; x++) {
        for (y = 0; y < size; y++) {
            player = boardArray[x][y];

            if (player == playerWhite) {
                whiteScore++
            }
            else if (player == playerBlack) {
                blackScore++
            }
        }
    }
}

function getScoreWhite() {
    return whiteScore;
}

function getScoreBlack() {
    return blackScore;
}

function getCurrentPlayer() {
    return currentPlayer;
}

/* directionData holds the 8 different directions on the x and y axis you can flip discs when a
   player makes a move. for each potential move, all 8 directions most be checked to see if there 
   could be a match and in that case flip discs.    */
var directionData = [
    [0, +1], //N
    [+1, +1], //NE
    [+1, 0], //E
    [+1, -1], //SE
    [0, -1], //S
    [-1, -1], //SW
    [-1, 0], //W
    [-1, +1] // NW
];

//Function for the rules and behaviour of the game.
function rules(x, y, player, turnDisc = true) {
    var enemyPlayer;
    var canBePlaced = false;

    //first if else statment determines which is the "enemyPlayer" depending on who the current player is
    if (player == playerWhite) {
        enemyPlayer = playerBlack;
    }
    else {
        enemyPlayer = playerWhite;
    }

    if (boardArray[x][y] > 0) { //Checks if there is already a disc at the clicked position
        return false;           //is so, return false. Disc cannot be placed here.
    }

    //For-loop to check all 8 directions a move can flip discs.
    //xn and yn is two values starting of at the clicked position, and then moves out
    //the direction to look for a match.
    for (var i = 0; i < 8; i++) {
        var xn = x;
        var yn = y;
        var enemyHere = false;
        var success = false;
        
        //directionData holds the 8 directions in a 2 dimensional array. here we begin by moving one
        //space in the picked direction before checking if it meets the rules conditions.
        xn = xn + directionData[i][0];
        yn = yn + directionData[i][1];

        //These statments check if we are still within the size of the board. 
        while ((xn >= 0 && xn < size) && (yn >= 0 && yn < size)) {
            if (boardArray[xn][yn] == 0) { //if the space we are checking is empty,
                break;                     //break, go back into the forloop and check next direction.
            }
            if (boardArray[xn][yn] == currentPlayer) {  
                if (enemyHere) {     //if we hit a "friendly" discs we need to know if we've already met an enemydisc.
                    success = true;  //if enemyHere = true, we can turn discs in this direction. 
                }
                else { //otherwise, break. check next direction.
                    break;
                }
            }
            if (boardArray[xn][yn] == enemyPlayer) {
                enemyHere = true;
            } //if we hit enemyPlayer we need to continue in this direction to see if we later hits a friendly.
              //increase in this direction by one move to check this position next.
            xn = xn + directionData[i][0];
            yn = yn + directionData[i][1];
        } //end of while-loop
        
        if (success) { //is success = true, we can turn discs by making this move.
            canBePlaced = true;
            if (turnDisc) {
                // we start of again on the clicked position. this time the goal is to turn the discs in the 
                // direction the rules have told us is possible.
                xn = x; 
                yn = y;
                while ((xn >= 0 && xn < size) && (yn >= 0 && yn < size)) {
                    xn = xn + directionData[i][0];
                    yn = yn + directionData[i][1];
                    
                    //as soon as we hit our friendly disc on the otherside of this row, we stop.
                    if (boardArray[xn][yn] == player) {
                        break;
                    }
                    //here the boardArray gets updated with the newly flipped disc value.
                    boardArray[xn][yn] = player;
                }
            }

        }
    }
    return canBePlaced;
}

function mTogglePlayer() {
    if (currentPlayer == playerBlack) {
        currentPlayer = playerWhite;
    }
    else {
        currentPlayer = playerBlack;
    }
}
