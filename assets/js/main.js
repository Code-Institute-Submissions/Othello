
var board = document.getElementById('board');

//Creates the squares that will make up the board
function makeSquare(x, y) {
    var square = document.createElement('div');
    square.setAttribute('class', 'squares');
    square.setAttribute('id', `position`+ '_'+ x.toString() +'_'+ y.toString());
    board.appendChild(square);
    square.style.left = (x * 60) + 'px';
    square.style.top = (y * 60) + 'px';
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

createBoard(8);

/* next step is to create the discs. they take 3 parameter, x, y cordinates and color.*/