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
    document.getElementById('rock').addEventListener('click', () => {
        const playerSelection = 'ROCK'
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    })

    document.getElementById('paper').addEventListener('click', () => {
        const playerSelection = 'PAPER'
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    })

    document.getElementById('scissors').addEventListener('click', () => {
        const playerSelection = 'SCISSORS'
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    })
}


game()