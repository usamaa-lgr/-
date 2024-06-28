document.addEventListener("DOMContentLoaded", function () {
  const guessInput = document.getElementById("guessInput");
  const guessButton = document.getElementById("guessButton");
  const resultMessage = document.getElementById("resultMessage");
  const restartButton = document.getElementById("restartButton");

  let randomNumber = Math.floor(Math.random() * 100) + 1;

  guessButton.addEventListener("click", function () {
    const userGuess = parseInt(guessInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      resultMessage.textContent = "Please enter a number between 1 and 100.";
      resultMessage.style.color = "red";
    } else if (userGuess === randomNumber) {
      resultMessage.textContent = `Congratulations! You guessed the right number: ${randomNumber}`;
      resultMessage.style.color = "green";
      guessButton.style.display = "none";
      restartButton.style.display = "block";
    } else if (userGuess < randomNumber) {
      resultMessage.textContent = "Too low! Try again.";
      resultMessage.style.color = "orange";
    } else if (userGuess > randomNumber) {
      resultMessage.textContent = "Too high! Try again.";
      resultMessage.style.color = "orange";
    }
  });

  restartButton.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessInput.value = "";
    resultMessage.textContent = "";
    guessButton.style.display = "block";
    restartButton.style.display = "none";
  });
});
