
var board = document.getElementById('board');
var squareSize = 70;
var size = 8;

const playerWhite = 'WHITE';
const playerBlack = 'BLACK';
var currentPlayer = playerWhite;

        //Section for the main navigation

//close the main navigation, hiding it by changing height 100% to 0 %         
function closeNav() {
    document.getElementById('overlayID').style.height = "0%";
}

function chooseSize(sizeBtn) {
    
}

//Creates the squares that will make up the board. Using canvas to be able 
//to draw the discs on the board.
function makeSquare(x, y) {
    var square = document.createElement('canvas');
    square.setAttribute('class', 'squares');
    square.setAttribute('id', `position`+ '_'+ x.toString() +'_'+ y.toString());
    board.appendChild(square);
    
    //styling attributes on squares
    square.style.left = (x * squareSize) + 'px';
    square.style.top = (y * squareSize) + 'px';
    square.style.height = squareSize + 'px';
    square.style.width = squareSize + 'px';
    
    //Changing the default size of the canvas
    square.width = 100; 
    square.height = 100;
    
    //giving the square an event handler and calling the setDisc function with the 
    //coresponding x and y values of the chosen squares ID
    square.setAttribute('onclick', 'setDisc('+x+', '+y+', currentPlayer)')

}


function centerBoard() {
    var boardWidth = (squareSize * size) + 'px';
    var centerString = "calc((80vw - "+ boardWidth +")/2)";
    console.log(centerString);
    
    board.style.left = centerString;
}


//2 dimensional for loop creating a board size of choice by the user
function createBoard(size) {
    for(x = 0; x < size; x++) {
        for(y = 0; y < size; y++) {
            makeSquare(x, y);
            
            if ((x + y) % 2 == 0) { //making every second square a darker color
                document.getElementById(`position`+ '_'+ x.toString() +'_'+ y.toString()).style.backgroundColor = '#013220';
            }
        }
    }
}

//Function to create the discs. they take 3 parameters, the squares x and y value, and the color
//of the players disc.
function setDisc(x, y, player) {
    var square = document.getElementById(`position`+ '_'+ x.toString() +'_'+ y.toString());
    var ctx = square.getContext("2d");
    //draw a circle on the canvas
    ctx.beginPath();
    ctx.arc(50,50,45,0*Math.PI,2*Math.PI);
        
        if (player == playerWhite) { //decide which color to draw depending on players team
            ctx.fillStyle = "#fff";
        } else {
            ctx.fillStyle ="000";
        }
        ctx.fill();
    }

























createBoard(size);
centerBoard();

setDisc(3, 3, playerBlack);
setDisc(4, 4, playerBlack);
setDisc(3, 4, currentPlayer);
setDisc(4, 3, currentPlayer);

