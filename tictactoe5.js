const prompt = require('prompt-sync')({ sigint: true });


let board = {
    1: ' ', 2: ' ', 3: ' ',
    4: ' ', 5: ' ', 6: ' ',
    7: ' ', 8: ' ', 9: ' '
};

function markBoard(position, mark){
    board[position] = mark; 
}

function printBoard() {
    drawBoard = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
    }
    for (let i in drawBoard){
        if (board[i] == ' '){
            drawBoard[i] = i;
        }
        else {
            drawBoard[i] = board[i];
        }
    }
    console.log(
        drawBoard[1] + " | " + drawBoard[2] + " | " + drawBoard[3] + "\n" +
        drawBoard[4] + " | " + drawBoard[5] + " | " + drawBoard[6] + "\n" +
        drawBoard[7] + " | " + drawBoard[8] + " | " + drawBoard[9] + "\n"
    )
}

function printBoard() {
    drawBoard = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
    }
    for (let i in drawBoard){
        if (board[i] == ' ')
        drawBoard[i] = i;
        else (drawBoard[i] = board[i]);
    }
    console.log(
        drawBoard[1] + ' | ' + drawBoard[2] + ' | ' + drawBoard[3] + "\n" +
        drawBoard[4] + ' | ' + drawBoard[5] + ' | ' + drawBoard[6] + '\n' +
        drawBoard[7] + ' | ' + drawBoard[8] + ' | ' + drawBoard[9] + '\n'
    )
}

function validateMove(position) {
    let pos = parseInt(position);
    if (pos <= 9 && pos >= 1) {
        if (board[pos] == ' '){
            return true;
        }
    }
    return false;
}

let winCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function checkWin(player){
    for (let com of winCombinations){
        if(board[com[0]] == player && board[com[1]] == player && board[com[2]] == player){
            return true;
        }
    }
    return false;
}

function checkFull() {
    for (let cell in board){
        if (board[cell] == ' '){
            return false;
        }
    }
    return true;
}

function playTurn(player){
    let move = Number(prompt(player + " 's turn, input: "));
    //let move = number[move2]
    while (!validateMove(move)){
        console.log('Invalid Input!');
        move = prompt(player + " 's turn, input: ")
    }

    markBoard(move, player);
}

console.log('Game started: \n\n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

let winnerIdentified = false

let currentTurnPlayer = 'X'

while (!winnerIdentified){
    playTurn(currentTurnPlayer);
    printBoard();
    
    if (checkWin(currentTurnPlayer) || checkFull()){
        winnerIdentified = true;
    }
    
    if(winnerIdentified){
        if(checkWin(currentTurnPlayer)){
            console.log('Winner: ' + currentTurnPlayer);
            console.log('End Game');
        } else {
            console.log('Tie!');
            console.log('End Game');
        }

    } else {
        if (currentTurnPlayer == 'X')
            currentTurnPlayer = 'O';
        else 
            currentTurnPlayer = 'X';
        
    }
}