//will create a rock, paper, and scissors game

//Algorithm must accept user input without case sensitivity.
//computer will choose at random from the three choices(rock, paper, scissors).
//Algorithm will run 5 different games and display the winner after each game. 


 //The game will require a user input of the three choices (rock, paper, scissors).
playerSelection = prompt("Choose either Rock, Paper, or Scissors.");
    if (playerSelection.toLowerCase() === 'rock') {
        console.log('Rock');
    }else if(playerSelection.toLowerCase() === 'paper'){
        console.log ('Paper');
    }else if(playerSelection.toLowerCase() === 'scissors'){
        console.log ('Scissors');
    }else{
        console.log('Not an Option');
    }

computerSelection = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    console.log(computerSelection[(Math.floor(Math.random()*computerSelection.length))]);
}

function playRound(playerSelection, computerSelection) {
}
  
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

