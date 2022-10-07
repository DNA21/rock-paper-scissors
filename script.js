// A game of rock paper scissors played against the computer

const playerChoices = document.querySelectorAll('.choice');
let playerScore = 0;
let computerScore = 0;

const player = document.querySelector('#playerScore')
const computer = document.querySelector('#computerScore')

player.textContent = `Player Score: ${playerScore}`
computer.textContent = `ComputerScore: ${computerScore}`

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
    //playerScore = document.querySelector('.playerScore');
    //computerScore = document.querySelector('.computerScore');
    if(winner === true){
        results.textContent = 'You won! ' + playerChoice + ' beats ' + computerChoice;
        playerScore += 1;
        player.textContent = `Player Score: ${playerScore}`;
        isWinner(playerScore, computerScore)
    }
    else if(winner === false){
        results.textContent = 'You lost! ' + playerChoice + ' loses to ' + computerChoice;
        computerScore += 1;
        computer.textContent = `ComputerScore: ${computerScore}`;
        isWinner(playerScore, computerScore)
    }
    else{
        results.textContent = 'Tie! You chose ' + playerChoice + ' and the computer chose ' + computerChoice;
    }
}

function isWinner(pScore, cScore){
    const winner = document.querySelector('h2')
    if (pScore === 5){
        winner.textContent = 'Player Wins!'
        playerChoices.forEach(div => {div.removeEventListener('click', getPlayerChoice)})
        playAgain();
    } else if (cScore ===5){
        winner.textContent = 'Computer Wins'
        playerChoices.forEach(div => {div.removeEventListener('click', getPlayerChoice)})
        playAgain();
    }
}

function playAgain(){
    const endGame = document.querySelector('#playAgain')
    const button = document.createElement('button')
    button.textContent = 'Play Again?'
    button.style.cssText = 'text-align: center;'

    endGame.appendChild(button);
    button.addEventListener('click', () => {location.reload()})
}


// run getPlayerChoice function when one of the images is clicked. 

playerChoices.forEach(div => {div.addEventListener('click', getPlayerChoice)})

/* --------------------------------------------------------------
            OLD game function
------------------------------------------------------------------

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

*/