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
  userInput.value = ''; // setting the userInput value i.e the value entereed by user to again empty value so user can enter new value to guess
  guessSlot.innerHTML += `${guess}, `; // enterting the guesses me made into html 
  numGuess++;  // increasing the count of no of guesses 
  remaining.innerHTML = `${11 - numGuess} `; // remaning no of guesses left by substracting numguess from 11 
}
 
// this function will display the low or high message on our DOM
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// function ending game 
function endGame() {
  userInput.value = '';  // setting the userInput value to zero 
  userInput.setAttribute('disabled', '');  // setting the attribute to disabled for userInput so when we have made our 10 guesses or we get the correct guess then it wont accept any new more userInput values from sumbit button and the submit button  wont work
  p.classList.add('button'); // adding another button so start new game so when we click on it we can end the game and at the same time start a new one or if we guessed the correct answer or 10 guesses are over then we can click on new game button and start new game 
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; 
  startOver.appendChild(p); // adding the startOver text into our p tag
  playGame = false; // stopping the game 
  newGame(); // and then running the new game 
}

// fucntion for starting new game 
function newGame() {
  const newGameButton = document.querySelector('#newGame'); // selecting the new game button we made in endgame function
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p); // reseting the start over text in the para tag 

    playGame = true; // setting the playgame to true again 
  });
}

