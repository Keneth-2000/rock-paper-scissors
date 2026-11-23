//===================================================================================
// ROCK PAPER SCISSORS - Console version
// TOP - foundations
//===================================================================================

// Computer choices
function getComputerChoice() {
  const choices = Math.floor(Math.random() * 3);
  if (choices === 0) {
    return "rock";
  } else if (choices === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Human choices
function getHumanChoice() {
  return prompt("rock, paper or scissors ?");
}

// Full game logic (5 rounds)
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (!humanChoice) {
      console.log("No input provided. Round skipped.");
      return;
    }

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(`Game over! You win (${humanScore} to ${computerScore}).`);
  } else if (computerScore > humanScore) {
    console.log(
      `Game over! Computer wins (${computerScore} to ${humanScore}).`,
    );
  } else {
    console.log(`Game over! It's a tie (${humanScore} to ${computerScore}).`);
  }
}

playGame();
