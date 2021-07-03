function computerPlay(){
    var array = ['Rock', 'Paper', 'Scissors'];
    let choose = Math.floor((Math.random() * 3));
    return array[choose];
}

const prompt = require('prompt-sync')({sigint:true})
var human = 0;
var machine = 0;

function playRound(playerSelection, computerSelection){
    var word = playerSelection;
    word = word.toLowerCase()
    word = word.charAt(0).toUpperCase() + word.slice(1)
    if (word === 'Rock' && computerSelection === 'Paper'){
        machine++;
        return "You lose! Paper beats Rock" 
    }else if (word === 'Paper' && computerSelection === 'Rock'){
        human++;
        return "You win! Paper beats Rock"
    }else if (word === 'Scissors' && computerSelection === 'Rock'){
        machine++;
        return "You lose! Rock beats Scissors" 
    }else if (word === 'Rock' && computerSelection === 'Scissors'){
        human++;
        return "You win! Rock beats Scissors" 
    }else if (word === 'Paper' && computerSelection === 'Scissors'){
        machine++;
        return "You lose! Scissors beats Paper" 
    }else {
        human++;
        return "You win! Scissors beats Paper"
        }
}

function game(){
    let playerSelection;
    let computerSelection;
    let qtdPartidas = parseInt(prompt('Insira a quantidade de partidas que deseja jogar: '))
    for (let i = 0; i < qtdPartidas; i++){
        computerSelection = computerPlay();
        playerSelection = prompt("Type: Rock, Paper or Scissors: ")
        console.log(playRound(playerSelection, computerSelection));
    }
    if (human > machine){
        console.log('The winner is human: '+human+"-"+machine)
    }else if (human < machine){
        console.log('The winner is machine: '+machine+"-"+human)
    }else 
        console.log('Draw game: '+human+"-"+machine)
}
console.log(game())