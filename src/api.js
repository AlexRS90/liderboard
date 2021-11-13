import { fillList, displayCofirmationMessage } from './list';//eslint-disable-line

const callApi = async () => {
  const call = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Amazing Bowling Game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await call.json();
  window.localStorage.setItem('bowlingMatch', data.result.split(' ')[3]);
};

const getScores = async (id) => {
  const player = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`);
  const arr = await player.json();
  fillList(arr.result);
};

const newScores = async (name, points, id) => {
  const submit = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score: points,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const message = await submit.json();
  displayCofirmationMessage(message.result);
};

export { callApi, newScores, getScores };