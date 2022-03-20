import React from 'react'
import { useDispatch } from 'react-redux'
import { setItemInCart } from '../../redux/cart/reducer'
import {Button} from '../Button/Button'
import cl from './GameBuy.module.css'

export const GameBuy = ({game}) => {
    const dispatch = useDispatch()

    const handelClick =(e)=>{
        e.stopPropagation();
        dispatch(setItemInCart(game))
    }
  return (
    <div className={cl.buy}>
      <span className={cl.buy_price}>{game.price} руб.</span>
      <Button  className={cl.btn_buy} type = {"primary"} onClick ={handelClick}> В корзину </Button>
    </div>
  )
}
