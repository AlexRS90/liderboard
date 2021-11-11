
async function callApi() {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    body: JSON.stringify({ 
      name: 'Amazing Bowling Game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => window.localStorage.setItem('bowlingMatch', json.result.split(' ')[3]));
}

 async function newScores(name, points, id) {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
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
  .then((json) => console.log(json));
}
export { callApi, newScores };