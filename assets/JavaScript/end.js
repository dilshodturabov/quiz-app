const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const finalLevel = document.getElementById('finalLevel');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const recentScore = parseInt(mostRecentScore);

const BEGINNEER = 'BEGINNER';
const ELEMENTARY = "ELEMENTARY";
const PRO_ELEMENTARY = "PRO-ELEMENTARY";
const INTERMEDIATE = "INTERMEDIATE";
const PRO_INTERMEDIATE = "PRO-INTERMEDIATE";

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

if (recentScore > 10) {
  finalLevel.innerText = ELEMENTARY;
} else if (recentScore > 5) {
  finalLevel.innerText = BEGINNEER;
}

finalScore.textContent = `Your score is ${mostRecentScore}`;

username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value;
})
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
  window.location.assign('../../index.html');
}