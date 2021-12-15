function computerPlay() {

    var words = ["Rock", "Paper", "Scissors"];
    let wordSelect = words[Math.floor(Math.random() * words.length)];

    return wordSelect;
}

function playRound(playerSelection, computerSelection) {

    let player1 = playerSelection.toLowerCase();
    let cpu1 = computerSelection.toLowerCase();
    let answer = "";
    
    switch(player1) {
        case "rock":
            if(cpu1 == "paper") {
                answer = "You lose! Paper beats Rock";
            }
            else if (cpu1 == "scissors"){
                answer = "You win! Rock beats Scissors";
            }
            else { answer = "It\'s a tie!";}
            break;
        case "paper":
            if(cpu1 == "scissors") {
                answer = "You lose! Scissors beats Paper";
            }
            else if (cpu1 == "rock"){
                answer = "You win! Paper beats Rock";
            }
            else { answer = "It\'s a tie!";}
            break;
        case "scissors":
            if(cpu1 == "rock") {
                answer = "You lose! Rock beats Scissors";
            }
            else if (cpu1 == "paper"){
                answer = "You win! Scissors beats Paper";
            }
            else { answer = "It\'s a tie!";}
            break;
    }

    return answer;
}

let playerSelection = "roCk";
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));