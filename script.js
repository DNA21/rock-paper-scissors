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
    let playerChoice = prompt('Rock, Paper, or Scissors:');
    playerChoice = playerChoice.toLowerCase();
    let firstLetter = playerChoice.charAt(0).toUpperCase();
    playerChoice = firstLetter.concat(playerChoice.slice(1));
    return playerChoice
}

// Decide winner

function playRound(playerSelection, computerSelection, playerWin, computerWin){
    if (playerSelection === computerSelection){
        return "Tie!"
    
    // If Player wins, return player winner else return computer winner

    } else if (playerSelection === 'Rock' && computerSelection === 'Paper' || 
    playerSelection === 'Paper' && computerSelection === 'Scissors' || 
    playerSelection === 'Scissors' && computerSelection === 'Rock'){
        playerWin += 1;
        return "You Won! " + playerSelection + ' beats ' + computerSelection, playerWin
    } else {
        computerWin += 1;
        return "You Lose! " + computerSelection + ' beats ' + playerSelection, computerWin
    }
}

//const playerSelection = getPlayerChoice();
//const computerSelection = getComputerChoice();

//console.log(playRound(playerSelection, computerSelection))

// play a five round game and keep score

function game(){
    let playerWin = 0;
    let computerWin = 0;
    for (let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        if (playerSelection === computerSelection){
            console.log("Tie!")
            continue
        
        // If Player wins, return player winner else return computer winner
    
        } else if (playerSelection === 'Rock' && computerSelection === 'Paper' || 
        playerSelection === 'Paper' && computerSelection === 'Scissors' || 
        playerSelection === 'Scissors' && computerSelection === 'Rock'){
            playerWin += 1;
            console.log("You Won! " + playerSelection + ' beats ' + computerSelection)
            continue
        } else {
            computerWin += 1;
            console.log("You Lose! " + computerSelection + ' beats ' + playerSelection)
            continue
        }
    }

    return 'Player: ' + playerWin + ' Computer: ' + computerWin
}

console.log(game());