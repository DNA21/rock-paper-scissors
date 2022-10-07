// A game of rock paper scissors played against the computer

const playerChoices = document. querySelectorAll('.choice');

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

function getPlayerChoice(e){
    const computerChoice = getComputerChoice();
    let playerChoice = (e.target.getAttribute('id'));

    playerChoice = playerChoice.toLowerCase();
    let firstLetter = playerChoice.charAt(0).toUpperCase();
    playerChoice = firstLetter.concat(playerChoice.slice(1));

    console.log(playerChoice) 
    const playerWinner = playRound(playerChoice, computerChoice)
    score(playerWinner, playerChoice, computerChoice)

    return playerChoice
}


// run getPlayerChoice function when one of the images is clicked. 

playerChoices.forEach(div => {div.addEventListener('click', getPlayerChoice)})

// Decide round winner

function playRound(playerSelection, computerSelection){
    let playerWin = false;

    if (playerSelection === computerSelection){
        return "Tie!"
    
    // If Computer win, returns false boolean
    // If Player wins, returns true boolean 

    } else if (playerSelection === 'Rock' && computerSelection === 'Paper' || 
    playerSelection === 'Paper' && computerSelection === 'Scissors' || 
    playerSelection === 'Scissors' && computerSelection === 'Rock'){
        return playerWin
    } else {
        playerWin = true;
        return playerWin
    }
}

// If player wins, shows player win results
// If computer wins, shows computer win results
// Updates score

function score(winner, playerChoice, computerChoice){
    results = document.querySelector('.results')
    if(winner === true){
        results.textContent = 'You won! ' + playerChoice + ' beats ' + computerChoice;
    }
    else if(winner === false){
        results.textContent = 'You lost! ' + playerChoice + ' loses to ' + computerChoice;
    }
    else{
        results.textContent = 'Tie!'
    }
}


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

// console.log(game());