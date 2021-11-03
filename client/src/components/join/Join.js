import React, { useState } from 'react'
import './join.css'
import { Link } from 'react-router-dom'

let user

const Join = () => {
  const [name, setName] = useState('')

  const sendUser = () => {
    user = document.getElementById('joinInput').value
    document.getElementById('joinInput').value = ''
  }

  return (
    <div className='joinPage'>
      <div className='joinContainer'>
        <img
          src='https://us.123rf.com/450wm/conceptw/conceptw1810/conceptw181000081/120653637-letter-c-colorful-glowing-outline-alphabet-symbol-on-blue-lens-flare-dark-background.jpg?ver=6'
          alt='logo'
        />
        <h1>Chatter</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          type='text'
          id='joinInput'
          placeholder='Enter your Name'
        />
        <Link to='/chat' onClick={(e) => (!name ? e.preventDefault() : null)}>
          <button className='joinBtn' onClick={sendUser}>
            Start
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Join
export { user }
