export default {
  flag: "Flag",
  quiz: "Quiz",
  homeLetsGo: "Let's go!",
  name: "Name",
  numberOfRounds: "Number of rounds",
  userInputScreenHint:
    "Hey Stranger! Pick a name and choose a number of rounds to play:",
  startQuiz: "Start quiz",
  correct: "Correct!",
  wrong: "Wrong...",
  congratulations: "Congratulations! You finished the quiz!",
  yourScore: "Your score:",
  questionsSeparately: "Your answers:",
  home: "Home",
  returnToHome: "If you want to play again, click this button:",
  next: "Next",
  nameErrorText: "\nName cannot be empty\n",
  roundsErrorText: "Number of rounds must be between 1 and 99",
  alertErrorText: "Something is not quite right...",
  hello: "Hello",
  startQuizHint(numberOfRounds) {
    return (
      "You decided to play " +
      numberOfRounds +
      " rounds of the quiz.\n\nIn each round you will be presented with the flag and the name of the country.\n\nYour task is to determine whether the flag corresponds to the country.\n\nGood luck!"
    );
  },
  allDone: "Congrats! All done!",
  endOfQuizText:
    "That's the end of the quiz.\n\nTo see your results, click the button below:",
  seeResult: "See result",
};
