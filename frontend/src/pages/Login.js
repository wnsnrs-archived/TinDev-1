import React, { useState } from 'react'
import './Login.css'
import logo from '../assets/logo.svg'

export default function Login(props) {
  const [username, setUsername] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    props.history.push('/main')
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt='tindev' />
        <input
          placeholder="Digite seu user do Github"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
