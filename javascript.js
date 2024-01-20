/*
getComputerChoice function to randonmly return rock, paper, or scissors
function to play a single round of rps, two parameters (playerSelection, computerSelection) string that declares winner
"You lose! Paper beats Rock"
    playerSelection must be case insensitive
    account for ties by replaying the round
return results of function call, not console.log
    function playRound(playerSelection, computerSelection) {
        code here
    }

    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
new function called game(), use previous function inside this one to play best of five, keep score, report winner or loser at end
    loop or call playRound() 5 times
    console.log() at this point to display results of each round and winner at end
    prompt() for input from user

function to get random computer choice
function to play one round which takes players selection and computers selection from getComputerChoice function
function game() with previous playRound function inside it to loop for a best of 5

*/

//function to get random computer choice
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    num = Math.floor(Math.random() * 3);
    return choices[num];
}

//function to play one round which takes players selection and computers selection from getComputerChoice function
//take user input
//take computer selection from function
//turn selections lower or uppercase
//if player chooses rock and computer chooses scissors, player wins
//if player chooses rock and computer chooses paper, computer wins
//if player chooses paper and comp rock, player wins
//if player paper and comp scissors, comp wins
//if player scissors and comp paper, players wins
//if player scissors and comp rock, comp wins
//else replay
//string to declare winner of the round
function playRound(playerChoice, computerSelection) {
    let userChoice = prompt("Rock, Paper, or Scissors?");
    let choice = userChoice.toLowerCase();
    let randomSelection = getComputerChoice();
    const computerChoice = randomSelection.toLowerCase();
    let winner = `You win! ${choice[0].toUpperCase() + choice.slice(1)} beats ${randomSelection}`;
    let loser = `You lose! ${randomSelection} beats ${choice[0].toUpperCase() + choice.slice(1)}`;  
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        if (choice === "rock" && computerChoice === "scissors") {
            return winner;
        }
        else if (choice === "rock" && computerChoice === "paper") {
            return loser;
        }
        else if (choice === "paper" && computerChoice === "rock") {
            return winner;
        }
        else if(choice === "paper" && computerChoice === "scissors") {
            return loser;
        }
        else if(choice === "scissors" && computerChoice === "paper") {
            return winner;
        }
        else if(choice === "scissors" && computerChoice === "rock") {
            return loser;
        }
        else {
            alert("Tie! Play again!")
            playRound();
        }
    }
    else {
        alert("Option incorrect, please pick an appropriate option")
        playRound();
    }
}

//function game() with previous playRound function inside it to loop for a best of 5
//keep count of player wins
//keep count of computer wins
//if one reaches 3 stop games and announce winner and score
//else game keeps getting played
/*
function game() {
    let playerWins = 0;
    let computerWins = 0;
    while (true) {
        let result = playRound();
        if (playerWins === 3) {
            alert(`Player wins best of 5! Score was ${playerWins} to ${computerWins}`);
            break;
        }
        else if (computerWins === 3) {
            alert(`Computer wins best of 5! Score was ${computerWins} to ${playerWins}`);
            break;
        }
        else {
            playRound();
            if (result === winner) {
                playerWins++;
            }

            if(result === loser) {
                computerWins++;
            }
        }
    }
}
*/