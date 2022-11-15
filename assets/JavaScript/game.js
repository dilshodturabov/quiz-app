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
    question: 'Choose the correct answer? <br/><hr/> We … American.',
    choice1: 'not',
    choice2: 'not are',
    choice3: 'aren\'t',
    choice4: "isn’t",
    answer: 3,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> This is our new teacher … name is Mark.",
    choice1: "His",
    choice2: "Her",
    choice3: "Its",
    choice4: "He",
    answer: 1,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> He … the newspaper every day.",
    choice1: "read",
    choice2: "reads",
    choice3: "doesn’t reads",
    choice4: "don’t reads",
    answer: 2,
  },
  {
    question:
      "Choose the correct answer,<br/><hr/> British people … tea with milk.",
    choice1: "to drink",
    choice2: "drink ",
    choice3: "drinks ",
    choice4: "are  drink",
    answer: 2,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/>  … you like Chinese food? ",
    choice1: "Do ",
    choice2: "Does ",
    choice3: "Are ",
    choice4: "Is",
    answer: 1,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> It’s ten … seven.",
    choice1: "to ",
    choice2: "for ",
    choice3: "at",
    choice4: "in",
    answer: 1,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> I … to classical music.",
    choice1: "never to listen",
    choice2: "listen never",
    choice3: "never listen",
    choice4: "don’t never listen",
    answer: 3,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> I can’t see. Where are my … ?",
    choice1: "glasses ",
    choice2: "stamps",
    choice3: "keys",
    choice4: "lipsticks",
    answer: 1,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> I like … in the morning.",
    choice1: "that I work",
    choice2: "working",
    choice3: "work",
    choice4: "to be work",
    answer: 2,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> This isn’t my money. It’s … .",
    choice1: "to you",
    choice2: "the yours",
    choice3: "your",
    choice4: "yours",
    answer: 4,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> There isn’t … pasta in the kitchen.",
    choice1: "some ",
    choice2: "many",
    choice3: "a",
    choice4: "any",
    answer: 4,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> The elephant is … land animal in the world.",
    choice1: "the bigger",
    choice2: "the most big",
    choice3: "biggest ",
    choice4: "the  biggest",
    answer: 4,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> You can … my surprise when I heard the news.",
    choice1: "suppose",
    choice2: "think",
    choice3: "imagine",
    choice4: "belive",
    answer: 3,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> The judge said that he was … by the high standards of performance by the riders.",
    choice1: "excited",
    choice2: "impressed",
    choice3: "interested",
    choice4: "belive",
    answer: 2,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/>  … yesterday?",
    choice1: "You studied",
    choice2: "Did you studied",
    choice3: "Did you study",
    choice4: "Studied you",
    answer: 3,
  },
  {
    question:
      "Choose the correct answer?</br><hr/> It … when they went out.",
    choice1: "has rained",
    choice2: "was raining",
    choice3: "is raining",
    choice4: "was to rain",
    answer: 2,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> That’s the hotel … we had lunch.",
    choice1: "what ",
    choice2: "where",
    choice3: "that",
    choice4: "which",
    answer: 2,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> Can you look … my dog this weekend? ",
    choice1: "with",
    choice2: "away",
    choice3: "up",
    choice4: "after",
    answer: 4,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> The judge said that he was … by the high standards of performance by the riders.",
    choice1: "excited",
    choice2: "impressed",
    choice3: "interested",
    choice4: "imposed",
    answer: 2,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> Tell your brother to come … because it’s going rain in a minute or two.",
    choice1: "indoors  ",
    choice2: "outdoors  ",
    choice3: "within",
    choice4: "homewards",
    answer: 1,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> I cut my finger on a rusty tin and it became badly … .",
    choice1: "infected",
    choice2: "affected",
    choice3: "effected",
    choice4: "diseased",
    answer: 1,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> The local tourist bureau will send you … about hotels in the area.",
    choice1: "knowledge",
    choice2: "information",
    choice3: "news",
    choice4: "notice",
    answer: 2,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> The use of plastics for shoes … of leather has ruined shoe repairing as a business.",
    choice1: "although",
    choice2: "as well",
    choice3: "instead",
    choice4: "outside",
    answer: 3,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> My father … be a builder.",
    choice1: "used to",
    choice2: "was",
    choice3: "use to",
    choice4: "did use to",
    answer: 1,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> I haven’t tidied my office … .",
    choice1: "just",
    choice2: "already",
    choice3: "yet",
    choice4: "since",
    answer: 3,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> I can sing, but not as … as my sister.",
    choice1: "well",
    choice2: "good",
    choice3: "best",
    choice4: "better",
    answer: 2,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> That’s my money! Give … !",
    choice1: "back",
    choice2: "it back",
    choice3: "back it",
    choice4: "it",
    answer: 2,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> Be quiet! It’s rude to … people when they are speaking.",
    choice1: "interfere",
    choice2: "interrupt",
    choice3: "prevent",
    choice4: "introduce",
    answer: 2,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> She looked everywhere for her book but … had to return home without it.",
    choice1: "lastly",
    choice2: "at the end",
    choice3: "in the end",
    choice4: "at the last",
    answer: 3,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> They won’t … use their mobiles.",
    choice1: "can",
    choice2: "be able",
    choice3: "be able to",
    choice4: "can to",
    answer: 3,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> I’m sorry I’m late, I was held up in a traffic … .",
    choice1: "block",
    choice2: "crush",
    choice3: "jam",
    choice4: "group",
    answer: 3,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> I studied chemistry at … university.",
    choice1: "the",
    choice2: "-",
    choice3: "a",
    choice4: "an",
    answer: 2,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> I have a bath … I get home.",
    choice1: "as soon as",
    choice2: "as soon",
    choice3: "so soon that",
    choice4: "when that",
    answer: 1,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> Now that he has retired,  he lives partly on his pension and partly on the … on his post office savings account.",
    choice1: "income",
    choice2: "wages",
    choice3: "salary",
    choice4: "interest",
    answer: 4,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> I don’t like … coffee or tea.",
    choice1: "neither",
    choice2: "or",
    choice3: "both",
    choice4: "either",
    answer: 4,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> What … do tomorrow?",
    choice1: "are you going",
    choice2: "you going",
    choice3: "are you going to",
    choice4: "do you go to",
    answer: 3,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> Our students take their responsibilities very … .",
    choice1: "considerably",
    choice2: "thoroughly",
    choice3: "seriously",
    choice4: "strongly",
    answer: 3,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> I always … .",
    choice1: "work hard",
    choice2: "hard work",
    choice3: "hardly work",
    choice4: "work hardly",
    answer: 1,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> I’m really tired – I only got … hours’ sleep.",
    choice1: "not many",
    choice2: "a few",
    choice3: "a little",
    choice4: "few",
    answer: 3,
  },
  {
    question:
      "Choose the correct answer?<br/><hr/> Sally married … the Kennedy family.",
    choice1: "with",
    choice2: "so",
    choice3: "into",
    choice4: "among",
    answer: 3,
  },
];

const CORRECT_BONUS = 1;
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
  question.innerHTML = currentQuestion.question;
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
}, 1000)