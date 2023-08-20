function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'Rock';
    } else if (choice === 1) {
        return 'Paper';
    }
    return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === 'ROCK' &&
        computerSelection.toUpperCase() === 'PAPER') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection.toUpperCase() === 'ROCK' &&
        computerSelection.toUpperCase() === 'SCISSORS') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection.toUpperCase() === 'PAPER' &&
        computerSelection.toUpperCase() === 'ROCK') {
        return 'You Win! Paper beats Rock';
    } else if (playerSelection.toUpperCase() === 'PAPER' &&
        computerSelection.toUpperCase() === 'SCISSORS') {
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' &&
        computerSelection.toUpperCase() === 'ROCK') {
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' &&
        computerSelection.toUpperCase() === 'PAPER') {
        return 'You Win! Scissors beats Paper';
    }
    return `It's a tie!`;
}

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Select your choice: ');
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
        if (result.substring(0, 5) === 'You W') {
            playerWinCount++;
        } else if (result.substring(0, 5) === 'You L') {
            computerWinCount++;
        }
    }
    if (playerWinCount > computerWinCount) {
        console.log('You win the match! Congratulations!');
    } else if (playerWinCount < computerWinCount) {
        console.log('You lose the match! HAHAHAHA');
    } else {
        console.log(`The match ends in a tie!`);
    }
}

game();