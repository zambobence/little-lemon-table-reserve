import React from 'react'

function InputError({children}) {
  return (
    <p className='error'>{children}</p>
  )
}

export default InputError