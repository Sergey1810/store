import React from 'react'
import { useSelector } from 'react-redux';
import cl from './CartBlock.module.css'
import { BiCart } from "react-icons/bi";
import {CartMenu} from '../CartMenu/CartMenu'


export const CartBlock = () =>{
    const items = useSelector(state => state.cart.itemsInCart );
    const totalPrice = items.reduce((acc, game) => acc+= game.price, 0)
    return(
    <div className={cl.CartBlock}>
        <BiCart className={cl.Cart_icons}/>
        <span className={cl.Cart_price}>{totalPrice}</span>
        <CartMenu/>
    </div>
    )
}