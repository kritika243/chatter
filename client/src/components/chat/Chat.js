import React, { useEffect } from 'react'
import { user } from '../join/Join'
import socketIO from 'socket.io-client'

const ENDPOINT = 'http://localhost:4500/'

const Chat = () => {
  const socket = socketIO(ENDPOINT, { transports: ['websocket'] })

  useEffect(() => {
    socket.on('connect', () => {
      alert('connected')
    })
    return () => {}
  }, [socket])

  return (
    <div className='chatPage'>
      <div className='chatContainer'>
        <div className='chatHeader'></div>
        <div className='chatBox'></div>
        <div className='inputBox'></div>
      </div>
    </div>
  )
}

export default Chat
