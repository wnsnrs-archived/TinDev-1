import React from 'react'

import './Main.css'
import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

export default function Main(props) {
  const { id } = props.match.params

  return (
    <div className="main-container">
      <img src={logo} alt="Tindev"/>
      <ul>
        <li>
          <img src="https://www.techadvisor.co.uk/cmsdata/slideshow/3651313/iphone_7_plus_selfie_2_thumb800.jpg" alt=""/>
          <footer>
            <strong>nome do usuario</strong>
            <p>descricao</p>
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
      </ul>
    </div>
  )
}
