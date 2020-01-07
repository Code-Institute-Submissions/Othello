
////// Section for the main navigation ////////

//close the main navigation, hiding it by changing height 100% to 0 %         
function closeMenu() {
    document.getElementById('overlayID').style.height = "0%";
    document.getElementById('startNav').style.display = "none";
}

function openMenu() {
    document.getElementById('overlayID').style.height = "100%";
    document.getElementById('startNav').style.display = "block";
}

function chooseSize(sizeBtn) { //function to select the size of the board

    if(sizeBtn === 6) {
        size = 6;
    } else if(sizeBtn === 8) {
        size = 8;
    } else if(sizeBtn === 10) {
        size = 10;
    } else {
        size = 8;
    }
    drawBoard(size);
}

function startGame() {
    init();
} 


//Goes through every position of the board array and send each result up to view.
//drawBoard does this with the x, y and player values. x and y tells the position, and
//the player value which is either 0, 1, or 2 draws which disc if any into this position. 
function copyDiscValueToView() {
    var player;
    
    for(x = 0; x < size; x++) {
        for(y = 0; y < size; y++) {
            player = getDiscValue(x, y);
            drawDisc(x, y, player);
            
        }
    }
}

//function to draw the first four discs of the board
function initDiscs(size) {
    var firstDisc = (size -2)/2; 

    placeDiscData(firstDisc, firstDisc, playerWhite)
    placeDiscData(firstDisc+1, firstDisc+1, playerWhite);
    placeDiscData(firstDisc+1, firstDisc, playerBlack)
    placeDiscData(firstDisc, firstDisc+1, playerBlack);
}


function placeDisc(x, y, player) {
    placeDiscData(x, y, player);
    copyDiscValueToView();
    if(currentPlayer == playerBlack) {
        currentPlayer = playerWhite;
    } else {
        currentPlayer = playerBlack;
    }
} 






    
function init() {
    drawBoard(size);
    buildBoardArray(size);
    initDiscs(size)
    copyDiscValueToView();
    closeMenu();
}



