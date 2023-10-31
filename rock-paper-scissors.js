 //computer will choose at random from the three choices(rock, paper, scissors).
function getComputerChoice () {
    const rockPaperScissorsArray = ["ROCK", "PAPER", "SCISSORS"];
    const random = (Math.floor(Math.random()*rockPaperScissorsArray.length));
    return rockPaperScissorsArray[random]
}
// Function playRound will compare the playerSelection with the computerSelection and determine a winner.

const rockButton = document.getElementById("ROCK");
const paperButton = document.getElementById("PAPER");
const scissorsButton = document.getElementById("SCISSORS");

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieScore = document.getElementById("tied-score");

let playerWinsNumber = 0;
let computerWinsNumber = 0;
let tieNumber = 0;

function click(e){
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

rockButton.addEventListener("click", click);
paperButton.addEventListener("click", click);
scissorsButton.addEventListener("click", click);


function playRound(playerSelection, computerSelection) {

    if (playerSelection ==="ROCK" && computerSelection ==="SCISSORS"){
        playerWins();
    }else if(playerSelection  ==="PAPER"&& computerSelection ==="SCISSORS"){
        computerWins();
    }else if(playerSelection  ==="SCISSORS" && computerSelection ==="ROCK"){
        computerWins();
    }else if(playerSelection   ==="ROCK" && computerSelection ==="PAPER"){
        computerWins();
    }else if(playerSelection  ==="PAPER" && computerSelection ==="ROCK"){
        playerWins();
    }else if(playerSelection  ==="SCISSORS" && computerSelection ==="PAPER"){
        playerWins();
    }else {
        tieWins();
    }
    if (playerWinsNumber === 5){
        alert("You won! Congratulations!");
        reset();
    }else if(computerWinsNumber === 5){
        alert("You lost! Better luck next time.")
        reset();
    }
}


function playerWins (){
    ++playerWinsNumber;
    playerScore.innerText = "Player Score is: " + playerWinsNumber;
    }

function computerWins (){
    ++computerWinsNumber;
    computerScore.innerText = "Computer Score is: " + computerWinsNumber;
    }

function tieWins (){
    ++tieNumber;
    tieScore.innerText = "Tied Score is: " + tieNumber;
    }


function reset(){
    computerScore.innerText = "Computer Score is: 0";
    playerScore.innerText = "Player Score is: 0";
    tieScore.innerText = "Tied Score is: 0";
    playerWinsNumber = 0;
    computerWinsNumber = 0;
    tieNumber = 0;
}





// THIS IS OLD CODE THAT I FIRST USED IN THE ROCK PAPER SCISSORS PROJECT THAT I HAVE HERE FOR REFERENCE ONLY

//This component will store the randomly selected string from rockPaperScissorsArray allowing the use of it for the future.


//The game() function includes a for loop that will run the playRound 5 different times. Each run will determine a winner of the round. The winner is then tallied to determine who has the most wins in a best of five match.. 
// function game () {
//     let playerTally = 0;
//     let computerTally = 0;
//     for(let i=0; i<5; i++){
//         let computerSelection = getComputerChoice();
        
//         let result=playRound.call(this, playerSelection, computerSelection);

//         console.log("Player Selection" + ": " + playerSelection + ", ", "Computer Selection" + ": " +computerSelection+ ", ", result);
        
// // The if else statement tallies the wins of the user and the wins of the computer for the five game match. 
//         if (result==="You win! Scissors beats Paper" || result==="You win! Paper beats Rock" || result==="You win! Rock beats Scissors"){
//             playerTally +=1; 
//         }else if (result==="You lose! Scissors beats Paper" || result==="You lose! Paper beats Rock" || result==="You lose! Rock beats Scissors"){
//             computerTally+=1;
//         }
//     }   

// The if else statement compares the playerTally to the computerTally to determine the winner of the five game match. 
//     console.log("Player Tally: " + playerTally, "Computer Tally: " +computerTally);
// if (playerTally>computerTally){
//         console.log("You win the best of five match! "+ playerTally + " to "+computerTally);
// }else if (computerTally>playerTally){
//         console.log("You lose the best of five match! "+ playerTally + " to "+computerTally);
// }else {
//             console.log("Best of five match is a tie! "+ playerTally + " to "+computerTally);
//      }     
//     }
// game() 