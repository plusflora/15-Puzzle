// console.log('js is linked') //smoke test

/*----- constants -----*/
const winCon = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]

//
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
    // board = [
    //     [0, 0, 0], //column 0
    //     [0, 0, 0], //column 1
    //     [0, 0, 0], //column 2
    // ]
    // board = [/*row 1*/ 0, 1, 2, /*row 2*/ 3, 4, 5, /*row 3*/ 6, 7, 8]
    board = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
    //sets moveCount
    //call render function when built
    render()
}
init()

//randomizer - generates an array that we can then shuffle for the pieces
// ------- REMEMBER TO UPDATE WHEN YOU EXPAND THE BOARD -----------------------------------------
function numbers() {
    let arr = [];
    for (var i = 0; i <= 8; i++) {
        arr.push(i);
    }
    return arr;
    
}
// console.log(numbers())

//shuffles the numbers in the array, math.random()?
//turns out there's a defacto array shuffler
function shuffle(arr) {
    let curIdx = arr.length, rdmIdx;
    //while there are still numbers to shuffle - 
    while (curIdx > 0 ) {
        rdmIdx = Math.floor(Math.random() * curIdx);
        curIdx--;
        [arr[curIdx], arr[rdmIdx]] = [arr[rdmIdx], arr[curIdx]]
    }
    return arr;
}
// console.log(shuffle(numbers()))

//start/restart/shuffle button 
//places the pieces in the 3x3 grid in a randomized state
function shuffleBoard(evt) {
    //make sure this does nothing it's not the shuffle button
    if(evt.target.innerText !== 'Shuffle') { return }
    // console.log('this is what was clicked: \n', evt.target)
    mixedBoard = [...shuffle(numbers())]
    console.log('this is the board array inside shuffleBoard', mixedBoard)
}

// querySelector class tile
//


// board render/builder
function renderBoard(){
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const index = row * board.length + col;
            // console.log(index)
            const cellEl = cellEls[index];
            // console.log(cellEl)
            const tileNum = board[row][col] + 1;
            // console.log(tileNum)
            cellEl.innerText = tileNum === 9 ? '' : tileNum;
            cellEl.className = tileNum === 9 ? 'cell empty' : 'cell tile';
        }
    }
}

//render
function render() {
    renderBoard()
    //do I need the shuffleBoard() in here? I feel like I don't.
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
    const targetTile = evt.target
    // const colIdx = cellEls.indexOf(evt.target)
    // console.log('this is colIdx inside of handleChoice', colIdx)
    if(evt.target.classList.contains('tile')) {
        // console.log('this is what was clicked: \n', evt.target.className)
        //if the clicked tile contains the class of 'tile', it looks for a connected tile without the same class, 
        //determine the column and row selected
        const tgtRow = Math.floor(cellEls.indexOf(targetTile) / 3)
        // console.log('this is the target row', tgtRow)
        const tgtCol = cellEls.indexOf(targetTile) % 3
        console.log('this is the target column', tgtCol)
        //determine where the empty tile is
        const emptyRow = Math.floor(cellEls.indexOf(emptyTile[0]) / 3)
        // console.log('this is the empty row', emptyRow)
        const emptyCol = cellEls.indexOf(emptyTile[0]) % 3
        console.log('this is the empty column', emptyCol)
        //update the value of the board array
        if(checkForEmpty(tgtRow, tgtCol, emptyRow, emptyCol)) {
            moveTile(tgtRow, tgtCol, emptyRow, emptyCol)
        }
    } else {return}

    //after every move, we want to check for win
    //after every move, we want to render changes
}

//check empty - checks for an empty tile to the left, right, above and below
// takes 4 args - the row and column of the clicked tile - and the row and column of the empty space
function checkForEmpty(tgtRow, tgtCol, emptyRow, emptyCol) {
    const emptyLoc = ((Math.abs(tgtRow - emptyRow) === 1 && tgtCol - emptyCol) || (Math.abs(tgtCol - emptyCol) === 1 && tgtRow === emptyRow))
    return emptyLoc
}
    
//moves the tile to the empty spot
//also takes 4 args - r + c of clicked tile - and the r + c of the empty space
function moveTile(tgtRow, tgtCol, emptyRow, emptyCol) {
    [board[tgtRow][tgtCol], board[emptyRow][emptyCol]] = [board[emptyRow][emptyCol], board[tgtRow][tgtCol]]
    //render changes
    renderBoard()
}

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