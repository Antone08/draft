const players = require('./players.json')
let globalId = players[players.length - 1].id + 1

module.exports = {
    getPlayer : (req, res) => {
        res.status(200).send(players)
    },

    addPlayer: (req, res) => {
        const {name, console, game} = req.body

        const newPlayer = {
            name, 
            console, 
            game,
            id: globalId
        }

        players.push(newPlayer);
        res.status(200).send(players);
        globalId++;
    }
}