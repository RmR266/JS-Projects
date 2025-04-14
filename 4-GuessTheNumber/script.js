// Getting the random number that we will try to guess and making it a +ve integer between 1 to 100
let randomNumber = parseInt(Math.random() * 100 + 1); //multipling with 100 so between 1 to 100 and then adding plus 1 so we dont get 0 and converting it into integer so we dont get decimal values

const submit = document.querySelector('#subt'); // taking the submit button to submit the guess made by user
const userInput = document.querySelector('#guessField'); // taking the userInput guess 
const guessSlot = document.querySelector('.guesses'); // all the previous guesses 
const remaining = document.querySelector('.lastResult'); // how many remaining guesses left 
const lowOrHi = document.querySelector('.lowOrHi'); // is our guess low or high than the answer
const startOver = document.querySelector('.resultParas'); //if we used all our guesses then startOver text

const p = document.createElement('p'); //creating a para element that we can enter in our html later

let prevGuess = []; // array to hold our previous gueses
let numGuess = 1;  // variable to storre our guesses count and intially it is 1 

let playGame = true; //condition on which the game run and intially its set to true so when this is false , the game stops 

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value); //preventing default form behaviour and then taking the userInput value submitted in the form and storring it as guess
    //console.log(guess);
    validateGuess(guess); // and then passing the guess value into validateGuess function to check if its acceptable guess value or not 
  });
}

// fucntion to check if the value of guess entered by user is validate
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess); // pushing acceptable guess values into array prevGuess
    // so when number of guesses reach 11 game over message 
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`); // displaying the message game over with the correct answer 
      endGame(); // then ending the game 
    } else {
      displayGuess(guess); // displaying the guess values 
      checkGuess(guess);  // checking if the guess values is right or not 
    }
  }
}

// checking if the guess entered by user is correct or not
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}
 
// this function wll display all the Dom result of our guess on our index html page
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}
 
// this function will display the low or high message on our DOM
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// function ending game 
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

// fucntion for starting new game 
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

