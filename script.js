let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Write your code below:
  let generateTarget = () => Math.floor(Math.random() * 10);
  
  let compareGuesses = (humanGuess, computerGuess, targetNumber) =>
    (Math.abs(targetNumber - humanGuess) <= Math.abs(targetNumber - computerGuess)) ;

  
  let updateScore = (winner) => (winner === 'human') ?  humanScore+=1 : computerScore+=1;
  
  function advanceRound () {
    currentRoundNumber+=1;
  }

  
