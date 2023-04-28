import React, { useEffect } from 'react';
import BookingForm from './BookingForm';
import {useReducer, useState} from 'react'
import {fetchAPI, submitAPI} from '../MockAPI'
import { useNavigate } from 'react-router-dom';
function BookingPage() {

  const navigate = useNavigate()
  const today = fetchAPI(new Date())
  const initializeTime = [...today]
  const [bookingData, setBookingData] = useState({})

  const handleChange = (data) => {
    setBookingData(data)
  }

  const submitForm = () => {
    let res = submitAPI(bookingData)
    console.log(res)

    if (res){
      navigate('/confirmation')
    }
  }

  const reducer = (state, action) => {
    let res = fetchAPI(action)
    return [...res]
  }

  const [state, dispatch] = useReducer(reducer, initializeTime)

  return (
    <>
      <BookingForm fetchSlots={dispatch} availableSlots={state} handleFormChange={handleChange} handleSubmit={submitForm}/>
    </>
  )
}

export default BookingPage