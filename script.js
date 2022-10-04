// A game of rock paper scissors played against the computer

// Computer randomly chooses rock paper or scissors


function getComputerChoice(){
    const compChoice = Math.floor(Math.random() * 3) + 1
    if (compChoice === 1) {
        return "Rock"
    } else if (compChoice === 2){
        return "Paper"
    } else {
        return "Scissors"
    }
}

console.log(getComputerChoice())
// Player chooses selection

// Decide winner