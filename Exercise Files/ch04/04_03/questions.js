const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with node js? "
];

const collectAnswers = (questions, done) => {
  // create an array of answers
  const answers = [];
  // destructure firstQuestion array and populate it with questions
  const [firstQuestion] = questions;
  // done answers

  const questionAnswered = (answer) => {
    answers.push(answer);
    // if the length of the answers array is shorter than the length of the questions array
    if (answers.length < questions.length) {
      // ask the next question in the questions array
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  }

  rl.question(firstQuestion, questionAnswered);
};

collectAnswers(questions, answers => {
  console.log("Thank you for your answers.");
  console.log(answers);
  process.exit();
});
