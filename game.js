import pkg from 'prompt-sync';
const prompt = pkg();

import { playRound, computerPlay, placar } from './playGame.js'

function game(){
    let playerSelection;
    let computerSelection;
    console.log('########## Welcome to Rock-Paper-Scissors Game! ##########')
    let qtdPartidas = parseInt(prompt('Type the number of matches: '))
    if (qtdPartidas <= 0){
       return console.log('You don´t wanna play!')
    }
    for (let i = 0; i < qtdPartidas; i++){
        computerSelection = computerPlay();
        playerSelection = prompt("Type: Rock, Paper or Scissors: ")
        console.log(playRound(playerSelection, computerSelection));
    }
    placar()
}
game()