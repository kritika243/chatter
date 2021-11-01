const http = require('http')
const express = require('express')
const cors = require('cors')
const socketIO = require('socket.io')

const app = express()
const port = 4500 || process.env.port

app.use(cors())

app.get('/', (req, res) => {
  res.send('its working')
})

const server = http.createServer(app)

const io = socketIO(server)

io.on('connection', (socket) => {
  console.log('new connection')

  socket.on('joined', ({ user }) => {
    console.log(`${user} has joined`)
  })
})

server.listen(port, () => {
  console.log(`server is working on ${port}`)
})
