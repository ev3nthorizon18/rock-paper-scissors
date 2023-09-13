const playerSelection = prompt("Choose either Rock, Paper, or Scissors.").toLowerCase();
    if (playerSelection === "rock") {
        console.log("Rock");
    }else if(playerSelection === "paper"){
        console.log ("Paper");
    }else if(playerSelection === "scissors"){
        console.log ("Scissors");
    }else{
        console.log("Not an Option");
    }
//computer will choose at random from the three choices(rock, paper, scissors).


function getComputerChoice () {
    const rockPaperScissorsArray = ["Rock", "Paper", "Scissors"];
    const random = (Math.floor(Math.random()*rockPaperScissorsArray.length));
    return rockPaperScissorsArray[random]
}


//Algorithm will run paper rock scissors and display the winner after each game. 
function playRound(playerSelection, computerSelection) {
    if (playerSelection ==="rock" && computerSelection ==="Scissors"){
        return("You win! Rock beats Scissors");
    }else if(playerSelection ==="paper"&& computerSelection ==="Scissors"){
        return("You lose! Scissors beats Paper");
    }else if(playerSelection ==="scissors" && computerSelection ==="Rock"){
        return("You lose! Rock beats Scissors");
    }else if(playerSelection ==="rock" && computerSelection ==="Paper"){
        return("You lose! Paper beats Rock");
    }else if(playerSelection ==="paper" && computerSelection ==="Rock"){
        return("You win! Paper beats Rock");
    }else if(playerSelection ==="scissors" && computerSelection ==="Paper"){
        return("You win! Scissors beats Paper");
    }else {
        return("Game is a tie");
    }
}

const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
/*function game () {
    for(let i=0; i<5; i++){
        let result=playRound.call(this, playerSelection, computerSelection)
        console.log(result)
    }
}
game()
 */