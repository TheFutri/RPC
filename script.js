let pcScore = 0
let playerScore = 0
let result = 0

const resultFinal = document.querySelector('.resultFinal')

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
    const pResult = document.createElement('p')

    if(playerSelection === computerSelection) {
        pResult.innerText = `Draw`
        resultFinal.appendChild(pResult)
        return 'Tie! Nobody wins'
    }
    else if(
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'))
    {
        playerScore++
        pResult.innerText = `Win for Player`
        resultFinal.appendChild(pResult)
        return `You Win! ${playerSelection} ${playerScore} beats ${computerSelection} ${pcScore}` 
    }
    else {
        pcScore++
        pResult.innerText = `PC win`
        resultFinal.appendChild(pResult)
        return `You Lose! ${computerSelection} ${playerScore} beats ${playerSelection} ${pcScore}`
    }
}

function game() {
    document.getElementById('rock').addEventListener('click', () => {
        const playerSelection = 'ROCK'
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)

        whoWin(pcScore, playerScore)
    })

    document.getElementById('paper').addEventListener('click', () => {
        const playerSelection = 'PAPER'
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
        whoWin(pcScore, playerScore)
    })

    document.getElementById('scissors').addEventListener('click', () => {
        const playerSelection = 'SCISSORS'
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
        whoWin(pcScore, playerScore)
    })
}

function whoWin(pcScore, playerScore) {
    const h2 = document.createElement('h2')

    if(pcScore === 5) {
        h2.innerText = `Player win ${playerScore} - ${pcScore}`
        resultFinal.appendChild(h2)
        return `Player win ${playerScore} - ${pcScore}`
    }
    else {
        h2.innerText = `PC win ${playerScore} - ${pcScore}`
        resultFinal.appendChild(h2)
        return `PC win ${playerScore} - ${pcScore}`
    }
}


game()