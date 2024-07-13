//Global Variables
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

//Query Selectors
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");
const playerScoreBoard = document.querySelector("#playerScore");
const computerScoreBoard = document.querySelector("#computerScore");
const computerChoiceText = document.querySelector("#computerChoice");

rockButton.addEventListener("click", () => {
  playGame("rock");
  console.log("Button Pressed");
});

paperButton.addEventListener("click", () => {
  playGame("paper");
  console.log("Button Pressed");
});

scissorButton.addEventListener("click", () => {
  playGame("scissor");
  console.log("Button Pressed");
});

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice == "rock" && computerChoice == "rock") {
    return "Draw";
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    return "Loss";
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    return "Win";
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    return "Win";
  } else if (playerChoice == "paper" && computerChoice == "paper") {
    return "Draw";
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    return "Loss";
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    return "Loss";
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    return "Win";
  } else if (playerChoice == "scissors" && computerChoice == "scissors") {
    return "Draw";
  }
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  computerChoiceText.textContent = `Computer's Choice: ${computerChoice}`;
  const result = playRound(playerChoice, computerChoice);
  if (result === "Win") {
    playerScore++;
    playerScoreBoard.textContent = `Player Score: ${playerScore}`;
  } else if (result === "Loss") {
    computerScore++;
    computerScoreBoard.textContent = `Computer Score: ${computerScore}`;
  }
  if (playerScore === 5) {
    alert("Player has Won");
  } else if (computerScore === 5) {
    alert("Player has Lost");
  }
}
