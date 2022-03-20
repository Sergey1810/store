import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import cl from './CartBlock.module.css'
import { BiCart } from "react-icons/bi";
import {CartMenu} from '../CartMenu/CartMenu'
import ItemsInCart from '../ItemsInCart/ItemsInCart'
import { calcTotalPrice } from '../utils';


export const CartBlock = () =>{
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart );
    const totalPrice = calcTotalPrice(items)
    return(
    <div className={cl.CartBlock}>
        <ItemsInCart quantity={items.length}/>
        <BiCart className={cl.Cart_icons} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
        {totalPrice>0 ?<span className={cl.Cart_price}>{totalPrice}</span>:null}
        {isCartMenuVisible && <CartMenu items={items} onClick={()=>null}/>}
    </div>
    )
}