import React from 'react'
import Button from '../Button/Button'
import cl from './gameBuy.module.css'

export const GameBuy = ({game}) => {
  return (
    <div className={cl.buy}>
      <span className={cl.buy_price}>{game.price} руб.</span>
      <Button></Button>
    </div>
  )
}
