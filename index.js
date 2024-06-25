const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){
  //computer choice: random number between 0 through 2
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = ""
  // To check if computer choice is working
  console.log(computerChoice);
}