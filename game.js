function computerPlay(){
    var array = ['Rock', 'Paper', 'Scissors'];
    let choose = Math.floor((Math.random() * 3) + 0);
    return array[choose];
}

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
    }else (word === 'Scissors' && computerSelection === 'Paper')
            human++;
        return "You win! Scissors beats Paper"
}

function game(){
    var playerSelection;
    for (let i = 0; i <= 4; i++){
        playerSelection = prompt("Type: Rock, Paper or Scissors: ")
        console.log(playRound(playerSelection, computerSelection));
    }
    if (human > machine)
        console.log('The winner is human ='+human+"-"+machine)
    else if (human > machine)
        console.log('The winner is machine ='+human+"-"+machine)
    else 
        console.log('Draw game ='+human+"-"+machine)
}

const computerSelection = computerPlay();

console.log(game())