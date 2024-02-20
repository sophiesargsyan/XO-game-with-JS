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















