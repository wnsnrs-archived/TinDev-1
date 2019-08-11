import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'

import './Main.css'
import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

export default function Main(props) {
  const [users, setUsers] = useState([])

  
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', { headers: { user_id: props.match.params.id,} })
      setUsers(response.data)
    }
      loadUsers()
    }, [props.match.params.id])

  async function handleLike(id) {
    await api.post(`/devs/${id}/like`, null, { headers: { user_id: props.match.params.id } })

    setUsers(users.filter(user => user._id !== id))
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislike`, null, { headers: { user_id: props.match.params.id } })

    setUsers(users.filter(user => user._id !== id))
  }

  async function handleReset(){
    await api.put('/devs', null, { headers: { user_id: props.match.params.id } })
    const response = await api.get('/devs', { headers: { user_id: props.match.params.id } })
    setUsers(response.data)
  }

  return (
    <div className="main-container">
      <Link to='/'>
        <img src={logo} alt="Tindev"/>
      </Link>
      { users.length > 0 ? (
      <ul>
        {users.map(user => (
          <li key={user._id}>
          <img src={user.avatar} alt={user.name} />
          <footer>
            <strong>{user.name}</strong>
            <p>{user.bio}</p>
          </footer>
          <div className="buttons">
            <button type="button" onClick={() => handleDislike(user._id)}>
              <img src={dislike} alt="dislike"/>
            </button>
            <button type="button" onClick={() => handleLike(user._id)}>
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>
        ))}
      </ul>
        ) : (
          <div>
            <div className="empty">Acabou. :(</div>
            <div className="buttons">
              <button type="button" className="btn" onClick={() => {handleReset()}}>Reset</button>
            </div>
          </div>
        ) }
    </div>
  )
}
