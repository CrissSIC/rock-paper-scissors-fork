function computerPlayer() {
  let randomChoice = ["rock", "paper", "scissors"];
  return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

let computerWins = 0;
let playerWins = 0;

function playRound(playerSelection) {
  let computerSelection = computerPlayer();

  let roundWinner = "";
  if (computerSelection == playerSelection) {
    roundWinner = "It's a tie!";
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    computerWins = ++computerWins;
    roundWinner = "You lose!Computer wins!";
    document.getElementById("computerScore").innerHTML =
      "Computer: " + computerWins;
    if (computerWins == 5) {
      document.getElementById("allButtons").style.display = "none";
      document.getElementById("choiceMessages").style.display = "none";
      document.getElementById("restart").style.display = "block";
      roundWinner =
        "Computer is first to 5 wins. Press restart for a new game.";
    }
  } else {
    playerWins = ++playerWins;
    roundWinner = "You win!Computer loses!";
    document.getElementById("playerScore").innerHTML = "Player: " + playerWins;
    if (playerWins == 5) {
      document.getElementById("allButtons").style.display = "none";
      document.getElementById("choiceMessages").style.display = "none";
      document.getElementById("restart").style.display = "block";
      roundWinner = "Player is first to 5 wins. Press restart for a new game.";
    }
  }
  document.getElementById("roundWinner").innerHTML = roundWinner;
  return;
}

let rock = document.getElementById("rock");
rock.addEventListener("mousedown", function () {
  playRound("rock");
});
let paper = document.getElementById("paper");
paper.addEventListener("mousedown", function () {
  playRound("paper");
});
let scissors = document.getElementById("scissors");
scissors.addEventListener("mousedown", function () {
  playRound("scissors");
});
document.getElementById("restart").addEventListener("click", function () {
  document.getElementById("allButtons").style.display = "flex";
  document.getElementById("choiceMessages").style.display = "flex";
  document.getElementById("restart").style.display = "none";
  computerWins = 0;
  playerWins = 0;
  document.getElementById("playerScore").innerHTML = "Player: " + playerWins;
  document.getElementById("computerScore").innerHTML =
    "Computer: " + playerWins;
  document.getElementById("roundWinner").innerHTML =
    "Let's see who gets first to 5 wins!";
});
