let playerWinCount = 0;
let computerWinCount = 0;

const body = document.querySelector('body');
const roundDiv = document.querySelector('.round');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const resultDiv = document.querySelector('.result');

function resetResultsIfNecessary() {
    if (playerWinCount === 0 && computerWinCount === 0) {
        resultDiv.textContent = '';
        body.classList.remove('victory');
        body.classList.remove('defeat');
    }
}

function displayScore() {
    playerScore.textContent = `Your score: ${playerWinCount}`
    computerScore.textContent = `Computer score: ${computerWinCount}`;
}

function concludeAndResetIfNecessary() {
    if (playerWinCount === 5 || computerWinCount === 5) {
        if (playerWinCount === 5) {
            resultDiv.textContent = 'You win the match! Congratulations!';
            body.classList.add('victory');
        } else {
            resultDiv.textContent = 'You lose the match! HAHAHAHA';
            body.classList.add('defeat');
        }
        playerWinCount = 0;
        computerWinCount = 0;
    }
}

function playRound(playerSelection, computerSelection) {
    resetResultsIfNecessary();
    if (playerSelection.toUpperCase() === 'ROCK' &&
        computerSelection.toUpperCase() === 'PAPER') {
        computerWinCount++;
        roundDiv.textContent = 'You Lose! Paper beats Rock';
    } else if (playerSelection.toUpperCase() === 'ROCK' &&
        computerSelection.toUpperCase() === 'SCISSORS') {
        playerWinCount++;
        roundDiv.textContent = 'You Win! Rock beats Scissors';
    } else if (playerSelection.toUpperCase() === 'PAPER' &&
        computerSelection.toUpperCase() === 'ROCK') {
        playerWinCount++;
        roundDiv.textContent = 'You Win! Paper beats Rock';
    } else if (playerSelection.toUpperCase() === 'PAPER' &&
        computerSelection.toUpperCase() === 'SCISSORS') {
        computerWinCount++;
        roundDiv.textContent = 'You Lose! Scissors beats Paper';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' &&
        computerSelection.toUpperCase() === 'ROCK') {
        computerWinCount++;
        roundDiv.textContent = 'You Lose! Rock beats Scissors';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' &&
        computerSelection.toUpperCase() === 'PAPER') {
        playerWinCount++;
        roundDiv.textContent = 'You Win! Scissors beats Paper';
    } else {
        roundDiv.textContent = `It's a tie!`;
    }
    displayScore();
    concludeAndResetIfNecessary();
}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'Rock';
    } else if (choice === 1) {
        return 'Paper';
    }
    return 'Scissors';
}

const choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener('mouseover', () => {
        choice.classList.add('expand');
    });
    choice.addEventListener('mouseleave', () => {
        choice.classList.remove('expand');
    });
    choice.addEventListener('mousedown', () => {
        choice.classList.add('select');
        playRound(choice.dataset.item, getComputerChoice());
    });
    choice.addEventListener('mouseup', () => {
        choice.classList.remove('select');
    });
    choice.addEventListener('dragleave', () => {
        choice.classList.remove('expand');
        choice.classList.remove('select');
    });
});