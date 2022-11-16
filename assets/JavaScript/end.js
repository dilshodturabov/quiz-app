const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const finalLevel = document.getElementById('finalLevel');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const recentScore = parseInt(mostRecentScore);
const end = document.getElementById('end');
const loader = document.getElementById("loader");

const BEGINNEER = 'BEGINNER';
const ELEMENTARY = "ELEMENTARY";
const ADVANCED = "ADVANCED";
const INTERMEDIATE = "INTERMEDIATE";
const PRE_INTERMEDIATE = "PRO-INTERMEDIATE";

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
setTimeout(() => {
  end.classList.remove('hidden');
  loader.classList.add('hidden');
  if (recentScore >= 35) {
    finalLevel.innerText = ADVANCED;
  } else if (recentScore >= 30) {
    finalLevel.innerText = INTERMEDIATE;
  } else if (recentScore >= 23) {
    finalLevel.innerText = PRE_INTERMEDIATE;
  } else if (recentScore >= 15) {
    finalLevel.innerText = ELEMENTARY;
  } else {
    finalLevel.innerText = BEGINNEER;;
  }

  finalScore.textContent = `Your score is ${mostRecentScore}`;

  username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
  })
}, 3000)

saveHighScore = e => {
  console.log('clicked !');
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value
  };

  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign('/index.html');
}
