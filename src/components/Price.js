import React from 'react'

function Price({children}) {
  return (
    <span className='price highlighted'>
        {children}
    </span>
  )
}

export default Price