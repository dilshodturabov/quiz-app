const question = document.getElementById('quesiton');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const game = document.getElementById('game');
const loader = document.getElementById('loader');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript??',
    choice1: '<script>',
    choice2: '<javascript>',
    choice3: '<js>',
    choice4: '<scripting>',
    answer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3,
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4,
  },
];

const CORRECT_BONUS = 10;
const MAX_QUESTION = questions.length;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTION) {
    localStorage.setItem('mostRecentScore', score);
    return window.location.assign(".././pages/end.html");
  }
  questionCounter++;
  progressText.innerText = `Quesiton ${questionCounter}/${MAX_QUESTION}`;

  // UPDATE PROGRESSBAR
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTION) * 100}%`;

  const quesitonIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[quesitonIndex];
  question.innerText = currentQuestion.question;
  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number]
  });

  availableQuestions.splice(quesitonIndex, 1);

  acceptingAnswers = true;
}

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000)

  })
})

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
}
setTimeout(() => {
  game.classList.remove('hidden');
  loader.classList.add('hidden');
  startGame();
}, 250)