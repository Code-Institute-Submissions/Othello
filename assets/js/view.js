
////// Media Queries ////////

function setSquareSizeMQ() {
    const mqMediumMobile = window.matchMedia( "(max-width: 425px)" );
    if (mqMediumMobile.matches && size == 10) {
        squareSize = 32;
    } else if(mqMediumMobile.matches && size == 8) {
        squareSize = 38;
    } else if (mqMediumMobile.matches) {
        squareSize = 45;
    } else {
        setSquareSize();
    }
}


function setSquareSize() {
    if (size == 10) {
        squareSize = 45;
    } else {
        squareSize = 55;
    }
}

//toggle nav bar. checks of the navbar is closed or open with a boolean statement.
// runs a for loop to give the all 3 of the menu containers the appropriate width. 
function toggleNav() {
    var menu = document.getElementsByClassName('menu-button-container');
    var myWidth;
    if(menuOpen) {
        myWidth = "0%";
        menuOpen = false;
    } else {
        myWidth = "50%";
        menuOpen = true;
    }
    for(i = 0; i < 3; i++) {
        menu[i].style.width = myWidth;
    }
}

//Creates the squares that will make up the board. Using canvas to be able 
//to draw the discs on the board.
function makeSquare(x, y) {
    var square = document.createElement('canvas');
    square.setAttribute('class', 'squares');
    square.setAttribute('id', `position`+ '_'+ x.toString() +'_'+ y.toString());
    board.appendChild(square);
    
    //Changing the default size of the canvas
    square.width = 100; 
    square.height = 100;
    
    setSquareSizeMQ();
    centerBoard();
    
    //styling attributes on squares
    square.style.left = (x * squareSize) + 'px';
    square.style.top = (y * squareSize) + 'px';
    square.style.height = squareSize + 'px';
    square.style.width = squareSize + 'px';
    
    
    //giving the square an event handler and calling the placeDisc function with the 
    //coresponding x and y values of the chosen squares ID
    square.setAttribute('onclick', 'placeDisc('+x+', '+y+', currentPlayer)');
}

//2 dimensional for loop creating a board size of choice by the user
function drawBoard(size) {
    board.innerHTML = "";
    for(x = 0; x < size; x++) {
        for(y = 0; y < size; y++) {
            makeSquare(x, y);
            
            if ((x + y) % 2 == 0) { //making every second square a darker color
                document.getElementById(`position`+ '_'+ x.toString() +'_'+ y.toString()).style.backgroundColor = '#056535';
            }
        }
    }
}

//Function to create the discs. they take 3 parameters, the squares x and y value, and the color
//of the players disc.
//Idea for creating discs on canvas and code came from w3schools article: 
// https://www.w3schools.com/tags/canvas_arc.asp
function drawDisc(x, y, player) {
    var square = document.getElementById(`position`+ '_'+ x.toString() +'_'+ y.toString());
    var ctx = square.getContext("2d");
    ctx.clearRect(0, 0, square.width, square.height); //clears the canvas before being draws upon
    //draw a circle on the canvas
    ctx.beginPath();
    ctx.arc(50,50,45,0*Math.PI,2*Math.PI); 
        if (player == 0) {
            return;
        } else if (player == playerWhite) { //decide which color to draw depending on players team
            ctx.fillStyle = "#fff";
        } else if(player == playerBlack) {
            ctx.fillStyle ="#000";
        }
        ctx.fill();
    }

function centerBoard() {
    var boardWidth = (squareSize * size) + 'px';
    var centerString = "calc((100% - "+ boardWidth +")/2)";
    
    board.style.left = centerString;
    board.style.right = centerString;
}

function viewScore(white, black) {
    //elements for desktop view
    document.getElementById('white-score-desktop').innerHTML = white;
    document.getElementById('black-score-desktop').innerHTML = black;
    
    //elements for mobile view
    document.getElementById('white-score-mobile').innerHTML = white;
    document.getElementById('black-score-mobile').innerHTML = black;
}

function viewCurrentPlayer(currentP) {
    if (currentP == 1) {
        document.getElementById('current-player').innerHTML = "White's Turn";
        document.getElementById('current-player-mobile').innerHTML = "White's Turn";
    } else {
    document.getElementById('current-player').innerHTML = "Black's Turn";
    document.getElementById('current-player-mobile').innerHTML = "Black's Turn";
    }
}





















