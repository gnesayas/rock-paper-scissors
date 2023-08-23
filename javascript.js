let playerWinCount = 0;
let computerWinCount = 0;

const roundDiv = document.querySelector('.round');
const matchDiv = document.querySelector('.match');
const resultDiv = document.querySelector('.result');

function resetResultsIfNecessary() {
    if (playerWinCount === 0 && computerWinCount === 0) {
        resultDiv.textContent = '';
    }
}

function displayScore() {
    matchDiv.textContent =
        `Your score: ${playerWinCount} Computer score: ${computerWinCount}`;
}

function concludeAndResetIfNecessary() {
    if (playerWinCount === 5 || computerWinCount === 5) {
        if (playerWinCount === 5) {
            resultDiv.textContent = 'You win the match! Congratulations!';
        } else {
            resultDiv.textContent = 'You lose the match! HAHAHAHA';
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

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        playRound(btn.textContent, getComputerChoice());
    });
});