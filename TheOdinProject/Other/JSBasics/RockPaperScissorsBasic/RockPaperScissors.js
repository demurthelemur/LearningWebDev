const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

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

function playGame() {
  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt("Please enter your choice");
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    if (result === "Win") {
      playerScore++;
    } else if (result === "Loss") {
      computerScore++;
    } else {
      i--;
    }
  }
  if (playerScore === 5) {
    alert("Player has Won");
  } else {
    alert("Player has Lost");
  }
}

playGame();
