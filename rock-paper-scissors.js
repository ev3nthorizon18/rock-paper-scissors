let playerSelection = prompt("Choose either Rock, Paper, or Scissors.").toLowerCase();
    if (playerSelection === 'rock') {
        console.log('Rock');
    }else if(playerSelection === 'paper'){
        console.log ('Paper');
    }else if(playerSelection === 'scissors'){
        console.log ('Scissors');
    }else{
        console.log('Not an Option');
    }
//computer will choose at random from the three choices(rock, paper, scissors).
let computerSelection = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    console.log(computerSelection[(Math.floor(Math.random()*computerSelection.length))]);
}
console.log(computerSelection[(Math.floor(Math.random()*computerSelection.length))]);

//Algorithm will run 5 different games and display the winner after each game. 
function playRound(playerSelection, computerSelection) {
    if ((playerSelection ==='Rock') && (computerSelection ==='Scissors')){
        return("You win! Rock beats Scissors");
    }else if((playerSelection ==='Paper')&& (computerSelection ==='Scissors')){
        return("You lose! Scissors beats Paper");
    }else if((playerSelection ==='Scissors') && (computerSelection ==='Rock')){
        return("You lose! Rock beats Scissors");
    }else if((playerSelection ==='Rock') && (computerSelection ==='Paper')){
        return("You lose! Paper beats Rock");
    }else if((playerSelection ==='Paper') && (computerSelection ==='Rock')){
        return("You win! Paper beats Rock");
    }else if((playerSelection ==='Scissors') && (computerSelection ==='Paper')){
        return("You win! Scissors beats Paper");
    }else {
        return("Game is a tie");
    }
 }

console.log(playRound(playerSelection, compChoice));
