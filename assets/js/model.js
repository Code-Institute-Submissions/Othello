var board = document.getElementById('board');
var squareSize;
var size = 8;
const playerWhite = 'WHITE';
const playerBlack = 'BLACK';
var currentPlayer = playerWhite;

var menuOpen = false;


var boardValue = new Array(size);






/* loops to create a 2d array which will keep the size of the board and
   the positioning of the discs. 
   code  written by the help of this article from geeksforgeeks.com :
   https://www.geeksforgeeks.org/how-to-create-two-dimensional-array-in-javascript/?fbclid=IwAR3DWeciHn7i4xnejNfmnbIVbJGQcl4SiTJpTjQvdJuM--DCtYzpYPatp0c*/
function buildBoardArray(boardSize) {
    
    for(i = 0; i < boardSize; i++) {
        boardValue[i] = new Array(8);
    }
    
    for(i = 0; i < boardSize; i++) {
            for(j = 0; j < boardSize; j++ ) {
                boardValue[i][j] = 0;
            }
    }
}



