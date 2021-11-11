import * as bowling from "./api";

const bestScores = [
  {
    name: 'Alejandro',
    score: 100,
  },
  {
    name: 'Matias',
    score: 200,
  },
  {
    name: 'Katia',
    score: 150,
  },
  {
    name: 'Janeth',
    score: 500,
  },
];

let idMatch = '';

const playGame = () => {
  if(window.localStorage.getItem('bowlingMatch')) {
    idMatch = window.localStorage.getItem('bowlingMatch');
  } else {
    bowling.callApi();
    idMatch = window.localStorage.getItem('bowlingMatch');
  }
};

const fillList = () => {
  let newWinner = '';
  bestScores.forEach((winner) => {
    newWinner += `<li class="d-flex top-scores"><p>${winner.name}</p><p>${winner.score}</p></li>`;
  });
  document.querySelector('.best-scores').innerHTML = newWinner;
  playGame();
};

const submitBtn = document.querySelector('#send-new-score');
submitBtn.addEventListener('click', (event) => {
  const newPlayer = document.getElementById('new-player').value;
  const newScore = document.getElementById('new-score').value;
  if (newPlayer !== '' && newScore !== '') {
    bowling.newScores(newPlayer, newScore, idMatch);
  }
});

export default fillList;