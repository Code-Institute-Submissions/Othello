
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
function copyStatusValueToView() {
    var player;
    
    for(x = 0; x < size; x++) {
        for(y = 0; y < size; y++) {
            player = getDiscValue(x, y);
            drawDisc(x, y, player);
        }
    }
    
    //get scores from model and send to view
    var b = getScoreBlack();
    var w = getScoreWhite();
    viewScore(w, b);
    
    //get current player and send to view
    var c = getCurrentPlayer();
    viewCurrentPlayer(c);
    
    
    mTogglePlayer();
}

//function to draw the first four discs of the board
function initDiscs(size) {
    var firstDisc = (size -2)/2; 

    placeDiscData(firstDisc, firstDisc, playerWhite, false)
    placeDiscData(firstDisc+1, firstDisc+1, playerWhite, false);
    placeDiscData(firstDisc+1, firstDisc, playerBlack, false)
    placeDiscData(firstDisc, firstDisc+1, playerBlack, false);
}


function placeDisc(x, y, player) {
    placeDiscData(x, y, player);
    copyStatusValueToView();
    
} 



//called upon by startGame() and calls all of these when the start button is clicked
function init() {
    drawBoard(size);
    buildBoardArray(size);
    initDiscs(size)
    copyStatusValueToView();
    closeMenu();
}



