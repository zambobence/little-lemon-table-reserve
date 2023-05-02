import React from 'react'
import Logo from '../assets/img/Logo.svg'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Container from './Container'
import { useState } from 'react'
import Flex from './Flex'
function Header() {

  const [expand, setExpand] = useState(false)

  const handleExpand = () => {
    setExpand(prevState => !prevState)
  }

  return (
    <header>
        <Container>
            <div className={expand ? 'nav-grid opened' : 'nav-grid'}>
              <div className='hamburger-icon icon' onClick={()=>handleExpand()}>
              <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.34615 0C0.6027 0 0 0.621833 0 1.38889C0 2.15594 0.6027 2.77778 1.34615 2.77778H33.6538C34.3972 2.77778 35 2.15594 35 1.38889C35 0.621833 34.3972 0 33.6538 0H1.34615ZM0 12.5C0 11.7329 0.6027 11.1111 1.34615 11.1111H33.6538C34.3972 11.1111 35 11.7329 35 12.5C35 13.2671 34.3972 13.8889 33.6538 13.8889H1.34615C0.6027 13.8889 0 13.2671 0 12.5ZM0 23.6111C0 22.8442 0.6027 22.2222 1.34615 22.2222H33.6538C34.3972 22.2222 35 22.8442 35 23.6111C35 24.3781 34.3972 25 33.6538 25H1.34615C0.6027 25 0 24.3781 0 23.6111Z" fill="black"/>
              </svg>
              </div>
                <Link to='/' className='logo lemon-icon'>
                <img src={Logo} alt='logo' role='link'></img>
                </Link>
            <Nav />
              <div className='cart-icon icon basket'>
              <svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.7273 27.2381V33.5238H46V37.7143H39.7273V44H35.5455V37.7143H29.2727V33.5238H35.5455V27.2381H39.7273ZM23 23.0476C20.7 23.0476 18.8182 24.9333 18.8182 27.2381C18.8182 29.5429 20.7 31.4286 23 31.4286C25.3 31.4286 27.1818 29.5429 27.1818 27.2381C27.1818 24.9333 25.3 23.0476 23 23.0476ZM25.8227 39.8095H9.40909C7.48545 39.8095 5.87545 38.5105 5.39455 36.7505L0.0836363 17.3276C-7.45058e-08 17.139 0 16.9505 0 16.7619C0 15.6095 0.940909 14.6667 2.09091 14.6667H12.1064L21.2645 0.942857C21.6618 0.335238 22.3309 0 23 0C23.6691 0 24.3382 0.335238 24.7355 0.921905L33.8936 14.6667H43.9091C45.0591 14.6667 46 15.6095 46 16.7619L45.9373 17.3276L43.9091 24.7448C42.7173 24.0952 41.3791 23.5505 39.9782 23.2781L41.1909 18.8571H4.83L9.40909 35.619H25.0909C25.0909 37.0857 25.3627 38.4895 25.8227 39.8095ZM17.1455 14.6667H28.8545L23 5.86667L17.1455 14.6667Z" fill="#495E57"/>
              </svg>
              </div>
            </div>
        </Container>

    </header>
  )
}

export default Header