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

export default function fillList() {
  let newWinner = '';
  bestScores.forEach((winner) => {
    newWinner += `<li class="d-flex top-scores"><p>${winner.name}</p><p>${winner.score}</p></li>`;
  });
  document.querySelector('.best-scores').innerHTML = newWinner;
}