import React from 'react'
import Logo from '../assets/img/Logo.svg'
import { Link } from 'react-router-dom'
import Nav from './Nav'
function Header() {
  return (
    <header>
        <div className='container grid'>
            <Link to='/' className='logo'>
            <img src={Logo} alt='logo' role='link'></img>
            </Link>
            <Nav />
        </div>

    </header>
  )
}

export default Header