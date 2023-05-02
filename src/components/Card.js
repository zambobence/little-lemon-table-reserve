import React from 'react'
import CardImg from '../assets/img/bruchetta.svg'
import Price from './Price'
import Flex from './Flex'
import OrderNowComponent from './OrderNowComponent'

function Card({data}) {
  console.log(data)
  return (
    <div className='card'>
        <div className='card-top'>
            <img src={data.imgUrl}/>
        </div>
        <div className='card-bottom'>
            <Flex>
            <h3 className='card-title'>
                {data.name}
            </h3>
            <Price>$ {data.price}</Price>
            </Flex>
            <p className='card-description'>
            {data.description}
            </p>
            <OrderNowComponent />
        </div>
    </div>
  )
}

export default Card