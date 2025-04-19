
function getComputerChoice(){
    let number = Math.floor(Math.random()*10);
    
    if ( number <=3 && number > 0){
        return("rock");
    }
    else if (number <=6 && number >3){
        return("paper");
    }
    else {
        return("scissors");
    } 
    }
   getComputerChoice();

function getHumanChoice(){
    let choice = prompt("pick a play!");
    return choice;
    }
   

   let humanScore = 0;
   let computerScore = 0;

   function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice=== "scissors"){
        console.log("you win! Rock beats scissors");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("you lose, paper beats rock.");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice=== "rock"){
        console.log("you win! paper beats rock.");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("you lose, scissors beat paper!");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerScore === "paper"){
        console.log("you win! scissors beat paper.");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerScore === "rock"){
        console.log("you lose, scissors beat rock.");
        computerScore++;
    }
    else {
        console.log("it's a draw");
    }
   }


   function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore >computerScore){
        alert(`you win! your score is ${humanScore}`);
    }
    else if (computerScore > humanScore){
        alert(`you lose, computer score is ${computerScore}`);
    }
    else {
        alert("it's a draw! the score is " + humanScore);
    }
    
   }
   playGame();

