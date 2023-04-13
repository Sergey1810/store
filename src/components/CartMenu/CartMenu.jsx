import React from 'react'
import { calcTotalPrice } from '../utils'
import { Button } from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import cl from './CartMenu.module.css'

export const CartMenu = ({ items, onClick }) => {
    return (
        <div className={cl.cartMenu}>
            <div className={cl.cartMenu_games_list}>
                {items.length > 0 ? (items.map((game) => 
                <CartItem 
                key={game.title} 
                price={game.price} 
                title={game.title}
                id={game.id} />)) : "Корзина пуста"}
            </div>
            {items.length > 0 ? (
                <div className={cl.CartMenu_arrange}>
                    <div className={cl.CartMenu_Total_price}>
                        <span>Итого: </span>
                        <span>{calcTotalPrice(items)} руб.</span>
                    </div>
                    <Button type={"primary"} size={"m"} onClick={onClick}>
                        Оформить заказ
                    </Button>
                </div>)
                : null}
        </div>
    );
};
