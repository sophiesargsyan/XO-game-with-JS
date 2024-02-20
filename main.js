'use strict';

let player1 = prompt('Choose x or o:').toUpperCase();
let player2 = (player1 === 'X')? 'O':'X';
let step = Number(prompt('Enter board-number for your move:'));
let board = ['1','2','3','4','5','6','7','8','9', '10'];

function printBoard(board) {
    console.log(board[0] + " " + board[1] + " " + board[2]);
    console.log(board[3] + " " + board[4] + " " + board[5]);
    console.log(board[6] + " " + board[7] + " " + board[8]);
    console.log("______");
}
printBoard(board); 

function playerMove(board, player){
    for(let i = 0; i < board.length; i++) {
        if(step == board[i-1]) {
            board[i-1] = player;
            printBoard(board);
            break;
        }
    }
    return board;
}

let currentBoard = playerMove(board, player1);

//Computer player step
let step2;

do{
    step2 = Math.floor(Math.random() * board.length);
    break;
} while(step2 < board.length || step2 > board.length)

function player2Move(board,player){
    
    for(let i = 0; i < board.length; i++) {
        if(step2 == board[i-1] && step2 != step) {
            board[i-1] = player;
            printBoard(board);
            break;
        }
    }
    return board;
}

let currentBoard2 = player2Move(board, player2);

// Winning combos
let winningCombos = [
    [board[0],board[1],board[2]],
    [board[3],board[4],board[5]],
    [board[6],board[7],board[8]],
    [board[0],board[3],board[6]],
    [board[1],board[4],board[7]],
    [board[2],board[5],board[8]],
    [board[0],board[4],board[8]],
    [board[2],board[4],board[6]]
]

















