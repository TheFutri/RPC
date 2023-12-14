let pcScore = 0
let playerScore = 0
let result = 0

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
        playerScore++
        return `You Win! ${playerSelection} ${playerScore} beats ${computerSelection} ${pcScore}` 
    }
    else {
        pcScore++
        return `You Lose! ${computerSelection} ${playerScore} beats ${playerSelection} ${pcScore}`
    }
}

function game() {
    document.getElementById('rock').addEventListener('click', () => {
        const playerSelection = 'ROCK'
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
        whoWin(pcScore, playerScore)
    })

    document.getElementById('paper').addEventListener('click', () => {
        const playerSelection = 'PAPER'
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
        whoWin(pcScore, playerScore)
    })

    document.getElementById('scissors').addEventListener('click', () => {
        const playerSelection = 'SCISSORS'
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
        whoWin(pcScore, playerScore)
    })
}

function whoWin(pcScore, playerScore) {
    if(pcScore === 5) {
        return `Player win ${playerScore} - ${pcScore}`
    }
    else {
        return `PC win ${playerScore} - ${pcScore}`
    }
}


game()