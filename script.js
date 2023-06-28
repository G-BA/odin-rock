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