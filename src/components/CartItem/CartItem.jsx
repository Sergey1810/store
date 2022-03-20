import React from 'react'
import cl from './CartItem.module.css'

const CartItem = ({title,id,price}) => {
  return (
    <div className={cl.CartItem}>
      <span>{title}</span>
      <div>
          <span className={cl.CartItem__price}>{price} руб.</span>
      </div>
    </div>
  )
}

export default CartItem
