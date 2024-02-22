import React from 'react'
import {Link, Routes, Route, useNavigate} from 'react-router-dom'

import './signIn.scss'
const signIn = () => {
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    navigate('/');
  };
  return (
    <div className='application'>
      <h1>Log In</h1>
      <form className='forml' onSubmit={handleSubmit}>
        <label>
          Email<br></br>
          <input type='text' name='name' />
        </label><br></br>
        <label>
          Password<br></br>
          <input type='password' name='pname' />
        </label><br></br>
        <input className='submit-btn' type='submit' value='login'/>
        </form>
      </div>
  )
}

export default signIn