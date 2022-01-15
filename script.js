
const btn = document.querySelectorAll("button");
let playerSelection;
let answer = "";
let round = 1;
let playerScore = 0;
let computerScore = 0;

//The computers choice
function computerPlay() {

    var words = ["Rock", "Paper", "Scissors"];
    let wordSelect = "";
    let randomChoice = Math.floor(Math.random(words.length) * 200);

    console.log(randomChoice);

    if (randomChoice % 3 == 0) {
        wordSelect = "Rock";
    } else if (randomChoice % 3 == 1) {
        wordSelect = "Paper";
    } else {
        wordSelect = "Scissors";
    }

    return wordSelect;

}

//Decides who wins a game
function whoWins(player1, cpu1, round) {

    switch(player1) {
        case "rock":
            if(cpu1 == "paper") {
                answer = "You lose! Paper beats Rock";
                computerScore++;
            }
            else if (cpu1 == "scissors"){
                answer = "You win! Rock beats Scissors";
                playerScore++;
            }
            else { answer = "It\'s a tie!";}
            break;
        case "paper":
            if(cpu1 == "scissors") {
                answer = "You lose! Scissors beats Paper";
                computerScore++;
            }
            else if (cpu1 == "rock"){
                answer = "You win! Paper beats Rock";
                playerScore++;
            }
            else { answer = "It\'s a tie!";}
            break;
        case "scissors":
            if(cpu1 == "rock") {
                answer = "You lose! Rock beats Scissors";
                computerScore++;
            }
            else if (cpu1 == "paper"){
                answer = "You win! Scissors beats Paper";
                playerScore++;
            }
            else { answer = "It\'s a tie!";}
            break;
    }

    console.log(answer);
    scoreBoard(answer, round, playerScore, computerScore);
}

//Creates a score board
function scoreBoard(answer, round, playerScore, computerScore) {

    const scoreBoard = document.querySelector("#text");
    scoreBoard.textContent = answer;

    const rounds = document.querySelector("#rounds");
    rounds.textContent = "Rounds: "+round;

    const hScore = document.querySelector("#hScore");
    hScore.textContent = "Score: " + playerScore;


    const cScore = document.querySelector("#cScore");
    cScore.textContent = "Score: " + computerScore;
    
}

//Announces the winner
function winner(playerScore, computerScore) {

    const scoreBoard = document.querySelector("#text");
    const restartGame = document. querySelector(".text");

    if(playerScore < 5) {

        scoreBoard.textContent = "You lost to the computer";

        const restartButton = document.createElement("button");
        restartButton.classList.add("restart");
        restartButton.textContent = "Play again";

        restartGame.appendChild(restartButton);

        restartButton.addEventListener("click", () => {
            window.location.reload();
        }); 
    }
    else {

        scoreBoard.textContent = "You won agains the computer!";

        const restartButton = document.createElement("button");
        restartButton.classList.add("restart");
        restartButton.textContent = "Play again";

        restartGame.appendChild(restartButton);

        restartButton.addEventListener("click", () => {
            window.location.reload();
        }); 
    }
}

//The actual game function
function playRound(playerSelection) {

    let player1 = playerSelection.toLowerCase();

    let computerSelection = computerPlay().toLowerCase();

    whoWins(player1, computerSelection, round);

    round++;

    if(playerScore == 5 || computerScore == 5) {
        winner(playerScore, computerScore);
    }

}

//Game start
btn.forEach((button) => {
    
    button.addEventListener("click", () => {
            playRound(button.value);
    });
});
