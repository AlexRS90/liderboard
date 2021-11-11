import * as bowling from './api';

let bestScores = [];
let idMatch = '';

const playGame = () => {
  if (window.localStorage.getItem('bowlingMatch')) {
    idMatch = window.localStorage.getItem('bowlingMatch');
  } else {
    bowling.callApi();
    idMatch = window.localStorage.getItem('bowlingMatch');
  }
};

const fillList = () => {
  let newWinner = '';
  bestScores.forEach((winner) => {
    newWinner += `<li class="d-flex top-scores"><p>${winner.user}</p><p>${winner.score}</p></li>`;
  });
  document.querySelector('.best-scores').innerHTML = newWinner;
  playGame();
};

const submitBtn = document.querySelector('#send-new-score');
submitBtn.addEventListener('click', () => {
  const newPlayer = document.getElementById('new-player').value;
  const newScore = document.getElementById('new-score').value;
  if (newPlayer !== '' && newScore !== '') {
    bowling.newScores(newPlayer, newScore, idMatch);
    document.getElementById('new-player').value = '';
    document.getElementById('new-score').value = '';
  }
});

const dispScores = () => {
  bowling.getScores(idMatch);
  bestScores = JSON.parse(window.localStorage.getItem('playerScore'));
  fillList();
};

const displayScores = document.querySelector('#refresh');
displayScores.addEventListener('click', dispScores);

export { playGame, dispScores };