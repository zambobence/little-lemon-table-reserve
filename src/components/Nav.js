import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/'>About</Link>
            </li>
            <li>
                <Link to='/'>Menu</Link>
            </li>
            <li>
                <Link to='/'>Reservations</Link>
            </li>
            <li>
                <Link to='/'>Order online</Link>
            </li>
            <li>
                <Link to='/'>Login online</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav