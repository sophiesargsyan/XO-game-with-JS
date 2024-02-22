'use strict';
//Choosing player
let player1 = prompt('Choose x or o:').toUpperCase();
let player2 = (player1 === 'X')? 'O':'X';

let player1Steps = [];
let player2Steps = [];

//Print Start Board
let board = ['1','2','3','4','5','6','7','8','9','10'];

function printBoard(board) {
    console.log(board[0] + " | " + board[1] + " | " + board[2]);
    console.log(board[3] + " | " + board[4] + " | " + board[5]);
    console.log(board[6] + " | " + board[7] + " | " + board[8]);
    console.log("---------");
}
printBoard(board); 

function player1Input(step){
    step = +prompt('Enter value for your move: ');
    return step;
}

player1Steps[0] = player1Input(player1Steps[0]);
console.log(player1Steps)

//1
function player1Move (board, player,j) {
    for(let i = 0; i < board.length; i++) {
        if(player1Steps[j] == board[i]) {
            board[i] = player;
            printBoard(board);
            break;
        }
    }
    return board;
}

player1Move(board, player1, 0);

/*
// Winning combos
let win = [
    [board[0],board[1],board[2]],
    [board[3],board[4],board[5]],
    [board[6],board[7],board[8]],
    [board[0],board[3],board[6]],
    [board[1],board[4],board[7]],
    [board[2],board[5],board[8]],
    [board[0],board[4],board[8]],
    [board[2],board[4],board[6]]
]





//2
function randomStep(arg){
    arg = Math.floor(Math.random() * board.length);
    return arg;
}

do{
    step2 = randomStep(step2)
    break;
} while(step2 < board.length || step2 > board.length)




function player2Move (board,player) {
    setTimeout(function(){
        for(let i = 0; i < board.length; i++) {
            if(step2 == board[i] && step2 != step) {
                board[i] = player;
                printBoard(board);
                break;
            }
        }
    },2000);
    return board;
}


*/







