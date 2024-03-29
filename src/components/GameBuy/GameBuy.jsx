import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'
import {Button} from '../Button/Button'
import cl from './gameBuy.module.css'

export const GameBuy = ({game}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === game.id);

    const handelClick =(e)=>{
        e.stopPropagation();
        if (isItemInCart) {
          dispatch(deleteItemFromCart(game.id));
        } else {
          dispatch(setItemInCart(game))
        }
        
    }
  return (
    <div className={cl.buy}>
      <span className={cl.buy_price}>{game.price} руб.</span>
      <Button  className={cl.btn_buy} type = {isItemInCart ? "secondary":"primary"} onClick ={handelClick}> 
     {isItemInCart ? 'Убрать из корзины' : 'В корзину '} 
      </Button>
    </div>
  )
}
