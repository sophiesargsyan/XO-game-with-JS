'use strict';

// Print Start Board
let board = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let player1Steps = [];
let player2Steps = [];
let win = [
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]],
    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],
    [board[0], board[4], board[8]],
    [board[2], board[4], board[6]]
];

console.log("Start game.");

function printBoard(board) {
    console.log(board[0] + " | " + board[1] + " | " + board[2]);
    console.log(board[3] + " | " + board[4] + " | " + board[5]);
    console.log(board[6] + " | " + board[7] + " | " + board[8]);
    console.log("---------");
}

printBoard(board);

// Choosing player
let player1 = prompt('Choose x or o:').toUpperCase();
let player2 = (player1 === 'X') ? 'O' : 'X';

function player1Input() {
    let step;
    do {
        step = +prompt('Enter value for your move: ');
        if (step < 1 || step > 10 || isNaN(step) || board[step - 1] === 'X' || board[step - 1] === 'O') {
            alert("Invalid move.");
            return -1;
        } else if (player2Steps.includes(step.toString())) {
            alert("Number already taken by Player.");
            return -1;
        }
    } while (isNaN(step));
    return step;
}

let player1StepsCount = 0;
let player2StepsCount = 0;

function player1Move(board, player) {
    let step = player1Input();
    if (step === -1) {
        return null; 
    }
    player1Steps.push(step.toString());
    player1StepsCount++;
    board[step - 1] = player;
    printBoard(board);
    return board;
}

function player2Move(board, player) {
    let step = randomStep();
    player2Steps.push(step.toString());
    player2StepsCount++;
    board[step - 1] = player;
    printBoard(board);
    return board;
}

function randomStep() {
    let step;
    do {
        step = Math.floor(Math.random() * 10) + 1;
    } while (board[step - 1] === 'X' || board[step - 1] === 'O');
    return step;
}

while (true) {
    let player1MoveResult = player1Move(board, player1);
    if (!player1MoveResult) {
        alert("Player made an invalid move. Game over.");
        break; 
    }
    if (checkWin(player1Steps)) {
        alert(`Congratulations! You win.`);
        break;
    }
    if (player1StepsCount + player2StepsCount === 10) {
        alert(`It's a draw.`);
        break;
    }
    player2Move(board, player2);
    if (checkWin(player2Steps)) {
        alert(`Game over.`);
        break;
    }
}

function checkWin(steps) {
    for (let i = 0; i < win.length; i++) {
        if (win[i].every(val => steps.includes(val))) {
            return true;
        }
    }
    return false;
}
