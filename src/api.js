const callApi = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Amazing Bowling Game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((resp) => resp.json())
    .then((json) => window.localStorage.setItem('bowlingMatch', json.result.split(' ')[3]));
}

const getScores = async (id) => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`)
    .then((response) => response.json())
    .then((json) => window.localStorage.setItem('playerScore', JSON.stringify(json.result)));
}

const newScores = async (name, points, id) => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score: points,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then(() => getScores(id));
}

export { callApi, newScores, getScores };