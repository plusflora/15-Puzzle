console.log('js is linked') //smoke test

/*----- constants -----*/
//win condition
const winCon = []

/*----- initial state variables -----*/
//move count
let moveCount 

//best move count
let bestCount

//completion -- I dunno if I need this.

/*----- functions -----*/
//init func
function init() {
    //starting state on page load
    
    //sets moveCount to 0
    

    //
}

//render

//board render/builder

//move count count++
function moveCounter(){
    //something like count++? with a readout to a move count tracker
}

//start/restart/shuffle button visibility and what it does
function shuffleBoard() {

}

//randomizer - generates new random board state 
//places the 15 pieces in the 4x4 grid in a randomized state
//math.random? 
function genRandomBoard() {
    //this gens pieces that give the id of tile so that they appear when a number (1-15) is in the space
}

//move tile
//swaps the tiles if a spot that is orthognally connected is "empty" 
//is handling it by innertext or by class better?


function checkForEmpty(colIdx, rowIdx) {
    //checking to the left
    const checkLeft = 
    //checking to the right
    const checkRight = 
}

function moveTile() {
    //so I need it to check orthognally connected tiles for "empty" 
    //if no tiles are "empty" - return
    //if a tile is empty - swap innertext and the classes "tile" and "empty"
    //probably using a classList.remove('tile, empty') and classList.add('empty')
}

//handleChoice - checks to see if the piece is a valid option
//checks to see if the piece can move - returns if it can't
function handleChoice(evt) {
    //if the option clicked is not a "tile" return. we do this by searching for the class empty
    if(evt.target.classList.contains('empty')) { return }
    console.log('this is what was clicked: \n', evt.target.className)

    //
}

//check win - checks to see if tile are in a "win" order

/*----- event listeners -----*/
//shuffle board/start button

//piece selection -> tells the handleChoice selection which piece to move and where it moves
document.querySelector('div').addEventListener('click', handleChoice)

/*----- what's the haps -----*/