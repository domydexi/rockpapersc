
const buttons = document.querySelectorAll(".play-button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {
        console.log((button.id));
    })
})



/*function computerPlay() {

    var words = ["Rock", "Paper", "Scissors"];
    let wordSelect = words[Math.floor(Math.random() * words.length)];

    return wordSelect;

}

function playRound(playerSelection, computerSelection) {

    let player1 = "";
    let cpu1 = computerSelection.toLowerCase();

    console.log(cpu1);

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
}*/