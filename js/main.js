console.log('js is linked') //smoke test

/*----- constants -----*/
//win condition
const winCon = []

/*----- initial state variables -----*/
//move count
let moveCount 

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
function shuffleBoard(evt) {
    //make sure this does nothing it's not the shuffle button
    if(evt.target.innerText !== 'Shuffle') { return }
    console.log('this is what was clicked: \n', evt.target)
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

function checkAdj(x, y) {
    //
    let count = 0
    while (

    )
}
//Do I want to do this in 2 functions? checking for 'tile' then returning if it doesn't have it?
function moveTile() {
    //so I need checkForEmpty to return a truthy value
    //if a tile is empty - swap innertext to move the on the tile and the classes "tile" and "empty"
    //probably using an if//else classList.remove('tile').classList.add('empty') and classList.add('empty').remove('tile')

}

function checkForEmptyHor(x, y) {
    //checking to the left and right of clicked tile for an empty space (0, 0)
    //checking one column to the left(-1, 0)?
    const leftCheck = 
    
    //checking one column to the right(1, 0)?
    
    //if no tiles are 'empty' return
    
}

function checkForEmptyVert(x, y) {
    //checking for an empty space above and below clicked tile (0, 0)
    //checking one row below (0, -1)

    //checking one row above (0, 1)

    //if no tiles are 'empty' return - is this even relevant? I've already checked to the right and left so one of these should return truthy

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
function checkWin() {
    //do i just give it an array here that checks to see if the tiles are in the correct order? 
}

/*----- event listeners -----*/
//shuffle board/start button
document.querySelector('BUTTON').addEventListener('click', shuffleBoard)
//piece selection -> tells the handleChoice selection which piece to move and where it moves
document.querySelector('div').addEventListener('click', handleChoice)

/*----- what's the haps -----*/