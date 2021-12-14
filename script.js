function computerPlay() {

    var words = ["Rock", "Paper", "Scissors"];
    let wordSelect = words[Math.floor(Math.random() * words.length)];

    return wordSelect;
}