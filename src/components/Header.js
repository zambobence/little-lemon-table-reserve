import React from 'react'
import Logo from '../assets/img/Logo.svg'
import { Link } from 'react-router-dom'
import Nav from './Nav'
function Header() {
  return (
    <header>
        <Link to='/'>
        <img src={Logo} alt='logo' role='link'></img>
        </Link>
        <Nav />
    </header>
  )
}

export default Header