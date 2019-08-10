import React, { useEffect, useState } from 'react'
import api from '../services/api'

import './Main.css'
import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

export default function Main(props) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user_id: props.match.params.id,
        }
      })

      setUsers(response.data)
    }

    loadUsers()
  }, [props.match.params.id])

  return (
    <div className="main-container">
      <img src={logo} alt="Tindev"/>
      <ul>
        {users.map(user => (
          <li key={user._id}>
          <img src={user.avatar} alt={user.name} />
          <footer>
            <strong>{user.name}</strong>
            <p>{user.bio}</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike"/>
            </button>
            <button type="button">
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>
        ))}
      </ul>
    </div>
  )
}
