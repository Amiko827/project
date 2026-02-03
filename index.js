let secretWord = "cat";
let guess = "";

while (guess !== secretWord) {
  guess = prompt("Guess the word:");

  if (guess !== secretWord) {
    alert(" Incorrect, try again!");
  }
}

alert(" Correct! You guessed the word.");
