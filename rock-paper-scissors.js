const playerSelection = prompt("Choose either Rock, Paper, or Scissors.").toUpperCase();
   
//computer will choose at random from the three choices(rock, paper, scissors).


function getComputerChoice () {
    const rockPaperScissorsArray = ["ROCK", "PAPER", "SCISSORS"];
    const random = (Math.floor(Math.random()*rockPaperScissorsArray.length));
    return rockPaperScissorsArray[random]
}

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
//Algorithm will run paper rock scissors and display the winner after each game. 


let computerSelection = getComputerChoice();


function game () {
    for(let i=0; i<5; i++){
        let computerSelection = getComputerChoice();
        let result=playRound.call(this,playerSelection, computerSelection);
        if (result==="You win!")
        console.log("Player Selection" + ": " + playerSelection + ", ", "Computer Selection" + ": " +computerSelection+ ", ", result)
    }
}
game()
 