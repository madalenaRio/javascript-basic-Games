    //generating a random number
    let randomNumber = Math.floor(Math.random() * 17) + 1;
    //constants for storing numbers so we can insert them in the "<div>paragraphs" on the HTML tree
    const guesses = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult');
    const lowOrHi = document.querySelector('.lowOrHi');
    //constants for storing the input guesses and submit button actions
    const guessSubmit = document.querySelector('.guessSubmit');
    const guessField = document.querySelector('.guessField');
    // variables to store the number of times a user can play
    let guessCount = 1;
    let resetButton;


    function checkGuess() {
      const userGuess = Number(guessField.value); //fetches the guess number
      if (guessCount === 1) { // if condition to verify if the attempt is the player first guess
        guesses.textContent = 'Previous guesses: ';
      }
      guesses.textContent += userGuess + ' '; // appending the guess to previous ones + the empty brackets is to add a blank space between each guess number shown.

      if (userGuess === randomNumber) { // if the guess number is equal to the random generated one the player wins!
        lastResult.textContent = 'Awesome! Your number ' +'['+ Number(guessField.value) +' ]' + ' was correct You can be named many things, hungry not being one of them.';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
      } else if (guessCount === 3) { // else it will check if the user has reached its last turn
        lastResult.textContent = 'Bummer... You guessed ' + Number(guessField.value) + ' and the secret number was ' + randomNumber;
        lowOrHi.textContent = '';
        setGameOver();
      } else { // or else it will check if player has more guesses left
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
          lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
          lowOrHi.textContent = 'Last guess was too high!';
        }
      }
      // sets the game ready for the player next guess attempt
      guessCount++; // to increment another turn by 1
      guessField.value = ''; // to empty the value form field
      guessField.focus(); //
    }

    //now we need to call the function with an event listener set to react when the guess button is clicked 

    guessSubmit.addEventListener('click', checkGuess);

    //now we must set a game over function to complete the "game cycle"

    function setGameOver() {
      //fetches the element where we will create a startAgain button
      const resultParas = document.getElementById('resultParas')
      //to stop user from playing more  after its turn is over
      guessField.disabled = true;
      guessSubmit.disabled = true;
      //creates a new button and adds it to the HTML in order to allow user to begin a new game
      const resetButton = document.createElement('button');
      resetButton.setAttribute('id', 'resetButton');
      resetButton.style.width = '50%';
      resetButton.innerHTML = 'Start new game';
      resultParas.append(resetButton);
      //sets an event listener on our new button so when its clicked a new function resetGame()runs
      resetButton.addEventListener('click', resetGame);
    }

    //now we add a sort of reset the game cicle:
    // resseting all the code to how it was at the start of the game, so the player can play again.

    function resetGame() {
      location.reload();

    ///   --------------this code below did not work decide instead for a relaode method ----------------------/////
    
    //   //sets the guess count back to 1
    //   guessCount = 1;

    //   //Empties all the text out of the information paragraphs.
    //   const resetParas = document.querySelectorAll('.resultParas');
    //   for (const resetPara of resetParas) {
    //     resetPara.textContent = '';
    //   }

    //   //Removes the reset button from our code.
    //   resetButton.parentNode.removeChild(resetButton);

    //   //Enables the form elements, and empties and focuses the text field, ready for a new guess to be entered.
    //   guessField.disabled = false;
    //   guessSubmit.disabled = false;
    //   guessField.value = '';
    //   guessField.focus();

    //   //Removes the background color from the lastResult paragraph.
    //   lastResult.style.backgroundColor = 'white';

    //   //Generates a new random number so that you are not just guessing the same number again!
    //   randomNumber = Math.floor(Math.random() * 17) + 1;
    }

    // toturial followed : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash