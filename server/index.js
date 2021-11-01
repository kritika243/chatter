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

const users = [{}]

const server = http.createServer(app)

const io = socketIO(server)

io.on('connection', (socket) => {
  console.log('new connection')

  socket.on('joined', ({ user }) => {
    users[socket.id] = user
    console.log(`${user} has joined`)
    socket.broadcast.emit('userJoined', {
      user: 'Admin',
      message: `${users[socket.id]} has joined`,
    })
    socket.emit('welcome', {
      user: 'Admin',
      message: `Welcome to the chat, ${users[socket.id]}`,
    })
  })

  socket.on('disconnect', () => {
    socket.broadcast.emit('leave', {
      user: 'Admin',
      message: `${users[socket.id]} has left`,
    })
    console.log('user left')
  })
})

server.listen(port, () => {
  console.log(`server is working on ${port}`)
})
