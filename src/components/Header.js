import React from 'react'
import Logo from '../assets/img/Logo.svg'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Container from './Container'
import Grid from './Grid'
function Header() {
  return (
    <header>
        <Container>
            <Grid>
                <Link to='/' className='logo'>
                <img src={Logo} alt='logo' role='link'></img>
                </Link>
            <Nav />
            </Grid>
        </Container>

    </header>
  )
}

export default Header