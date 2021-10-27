const http = require('http')
const express = require('express')
const cors = require('cors')
const socketIO = require('socket.io')

const app = express()
const port = 4500 || process.env.port

app.get('/', (req, res) => {
  res.send('its working')
})

const server = http.createServer(app)

const io = socketIO(server)

io.on('connection', () => {
  console.log('new connection')
})

server.listen(port, () => {
  console.log(`server is working on ${port}`)
})
