// A game of rock paper scissors played against the computer

// Computer randomly chooses rock paper or scissors

function getComputerChoice(){
    const compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        return "Rock"
    } else if (compChoice === 2){
        return "Paper"
    } else {
        return "Scissors"
    }
}

// Player chooses selection
// Returns choice with the first letter capitalized

function getPlayerChoice(){
    let playerChoice = 'PapER';
    playerChoice = playerChoice.toLowerCase();
    firstLetter = playerChoice.charAt(0).toUpperCase();
    playerChoice = firstLetter.concat(playerChoice.slice(1));
    return playerChoice
}

// Decide winner

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie!"
    
    // If Player wins, return player winner else return computer winner

    } else if (playerSelection === 'Rock' && 
    computerSelection === 'Paper' || playerSelection === 'Paper'
    && computerSelection === 'Scissors' || playerSelection === 'Scissors'
    && computerSelection === 'Rock'){
        return "You Won! " + playerSelection + ' beats ' + computerSelection
    } else {
        return "You Lose! " + computerSelection + ' beats ' + playerSelection
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))