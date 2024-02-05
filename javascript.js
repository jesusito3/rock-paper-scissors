function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    num = Math.floor(Math.random() * 3);
    return choices[num];
}

function playRound(playerChoice, computerSelection) {
    let choice = playerChoice;
    let randomSelection = getComputerChoice();
    let computerChoice = randomSelection.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        if (choice === "rock" && computerChoice === "scissors" ||
        choice === "paper" && computerChoice === "rock" ||
        choice === "scissors" && computerChoice === "paper") {
            alert(`You win! ${choice[0].toUpperCase() + choice.slice(1)} beats ${randomSelection}`);
            return 'win';
        }
        else if (choice === "rock" && computerChoice === "paper" || 
        choice === "paper" && computerChoice === "scissors" ||
        choice === "scissors" && computerChoice === "rock") {
            alert(`You lose! ${randomSelection} beats ${choice[0].toUpperCase() + choice.slice(1)}`);
            return 'loss';
        }
        else {
            alert("Tie! Play again!")
            return playRound();
        }
    }
}

let playerWins = 0;
let computerWins = 0;

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

rockButton.addEventListener('click', () => {
    if (playRound('rock', getComputerChoice()) === 'win') {
        playerWins += 1;
        alert("Player wins: " + playerWins);
    }
    else if (playRound('rock', getComputerChoice()) === 'loss') {
        computerWins += 1;
        alert("Computer wins: " + computerWins);
    }
});

paperButton.addEventListener('click', () => {
    if (playRound('paper', getComputerChoice()) === 'win') {
        playerWins += 1;
        alert("Player wins: " + playerWins);
    }
    else if (playRound('paper', getComputerChoice()) === 'loss') {
        computerWins += 1;
        alert("Computer wins: " + computerWins);
    }
});

scissorsButton.addEventListener('click', () => {
    if (playRound('scissors', getComputerChoice()) === 'win') {
        playerWins += 1;
        alert("Player wins: " + playerWins);
    }
    else if (playRound('scissors', getComputerChoice()) === 'loss') {
        computerWins += 1;
        alert("Computer wins: " + computerWins);
    }
});

/*
*/