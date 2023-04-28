import React, { useEffect, useState } from 'react'

function BookingForm({fetchSlots, availableSlots, handleFormChange, handleSubmit}) {

    const [resDate, setResDate] = useState()
    const [resTime, setResTime] = useState('17:00')
    const [guests, setGuests] = useState(0)
    const [occasion, setOccassion] = useState('')

    const occasions = ['Birthday', 'Anniversary']

    const availableTimesOptions = availableSlots?.map((e,i) => <option key={i} value={e}>{e}</option>)
    const occasionsOptions = occasions.map( (e,i ) => <option key={i} value={e}>{e}</option>)

    useEffect(()=> {
        let bookingObj = {
            resDate,
            resTime,
            guests,
            occasion
        }
        handleFormChange(bookingObj)
    },[resDate, resTime, guests, occasion])

    let isFilled

    if (resDate && resTime && guests && occasion){
        isFilled = true
    }


    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (isFilled){
            handleSubmit()
        } else {
            console.log('Complete all fields')
        }
    }



    return (
   <form onSubmit={handleFormSubmit}>
   <label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date" value={resDate} 
        onChange={(e) => {
            setResDate(e.target.value)
            fetchSlots(e.target.value)}}
    />

   <label htmlFor="res-time">Choose time</label>
   <select id="res-time" value={resTime} onChange={(e) => setResTime(e.target.value)}>
      {availableTimesOptions}
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} placeholder="1" min="1" max="10" id="guests"/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" value={occasion} onChange={(e) => setOccassion(e.target.value)}>
      <option></option>
      {occasionsOptions}
   </select>
   <input type="submit" value="Book Now" />
</form>
  )
}

export default BookingForm