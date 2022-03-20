import React from 'react'
import cl from './ItemsInCart.module.css'

const ItemsInCart = ({quantity=0}) => {
  return quantity > 0 ? (
    <div className={cl.ItemsInCart}>
      {quantity}
    </div>
  ):null
}

export default ItemsInCart
