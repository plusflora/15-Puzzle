// console.log('js is linked') //smoke test

/*----- constants -----*/
const winCon = [] //do I need this? or will i be checking some other way

//tiles
//
const tiles = {
    0: '.empty',
    1: '.tile'
}

/*----- initial state variables -----*/
//move count
let moveCount 

//completion -- I dunno if I need this.

//empty tile

//board state
let board 

/*----- grab html elements -----*/
const shuffleButton = document.querySelector('button')
const cellEls = [...document.querySelectorAll('.cell')]
const tileEls = [...document.querySelectorAll('.tile')]
let emptyTile = [...document.querySelectorAll('.cell.empty')]
console.log(cellEls)

// let emptyTile = cellEls.classList.contains('.empty')
// console.log(emptyTile)
/*----- functions -----*/
//init func
function init() {
    //starting state on page load

    //builds board
    board = [
        [0, 0, 0], //column 0
        [0, 0, 0], //column 1
        [0, 0, 0], //column 2
    ]
    
    //sets moveCount
    moveCount = 0;
    //call render function when built
    render()
}
init()

// board render/builder
function renderBoard() {
    board.forEach((colArr, colIdx) => {
        // console.log('colArr', colArr)
        // console.log('colIdx', colIdx)
        colArr.forEach((cellVal, rowIdx) => {
            // console.log('cellVal', cellVal)
            // console.log('rowIdx', rowIdx)
            const cellClass = `c${colIdx}r${rowIdx}`
            // console.log('cellClass', cellClass)

            const cellId = document.getElementsByClassName(cellClass)
            // console.log('cellEl', cellId)
            
            // cellClass.classList.add(...tiles)
            console.log(cellClass)
        })
    })
}

//render
function render() {
    renderBoard()
}

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

// this might be redundant
//randomizer - generates new random board state 
//places the 15 pieces in the 4x4 grid in a randomized state
//math.random? 
function genRandomBoard() {
    //this gens pieces that give the id of tile so that they appear when a number (1-15) is in the space
}

//move tile
//swaps the tiles if a spot that is orthognally connected is "empty" 
//is handling it by innertext or by class better?
function tileAppear() {
    // if (innerText.isNaN() 
}


function checkAdj() {
    //checking to the left and right of clicked tile for an empty space (0, 0)
    //checking one column to the left(-1, 0)?
    
    //checking one column to the right(1, 0)?
    
    //checking one row below (0, -1)
    
    //checking one row above (0, 1)
    
    //if no tiles are 'empty' return 
}

//handleChoice - checks to see if the piece is a valid option
//checks to see if the piece can move - returns if it can't
function handleChoice(evt) {
    // console.log('this is evt.target within handleChoice', evt.target)
    // because I can get the idx of the target and not the array, I can check +1 and -1 for tiles to the right and +3 and -3 for tiles above and below. 
    const colIdx = cellEls.indexOf(evt.target)
    console.log('this is colIdx inside of handleChoice', colIdx)

    const colArr = board[colIdx]
    console.log('this is colArr inside handleChoice', colArr)
    // var emptyIdx = cellEls.indexOf('.empty')
    // console.log('this is emptyIdx inside of handleChoice', emptyIdx)
    //if the option clicked is not a "tile" return. we do this by searching for the class empty
    if(evt.target.classList.contains('tile')) {
        // console.log('this is what was clicked: \n', evt.target.className)
        //if the clicked tile contains the class of 'tile', it looks for a connected tile without the same class, 
        //determine the column and row selected

        //update the value of the board array
        

    } else {return}

    //after every move, we want to check for win
    //after every move, we want to render changes
}


//Do I want to do this in 2 functions? checking for 'tile' then returning if it doesn't have it?
// function moveTile() {
    //so I need checkForEmpty to return a truthy value
    //if a tile is empty - swap innertext to move the on the tile and the classes "tile" and "empty"
    //probably using an if//else classList.remove('tile').classList.add('empty') and classList.add('empty').remove('tile')

// }

//check empty - checks for an empty tile to the left, right, above and below
// function checkForEmpty(evt) {
//     if (evt.target.classList.contains('#tile')
// }


//check win - checks to see if tile are in a "win" order
function checkWin() {
    //do i just give it an array here that checks to see if the tiles are in the correct order? 
}

/*----- event listeners -----*/
//shuffle board button
document.getElementById('shuffle').addEventListener('click', shuffleBoard)
//piece selection -> tells the handleChoice selection which piece to move and where it moves
document.getElementById('board').addEventListener('click', handleChoice)


/*----- what's the haps -----*/