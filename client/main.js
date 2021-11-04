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

 let name = document.querySelector('#name')
 let console = document.querySelector('#console')
 let game = document.querySelector('#game')

 let bodyObj = {
     name: name.value,
     console: console.value,
     game: game.value
 };

 createPlayer(bodyObj);
 name.value = ''
 console.value = ''
 game.value = ''

};


function createPlayerCard(data) {
    const playerCard = document.createElement('div');
    playerCard.classList.add('player-card');
    playerCard.innerHTML = `<p><b>Player Information:</b></p>
    <p class="gamer-name">Player Name: ${data.name}</p>
    <p class="gamer-console">Console Name: ${data.console}</p>
    <p class="gamer-game">Game Name: ${data.game}</p>
    `

    playerContainer.appendChild(playerCard);
};

function displayPlayers(arr) {
    playerContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPlayerCard(arr[i]);
    }
};

createForm.addEventListener('submit', submitHandler);


getAllPlayers()