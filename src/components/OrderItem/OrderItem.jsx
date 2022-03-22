import React from 'react'
import { useDispatch } from 'react-redux'
import { GameCover } from '../GameCover/GameCover'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import cl from './OrderItem.module.css'
import { deleteItemFromCart } from '../../redux/cart/reducer'

 export const OrderItem = ({game}) => {
     const dispatch = useDispatch()
     const handelClick = () =>{
         dispatch(deleteItemFromCart(game.id))
     }
  return (
    <div className={cl.OrderItem}>
        <div className={cl.OrderItem__cover}>
            <GameCover image={game.image}/>
        </div>
        <div className={cl.OrderItem__title}>
            <span>{game.title}</span>
        </div>
        <div className={cl.OrderItem__price}>
          <span>{game.price} руб.</span> 
          <AiOutlineCloseCircle 
          size={25}
          className={cl.CartItems__delete}
          onClick={handelClick}
          /> 
        </div>
    </div>
  )
}


