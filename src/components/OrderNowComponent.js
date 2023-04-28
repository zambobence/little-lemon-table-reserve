import React from 'react'
import DeliveryIcon from "../assets/img/delivery_icon.png"

function OrderNowComponent() {
  return (
    <div className='order-now-comp'>
        <p>Order a delivery</p>
        <img src={DeliveryIcon} className='icon'/>

    </div>
  )
}

export default OrderNowComponent