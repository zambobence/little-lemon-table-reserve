import React from 'react'
import Container from './Container'
import { useNavigate } from 'react-router-dom'
function ConfirmedBooking() {
    const navigate = useNavigate()
  return (
    <Container>
        <h1 className='display-title'>Congrats!
        </h1>
        <h2 className='lead-text'>Your booking has been confirmed</h2>
        <h4 className='lead-text'>We are waiting for you!</h4>
        <button className='btn' onClick={navigate('/')}>Back to home</button>
    </Container>
  )
}

export default ConfirmedBooking