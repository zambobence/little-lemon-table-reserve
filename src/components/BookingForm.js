import React, { useEffect, useState } from 'react'
import InputError from './InputError'
function BookingForm({fetchSlots, availableSlots, handleFormChange, handleSubmit}) {

    const [resDate, setResDate] = useState()
    const [resTime, setResTime] = useState('')
    const [guests, setGuests] = useState(0)
    const [occasion, setOccassion] = useState('')

    const occasions = ['Birthday', 'Anniversary']

    const availableTimesOptions = availableSlots?.map((e,i) => <option key={i} value={e}>{e}</option>)
    const occasionsOptions = occasions.map( (e,i ) => <option key={i} value={e}>{e}</option>)

    const [touchedFields, setTouchedFields] = useState([]);

  const handleInputChange = (fieldName) => {
    if (!touchedFields.includes(fieldName)) {
      setTouchedFields([...touchedFields, fieldName]);
    }
  };

  useEffect(() => {
    console.log(touchedFields)
  },[touchedFields])


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
   <form onSubmit={handleFormSubmit} className='booking-form'>
   <label htmlFor="res-date">Choose date <span>*</span></label>
   <input type="date" id="res-date" value={resDate} 
        onChange={(e) => {
            setResDate(e.target.value)
            fetchSlots(e.target.value)}}
    />
    {touchedFields.includes('res-date') && resDate==='' && <InputError>Please select a valid date!</InputError>}

   <label htmlFor="res-time">Choose time <span>*</span></label>
   <select id="res-time" value={resTime} onChange={(e) => {
        setResTime(e.target.value)
        handleInputChange(e.target.id)}}>
    <option value={''}></option>
      {availableTimesOptions}
   </select>
   {touchedFields.includes('res-time') && resTime ==="" && <InputError>Please select a time!</InputError>}
   <label htmlFor="guests">Number of guests <span>*</span></label>
   <input type="number" id="guests" value={guests} onChange={(e) => {
    setGuests(Number(e.target.value))
    handleInputChange(e.target.id)}}
    placeholder="1" min="1" max="10" />
   {touchedFields.includes('guests') && guests < 0 && <InputError>The number of guests cannot be less than 0</InputError>}

   <label htmlFor="occasion">Occasion <span>*</span></label>
   <select id="occasion" value={occasion} onChange={(e) => {
    setOccassion(e.target.value)
    handleInputChange(e.target.id)}}>
    <option></option>
      {occasionsOptions}
   </select>
   {touchedFields.includes('occasion') && occasion ===""  && <InputError>Please select an occasion!</InputError>}

   <input type="submit" value="Book Now" disabled={!isFilled} className='btn'/>
</form>
  )
}

export default BookingForm