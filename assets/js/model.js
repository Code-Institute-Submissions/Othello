var board = document.getElementById('board');
var squareSize;
var size = 8;
const playerWhite = 1;
const playerBlack = 2;
var currentPlayer = playerBlack;
var menuOpen = false;
var boardValue = new Array(size);

var whiteScore = 0;
var blackScore = 0;


/* loops to create a 2d array which will keep the size of the board and
   the positioning of the discs. 
   code  written by the help of this article from geeksforgeeks.com :
   https://www.geeksforgeeks.org/how-to-create-two-dimensional-array-in-javascript/?fbclid=IwAR3DWeciHn7i4xnejNfmnbIVbJGQcl4SiTJpTjQvdJuM--DCtYzpYPatp0c*/
function buildBoardArray(boardSize) {
    boardValue = new Array(boardSize);

    for (x = 0; x < boardSize; x++) {
        boardValue[x] = new Array(boardSize);
    }

    //here the array is filled with the default values of an empty board
    for (x = 0; x < boardSize; x++) {
        for (y = 0; y < boardSize; y++) {
            boardValue[x][y] = 0;
        }
    }
}

// directionData holds the 8 different directions on the x and y axis you can flip 
// new discs and the result you would get for flipping in that direction is stored in the 3rd value. 
var directionData = [
    [0, -1, 0],
    [+1, -1, 0],
    [+1, 0, 0],
    [+1, -1, 0],
    [0, -1, 0],
    [-1, -1, 0],
    [-1, 0, 0],
    [-1, +1, 0]
];

//Function to assign the position of the players disc into the boardValue array
function placeDiscData(x, y, player, useRules = true) {

    if (useRules) {
        if (rules(x, y, player)) {

            boardValue[x][y] = player;
            scoreCounter();
        }
    }
    else {
        boardValue[x][y] = player;
        scoreCounter();

    }
}



function getDiscValue(x, y) {
    return boardValue[x][y];
}



function scoreCounter() {
    whiteScore = 0;
    blackScore = 0;
    var player;

    for (x = 0; x < size; x++) {
        for (y = 0; y < size; y++) {
            player = boardValue[x][y];

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

//onClick, may i place a disc here? is it empty? 
function rules(x, y, player) {
    var enemyPlayer;
    var masterFlag = false;
    
    if (player == playerWhite) {
        enemyPlayer = playerBlack;
    }
    else {
        enemyPlayer = playerWhite;
    }

    if (boardValue[x][y] > 0) {
        console.log("Cannot put where already placed");
        return false;
    }

    for (i = 0; i < 8; i++) {
        var xn = x;
        var yn = y
        
        if (xn > 0 && xn < size) {
            xn = xn + directionData[i][0];
        } 
        if (yn > 0 && yn < size) {
            yn = yn + directionData[i][1];
        }

        do {

            console.log(xn, yn, i);
            
            if ((boardValue[xn][yn] == player) || (boardValue[xn][yn] == 0)) {
                break;
            } else {
                masterFlag = true;
            }
            xn = xn + directionData[i][0];
            yn = yn + directionData[i][1];

        } while ((xn >= 0 && xn < size) && (yn > 0 && yn <= size));

    }




    console.log("hejhopp");
    return masterFlag;
}









function mTogglePlayer() {
    if (currentPlayer == playerBlack) {
        currentPlayer = playerWhite;
    }
    else {
        currentPlayer = playerBlack;
    }
}
