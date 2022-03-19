import React from 'react'
import cl from './CartBlock.module.css'
import { BiCart } from "react-icons/bi";
export const CartBlock = () =>{
    return(
    <div className={cl.CartBlock}>
        <BiCart className={cl.Cart_icons}/>
        <span className={cl.Cart_price}>234 rub</span>
    </div>
    )
}