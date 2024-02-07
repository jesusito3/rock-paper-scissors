function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    num = Math.floor(Math.random() * 3);
    return choices[num];
}

const div = document.querySelector('#results');
const score = document.querySelector('#score');

function playRound(playerChoice, computerSelection) {
    let choice = playerChoice;
    let randomSelection = getComputerChoice();
    let computerChoice = randomSelection.toLowerCase();
    
    if (choice === "rock" && computerChoice === "scissors" ||
    choice === "paper" && computerChoice === "rock" ||
    choice === "scissors" && computerChoice === "paper") {
        div.textContent = `You win! ${choice[0].toUpperCase() + choice.slice(1)} beats ${randomSelection}`;
        return 'win';
    }
    else if (choice === "rock" && computerChoice === "paper" || 
    choice === "paper" && computerChoice === "scissors" ||
    choice === "scissors" && computerChoice === "rock") {
        div.textContent = `You lose! ${randomSelection} beats ${choice[0].toUpperCase() + choice.slice(1)}`;
        return 'loss';
    }
    else {
        return div.textContent = 'Tie, play again!';
    }
}

let playerWins = 0;
let computerWins = 0;

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

rockButton.addEventListener('click', () => {
    let result = playRound('rock', getComputerChoice());
    if (result === 'win') {
        playerWins += 1;
        score.textContent = `Score is player: ${playerWins} to computer: ${computerWins}`;
        if (playerWins === 5) {
            return winner();
        }
    }
    else if (result === 'loss') {
        computerWins += 1;
        score.textContent = `Score is player: ${playerWins} to computer: ${computerWins}`;
        if (computerWins === 5) {
            return loser();
        }
    }
});

paperButton.addEventListener('click', () => {
    let result = playRound('paper', getComputerChoice());
    if (result === 'win') {
        playerWins += 1;
        score.textContent = `Score is player: ${playerWins} to computer: ${computerWins}`;
        if (playerWins === 5) {
            return winner();
        }
    }
    else if (result === 'loss') {
        computerWins += 1;
        score.textContent = `Score is player: ${playerWins} to computer: ${computerWins}`;
        if (computerWins === 5) {
            return loser();
        }
    }
});

scissorsButton.addEventListener('click', () => {
    let result = playRound('scissors', getComputerChoice());
    if (result === 'win') {
        playerWins += 1;
        score.textContent = `Score is player: ${playerWins} to computer: ${computerWins}`;
        if (playerWins === 5) {
            return winner();
        }
    }
    else if (result === 'loss') {
        computerWins += 1;
        score.textContent = `Score is player: ${playerWins} to computer: ${computerWins}`;
        if (computerWins === 5) {
            return loser();
        }
    }
});

function winner() {
    playerWins = 0;
    computerWins = 0;
    return div.textContent = "Player wins! Play again!";
}

function loser() {
    playerWins = 0;
    computerWins = 0;
    return div.textContent = "Computer wins! Play again!";
}