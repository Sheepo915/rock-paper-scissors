function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      return "You Win! Rock beats Scissors";
    } else if (computerSelection == "paper") {
      return "You Lose! Paper beats Rock";
    } else {
      return "Draw!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "You Win! Paper beats Rock";
    } else if (computerSelection == "scissors") {
      return "You Lose! Scissors beats Paper";
    } else {
      return "Draw!";
    }
  } else {
    if (computerSelection == "paper") {
      return "You Win! Scissors beats Paper";
    } else if (computerSelection == "Rock") {
      return "You Lose! Rock beats Scissors";
    } else {
      return "Draw!";
    }
  }
}

function getComputerChoice() {
  let computerChoice = Math.round(Math.random() * 3);
  console.log(computerChoice);
  if (computerChoice == 0) {
    return (computerChoice = "rock");
  } else if (computerChoice == 1) {
    return (computerChoice = "paper");
  } else {
    return (computerChoice = "scissors");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    var rock = document.querySelector("#rock");
    var paper = document.querySelector("#paper");
    var scissor = document.querySelector("#scissors");

    rock.addEventListener("click", () => {
      const playerSelection = "rock";
      let computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
    });
    paper.addEventListener("click", () => {
      const playerSelection = "paper";
      let computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
    });
    scissor.addEventListener("click", () => {
      const playerSelection = "scissors";
      let computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
    });
  }
}

game();
