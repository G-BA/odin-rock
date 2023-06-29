function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*3)];
};

function playRound(computerSelection, playerSelection){
    let computerChoice = getComputerChoice().toLowerCase();
    let playerChoice = prompt("Type your choice").toLowerCase();
    
    if(computerChoice == playerChoice){
        return "Draw!";
    }
    else if(computerChoice == "rock" && playerChoice == "scissors" ||
            computerChoice == "scissors" && playerChoice == "paper" ||
            computerChoice == "paper" && playerChoice == "rock"){
        return "Computer wins!";
    }
    else if(playerChoice == "rock" && computerChoice == "scissors" ||
            playerChoice == "scissors" && computerChoice == "paper" ||
            playerChoice == "paper" && computerChoice == "rock"){
        return "You win!";
    }
    else
        return "Error";
};

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let gameNumber = 0; gameNumber < 5; gameNumber++){
        let gameResult = playRound();
        if(gameResult == "Computer wins!") {computerScore++}
        else if(gameResult == "You win!") {playerScore++}
        else if(gameResult == "Draw!") {playerScore++, computerScore++}
    };

    if(playerScore > computerScore) {return "You Win!";}
    else if(playerScore < computerScore) {return "Computer Wins!";}
    else if (playerScore == computerScore) {return "Draw!";}
}