
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
    drawBoard(size);
    closeMenu();
}
