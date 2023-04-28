import React from 'react'
import CardImg from '../assets/img/bruchetta.svg'
import Price from './Price'
import Flex from './Flex'
import OrderNowComponent from './OrderNowComponent'

function Card() {
  return (
    <div className='card'>
        <div className='card-top'>
            <img src={CardImg}/>
        </div>
        <div className='card-bottom'>
            <Flex>
            <h3 className='card-title'>
                Greek salad
            </h3>
            <Price>$ 12.99</Price>
            </Flex>
            <p className='card-description'>
            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
            <OrderNowComponent />
        </div>
    </div>
  )
}

export default Card