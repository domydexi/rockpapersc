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

function game() {

    let computerSelection = computerPlay();
    let roundWin = "";
    let scorePlayer = 0;
    let scoreCPU = 0;

    for(let i = 0; i < 5; i++){

        let playerSelection = prompt("Enter Rock, Paper or Scissors: ");
        roundWin = playRound(playerSelection, computerSelection);

        console.log(roundWin);

        if(roundWin.includes("You win!")) {
            scorePlayer += 1;
        }
        else if(roundWin.includes("You lose!")) {
            scoreCPU += 1;
        }
        else {
            scoreCPU += 0;
            scorePlayer += 0;
        }

        console.log("You: " + scorePlayer + "\n" + "CPU: " + scoreCPU);
    }

    if (scoreCPU > scorePlayer){
        console.log("The Computer wins!");
    }
    else {
        console.log("You win!");
    }

}

game();