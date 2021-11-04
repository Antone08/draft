baseURL = "http://localhost:4545/player"

const submitBtn = document.getElementById('button')
const inputField = document.querySelectorAll("input")
const createForm = document.querySelector('#create-form')

const playerContainer = document.querySelector('#players-container')


const playersCallback = ({ data: players }) => displayPlayers(players);

const errCallback = err => console.log(err);

const getAllPlayers = () => axios.get(baseURL).then(playersCallback).catch(errCallback);

const createPlayer = body => axios.post(baseURL, body).then(playersCallback).catch(errCallback);


let gName = document.getElementById('name')
let system = document.getElementById('console')
let game = document.getElementById('game')
let reason = document.getElementById('reason')

function submitHandler(evt) {
 evt.preventDefault();
 let gName = document.querySelector('#name').value
 let system = document.querySelector('#console').value
 let game = document.querySelector('#game').value
 let reason = document.querySelector('#reason').value

<<<<<<< HEAD
console.log(reason)
 let bodyObj = {
     gName,
     system,
     game, 
     reason
=======
//  clearPlayer()

 let name = document.querySelector('#name').value
 let console = document.querySelector('#console').value
 let game = document.querySelector('#game').value

 let bodyObj = {
     name,
     console,
     game
>>>>>>> ff6ec932b51e67adea1496f4f7a9205b30d6311f
 };
 console.log(bodyObj)
 createPlayerCard(bodyObj);
//  let inputs = document.querySelectorAll("input");
//  inputs.forEach((input) => (input.value = ""));
gName.value = ''
system.value = ''
game.value = ''
};
function createPlayerCard(data) {
<<<<<<< HEAD
    if(document.contains(document.getElementById("player-card"))){
        document.getElementById("player-card").remove()
    
    } 

    axios.post(`${baseURL}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })

=======
    // data.preventDefault()
>>>>>>> ff6ec932b51e67adea1496f4f7a9205b30d6311f
    const playerCard = document.createElement('div');
    playerCard.classList.add('player-card');
    playerCard.setAttribute('id','player-card')
    playerCard.innerHTML = `<p><b>Player Information:</b></p>
    <p class="gamer-name">Player Name: ${data.gName}</p>
    <p class="gamer-console">Preferred System: ${data.system}</p>
    <p class="gamer-game">Preferred Game Title: ${data.game}</p>
    <p class="gamer-reason">Reason for Being A Gamer: ${data.reason}</p>`
    

    playerContainer.appendChild(playerCard);
console.log('hey')
    gName.value = ''
    system.value = ''
    game.value = ''
    // reason.value = ''
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

<<<<<<< HEAD
createForm.addEventListener('submit', submitHandler);



=======
submitBtn.addEventListener('click', submitHandler);


// getAllPlayers()
>>>>>>> ff6ec932b51e67adea1496f4f7a9205b30d6311f
