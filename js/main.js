/*----- initial state variables -----*/
//board state
let board 

/*----- grab html elements -----*/
const shuffleButton = document.querySelector('button')
const cellEls = [...document.querySelectorAll('.cell')]
const tileEls = [...document.querySelectorAll('.tile')]
let emptyTile = [...document.querySelectorAll('.cell.empty')]

/*----- functions -----*/
//init func
function init() {
    //starting state on page load
    //builds board
    board = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]]
    //call render function when built
    render()
}
init()

//randomizer - generates an array that we can then shuffle for the pieces
// ------- REMEMBER TO UPDATE IF YOU EXPAND THE BOARD -----------------------------------------
function numbers() {
    let arr = [];
    for (var i = 0; i <= 15; i++) {
        arr.push(i);
    }
    return arr;
}

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

//start/restart/shuffle button 
//places the pieces in the 3x3 grid in a randomized state
function shuffleBoard(evt) {
    //make sure this does nothing it's not the shuffle button
    if(evt.target.innerText !== 'Shuffle') { return }
    const mixedBoard = [...shuffle(numbers())]
    //assign the shuffled array to the board state
    board = [
        [mixedBoard[0], mixedBoard[1], mixedBoard[2], mixedBoard[3]],
        [mixedBoard[4], mixedBoard[5], mixedBoard[6], mixedBoard[7]],
        [mixedBoard[8], mixedBoard[9], mixedBoard[10], mixedBoard[11]],
        [mixedBoard[12], mixedBoard[13], mixedBoard[14], mixedBoard[15]],
    ];
    //render changes
    renderBoard()
}

// board render/builder
function renderBoard(){
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const index = row * board.length + col;
            const cellEl = cellEls[index];
            const tileNum = board[row][col] + 1;
            //sets the innerText of the tile to 1-8 due to the array that I created above. If the tile has the number 9 - leave it empty - else give it an innertext to match it's number
            cellEl.innerText = tileNum === 16 ? '' : tileNum;
            //if the tile has the number 9 - assign the empty class, else give it tile
            cellEl.className = tileNum === 16 ? 'empty' : 'tile';
        }
    }
}

//render
function render() {
    renderBoard()
}

//check empty - checks for an empty tile to the left, right, above and below
// takes 4 args - the row and column of the clicked tile - and the row and column of the empty space
function checkForEmpty(tgtRow, tgtCol, emptyRow, emptyCol) {
    const isEmptyAdjacent = (
        (Math.abs(tgtRow - emptyRow) === 1 && tgtCol === emptyCol) ||
        (Math.abs(tgtCol - emptyCol) === 1 && tgtRow === emptyRow)
    );
    return isEmptyAdjacent;
}
    
//moves the tile to the empty spot
//also takes 4 args - r + c of clicked tile - and the r + c of the empty space
function moveTile(tgtRow, tgtCol, emptyRow, emptyCol) {
    // Swap the tiles in the array
    [board[tgtRow][tgtCol], board[emptyRow][emptyCol]] = [board[emptyRow][emptyCol], board[tgtRow][tgtCol]];

    // Swap class names in the HTML elements
    //sets the 2 tiles (targeted and empty)
    const tgtIndex = tgtRow * 4 + tgtCol;
    const emptyIndex = emptyRow * 4 + emptyCol;
    const tgtCell = cellEls[tgtIndex];
    const emptyCell = cellEls[emptyIndex];
    // Swap the class names
    [tgtCell.className, emptyCell.className] = [emptyCell.className, tgtCell.className];
    // Render changes
    renderBoard();
    //check for win
    checkWin()
}

//handleChoice - checks to see if the piece is a valid option
//checks to see if the piece can move - returns if it can't
function handleChoice(evt) {
    const targetTile = evt.target
    if(evt.target.classList.contains('tile')) {
        //if the clicked tile contains the class of 'tile', it looks for a connected tile with the class of empty, 
        //determine the column and row selected
        const tgtRow = Math.floor(cellEls.indexOf(targetTile) / 4)
        const tgtCol = cellEls.indexOf(targetTile) % 4
        emptyTile = [cellEls.find(cell => cell.classList.contains('empty'))]
        //determine where the empty tile is
        const emptyRow = Math.floor(cellEls.indexOf(emptyTile[0]) / 4)
        const emptyCol = cellEls.indexOf(emptyTile[0]) % 4
        //update the value of the board array
        if(checkForEmpty(tgtRow, tgtCol, emptyRow, emptyCol)) {
            moveTile(tgtRow, tgtCol, emptyRow, emptyCol)
        }
    } else {return}
}

//check win - checks to see if tile are in a "win" order
function checkWin() {
    //do i just give it an array here that checks to see if the tiles are in the correct order? 
    //I need it to read the current board array
    let curBoardState = board
    const winCon = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]]
    //and compare it to the winCon array
    //if they match, do something
    function check(curBoardState, winCon) {
        return curBoardState.join() == winCon.join()
    }
    if(check(curBoardState, winCon) === true){
        cellEls.forEach((cell) => {
            cell.classList.add('win')
        })
    }
}

/*----- event listeners -----*/
//shuffle board button
document.getElementById('shuffle').addEventListener('click', shuffleBoard)
//piece selection -> tells the handleChoice selection which piece to move and where it moves
document.getElementById('board').addEventListener('click', handleChoice)

/*----- what's the haps? -----*/