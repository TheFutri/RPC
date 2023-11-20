function getComputerChoice() { 
    let number = Math.floor(Math.random() * 3)
    if(number === 0) {
        return 'ROCK'
    }
    else if(number === 1) {
        return 'PAPER'
    }
    else {
        return 'SCISSORS'
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return 'Tie! Nobody wins'
    }
    else if(
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'))
    {
        return `You Win! ${playerSelection} beats ${computerSelection}` 
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    for(let i=0; i<=5; i++) {
        const playerSelection = prompt('Rock, Paper, Scissors?').toLocaleUpperCase()
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection)
        console.log(playerSelection)
        console.log(computerSelection)
        console.log(result)
    }
}

game()