var board = document.getElementById('board');
var squareSize;
var size = 8;
const playerWhite = 1;
const playerBlack = 2;
var currentPlayer = playerBlack;
var menuOpen = false;
var boardValue = new Array(size);



/* loops to create a 2d array which will keep the size of the board and
   the positioning of the discs. 
   code  written by the help of this article from geeksforgeeks.com :
   https://www.geeksforgeeks.org/how-to-create-two-dimensional-array-in-javascript/?fbclid=IwAR3DWeciHn7i4xnejNfmnbIVbJGQcl4SiTJpTjQvdJuM--DCtYzpYPatp0c*/
function buildBoardArray(boardSize) {
    boardValue = new Array(boardSize);
    
    for(i = 0; i < boardSize; i++) {
        boardValue[i] = new Array(boardSize);
    }
    
    //here the array is filled with the default values of an empty board
    for(i = 0; i < boardSize; i++) {
        for(j = 0; j < boardSize; j++ ) {
            boardValue[i][j] = 0;
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
function placeDiscData(x, y, player) {
    boardValue[x][y] = player;
}


function getDiscValue(x, y) {
    return boardValue[x][y];
}
