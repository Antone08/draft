const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const playerCtrl = require('./playerCtrl')

app.get('/player/', playerCtrl.getPlayer)
app.post('/player/', playerCtrl.addPlayer)



const port = 4545

app.listen(port, console.log(`Running up on ${port}!`))