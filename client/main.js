baseURL = "http://localhost:4545/player"

const name = document.getElementById('name')
const console = document.getElementById('console')
const game = document.getElementById('game')
const submitBtn = document.getElementById('button')

const inputField = document.querySelectorAll("input")
const createForm = document.querySelector('#create-form')


const playerContainer = document.querySelector('#players-container')


const playersCallback = ({ data: players }) => displayPlayers(players);

const errCallback = err => console.log(err);

const getAllPlayers = () => axios.get(baseURL).then(playersCallback).catch(errCallback);

const createPlayer = body => axios.post(baseURL, body).then(playersCallback).catch(errCallback);

function submitHandler(evt) {
 evt.preventDefault();

//  clearPlayer()

 let name = document.querySelector('#name').value
 let console = document.querySelector('#console').value
 let game = document.querySelector('#game').value

 let bodyObj = {
     name,
     console,
     game
 };

 createPlayer(bodyObj);
 name.value = ''
 console.value = ''
 game.value = ''

};


function createPlayerCard(data) {
    // data.preventDefault()
    const playerCard = document.createElement('div');
    playerCard.classList.add('player-card');
    playerCard.innerHTML = `<p><b>Player Information:</b></p>
    <p class="gamer-name">Player Name: ${data.name}</p>
    <p class="gamer-console">Console Name: ${data.console}</p>
    <p class="gamer-game">Game Name: ${data.game}</p>
    `

    playerContainer.appendChild(playerCard);
};

function clearPlayer() {
    playerContainer.innerHTML = ``
  };


// function getPlayer() {
//     clearPlayer()

//     axios.get(`${baseURL}/players`)
//     .then(function(res) {
//       for (let i = 0; i < res.data.length; i++) {
//         createPlayerCard(res.data[i])
//       }
//     })
//     .catch(err => console.log(err))
// };

function displayPlayers(arr) {
    playerContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPlayerCard(arr[i]);
    }
};

document.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.04;
  });

submitBtn.addEventListener('click', submitHandler);


// getAllPlayers()