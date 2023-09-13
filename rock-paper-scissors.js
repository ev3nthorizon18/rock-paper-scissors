//prompts user to input a selection of rock, paper, or scissors and will uppercase the selection allowing the answer to be submitted in different case structure. 
const playerSelection = prompt("Choose either Rock, Paper, or Scissors.").toUpperCase();
   
//computer will choose at random from the three choices(rock, paper, scissors).
function getComputerChoice () {
    const rockPaperScissorsArray = ["ROCK", "PAPER", "SCISSORS"];
    const random = (Math.floor(Math.random()*rockPaperScissorsArray.length));
    return rockPaperScissorsArray[random]
}
// Function playRound will compare the playerSelection with the computerSelection and determine a winner.
function playRound(playerSelection, computerSelection) {
    if (playerSelection ==="ROCK" && computerSelection ==="SCISSORS"){
        return("You win! Rock beats Scissors");
    }else if(playerSelection ==="PAPER"&& computerSelection ==="SCISSORS"){
        return("You lose! Scissors beats Paper");
    }else if(playerSelection ==="SCISSORS" && computerSelection ==="ROCK"){
        return("You lose! Rock beats Scissors");
    }else if(playerSelection ==="ROCK" && computerSelection ==="PAPER"){
        return("You lose! Paper beats Rock");
    }else if(playerSelection ==="PAPER" && computerSelection ==="ROCK"){
        return("You win! Paper beats Rock");
    }else if(playerSelection ==="SCISSORS" && computerSelection ==="PAPER"){
        return("You win! Scissors beats Paper");
    }else {
        return("Game is a tie");
    }
}

// This component will store the randomly selected string from rockPaperScissorsArray allowing the use of it for the future.
let computerSelection = getComputerChoice();

//The game() function includes a for loop that will run the playRound 5 different times. Each run will determine a winner of the round. The winner is then tallied to determine who has the most wins in a best of five match.. 
function game () {
    let playerTally = 0;
    let computerTally = 0;
    for(let i=0; i<5; i++){
        let computerSelection = getComputerChoice();
        
        let result=playRound.call(this, playerSelection, computerSelection);

        console.log("Player Selection" + ": " + playerSelection + ", ", "Computer Selection" + ": " +computerSelection+ ", ", result);
        
// The if else statement tallies the wins of the user and the wins of the computer for the five game match. 
        if (result==="You win! Scissors beats Paper" || result==="You win! Paper beats Rock" || result==="You win! Rock beats Scissors"){
            playerTally +=1; 
        }else if (result==="You lose! Scissors beats Paper" || result==="You lose! Paper beats Rock" || result==="You lose! Rock beats Scissors"){
            computerTally+=1;
        }
    }   

// The if else statement compares the playerTally to the computerTally to determine the winner of the five game match. 
    console.log("Player Tally: " + playerTally, "Computer Tally: " +computerTally);
if (playerTally>computerTally){
        console.log("You win the best of five match! "+ playerTally + " to "+computerTally);
}else if (computerTally>playerTally){
        console.log("You lose the best of five match! "+ playerTally + " to "+computerTally);
}else {
            console.log("Best of five match is a tie!"+ playerTally + " to "+computerTally);
     }     
    }
game()


