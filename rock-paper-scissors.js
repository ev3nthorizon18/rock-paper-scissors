//will create a rock, paper, and scissors game

//Algorithm must accept user input without case sensitivity.
//computer will choose at random from the three choices(rock, paper, scissors).
//Algorithm will run 5 different games and display the winner after each game. 


 //The game will require a user input of the three choices (rock, paper, scissors).
playerSelection = prompt("Choose either Rock, Paper, or Scissors.");

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        return ('Rock');
    }else if(playerSelection === 'Paper'){
        return ('Paper');
    }else{
        return('Scissors');
    }
}


 function getComputerChoice (Rock, Paper, Scissors) {}

   
  
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

