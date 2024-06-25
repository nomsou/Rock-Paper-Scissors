const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

function playGame(playerChoice){
  //computer choice: random number between 0 through 2
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = ""
  // To check if computer choice is working
  // console.log(computerChoice);
  if(playerChoice === computerChoice){
    result = "IT'S A TIE!"
  }
  else{
    switch(playerChoice){
      case "rock":
        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}` ;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch(result){
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      break;
  }
}