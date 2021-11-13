import * as bowling from './api';//eslint-disable-line

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

const fillList = (players) => {
  bestScores = players;
  let newWinner = '';
  bestScores.forEach((winner) => {
    newWinner += `<li class="d-flex top-scores"><p class="truncate">${winner.user}</p><p>${winner.score}</p></li>`;
  });
  document.querySelector('.best-scores').innerHTML = newWinner;
  playGame();
};

const submitBtn = document.querySelector('#new-player-form');
submitBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  const newPlayer = document.getElementById('new-player').value;
  const newScore = document.getElementById('new-score').value;
  bowling.newScores(newPlayer, newScore, idMatch);
  document.getElementById('new-player').value = '';
  document.getElementById('new-score').value = '';
});

const dispScores = () => {
  bowling.getScores(idMatch);
};

const displayCofirmationMessage = (message) => {
  if (message === 'Leaderboard score created correctly.') {
    document.querySelector('.message').classList.toggle('message-transition');
    setTimeout(() => {
      document.querySelector('.message').classList.toggle('message-transition');
    }, 3000);
  }
};

const displayScores = document.querySelector('#refresh');
displayScores.addEventListener('click', dispScores);

export { playGame, fillList, displayCofirmationMessage };