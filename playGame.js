
export class playGame {
    constructor(){}
}
let word, human = 0, machine = 0;
    export function playRound(playerSelection, computerSelection){
        word = playerSelection;
        word = word.toLowerCase()
        word = word.charAt(0).toUpperCase() + word.slice(1)
        if (word === 'Rock' && computerSelection === 'Paper'){
            machine++;
            return "You lose! Paper beats Rock" 
        }if (word === 'Paper' && computerSelection === 'Rock'){
            human++;
            return "You win! Paper beats Rock"
        }if (word === 'Scissors' && computerSelection === 'Rock'){
            machine++;
            return "You lose! Rock beats Scissors" 
        }if (word === 'Rock' && computerSelection === 'Scissors'){
            human++;
            return "You win! Rock beats Scissors" 
        }if (word === 'Paper' && computerSelection === 'Scissors'){
            machine++;
            return "You lose! Scissors beats Paper"
        }if (word === 'Scissors' && computerSelection === 'Paper'){
            human++;
            return "You win! Scissors beats Paper"  
        }else{
            return "Draw round!"
        }       
    }

    export function computerPlay(){
        let arrayOfElements = ['Rock', 'Paper', 'Scissors'];
        let chooseElement = Math.floor((Math.random() * 3));
        return arrayOfElements[chooseElement];
}

    export function placar(){
        console.log(`O placar ficou: Humano: ${human} - Máquina: ${machine}`)
}