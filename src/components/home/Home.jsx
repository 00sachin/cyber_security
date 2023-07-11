import React from 'react'
import "./Home.css";
import {Link} from 'react-router-dom'


export default function Home() {
  const mystyle = {

    margin: 0
  }
  
  return (
    
    <div style={mystyle}>
    <div class="container34">
    <Link to='/light'>       
     <div class="light name">
        </div>

        <h2 class="text-light">LIGHT</h2>
      </Link>
      <Link to='/aboutlight'>       
        <div class="dark101">
        </div>
        <h2 class="text-dark">DARK</h2>
        </Link>
    </div>
    </div>
  )
}
