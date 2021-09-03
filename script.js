let user = 0;
let computer = 0;
let tie = 0;


function computerPlay() {
    randomize = Math.floor(Math.random()*3) + 1;

    if (randomize === 1) {
        return "rock";
    } else if (randomize === 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === computerSelection) {
        tie++
        return console.log("It's a tie!");
    }

    if (

        (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "scissor") ||
        (playerSelection.toLowerCase() === "scissor" && computerSelection === "rock")

        ) {
            computer++
            return console.log("You lose!");
        }

    if (
        
        (playerSelection.toLowerCase() === "rock" && computerSelection === "scissor") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "scissor" && computerSelection === "paper")

    ) {
            user++
            return console.log("You win!");
    }
}

function game() {
    for (let round = 0; round < 5; round++) {
     const computerSelection = computerPlay();
     let playerSelection = prompt("Choose Your Fighter", "")

     console.log(`Computer plays ${computerSelection}`);
     playRound(playerSelection, computerSelection);
    }
}

game();

function gameWinner() {
    if ((tie > user) && (tie > computer)) {
        return console.log("The game calls tie. Nobody wins!");
    } else if (user > computer) {
        return console.log("You win the game. Congratulations!");
    } else if (computer > user) {
        return console.log("You lose the game. Better luck next time.")
    }
}

gameWinner();