document.getElementById('start-button').addEventListener('click', function() {
  // Generate a random number between 1 and 10
  const secretNumber = Math.floor(Math.random() * 10) + 1;

  // Variable to store the player's guess
  let guess = 0;
  // Variable to check if the player has won
  let hasWon = false;

  // Use a for loop to give the player 5 attempts
  for (let attempts = 1; attempts <= 5; attempts = attempts + 1) {
    // Ask the player for a guess
    let input = prompt('Guess a number between 1 and 10:');
    // Convert the input to a number
    guess = Number(input);

    // Check if the guess is correct
    if (guess === secretNumber) {
      // Show a congratulatory message with the number of attempts
      document.getElementById('message').textContent =
        `🎉 Congratulations! You guessed it in ${attempts} attempts.`;
      hasWon = true;
      // Stop the loop if guessed correctly
      break;
    } else if (guess < secretNumber) {
      // Give a hint if the guess is too low
      alert('Too low! Try again.');
    } else if (guess > secretNumber) {
      // Give a hint if the guess is too high
      alert('Too high! Try again.');
    }
    // The loop will continue until the player runs out of attempts
  }

  // If the player did not guess the number, show game over message
  if (!hasWon) {
    document.getElementById('message').textContent =
      `❌ Game over! The number was ${secretNumber}.`;
  }
});