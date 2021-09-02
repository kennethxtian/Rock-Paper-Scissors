let user = 0;
let computer = 0;
let roundWinner = "";

function computerPlay() {
    randomize = Math.floor(Math.random()*3);

    if (randomize === 0) {
        return "rock"
    } else if (randomize === 1) {
        return "paper"
    } else if (randomize === 2) {
        return "scissor"
    }
}

let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        roundWinner = "Tie"
        return console.log("Tie! Nobody wins.")
    } 
    
    if ( 

        (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "scissor") ||
        (playerSelection.toLowerCase() === "scissor" && computerSelection === "rock")

        ) {
        computer++
        roundWinner = "Computer"
        return console.log("You lose!");
    } 

    if (

        (playerSelection.toLowerCase() === "rock" && computerSelection === "scissor") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "scissor" && computerSelection === "paper")

        ) {
        user++
        roundWinner = "Player"
        return console.log("You Win!");
    } 
}

function game() {
let round = 0;

    for (round = 1; _round => 5; round++)
    playRound(playerSelection, computerSelection);


 
}


let playerSelection = prompt("Choose Your Fighter", "")
console.log(`Computer plays ${computerSelection}`)
console.log(playRound(playerSelection, computerSelection));


game();