import React from 'react'
import './join.css'
import { Link } from 'react-router-dom'

const Join = () => {
  return (
    <div className='joinPage'>
      <div className='joinContainer'>
        <img
          src='https://us.123rf.com/450wm/conceptw/conceptw1810/conceptw181000081/120653637-letter-c-colorful-glowing-outline-alphabet-symbol-on-blue-lens-flare-dark-background.jpg?ver=6'
          alt='logo'
        />
        <h1>Chatter</h1>
        <input type='text' id='joinInput' placeholder='Enter your Name' />
        <Link to='/chat'>
          <button className='joinBtn'>LogIn</button>
        </Link>
      </div>
    </div>
  )
}

export default Join
