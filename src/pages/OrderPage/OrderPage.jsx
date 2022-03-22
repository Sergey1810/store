import React from 'react'
import { OrderItem } from '../../components/OrderItem/OrderItem'
import { useSelector } from 'react-redux'
import cl from './OrderPage.module.css'
import { calcTotalPrice } from '../../components/utils'

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)
    if (items.length < 1) {
        return <h1>Ваша корзина пуста</h1>
    }
  return (
    <div className={cl.OrderPage}> 
      <div className={cl.OrderPage__left}>
{items.map(game => <OrderItem game={game} key={game.id}/>)}
      </div>
      <div className={cl.OrderPage__right}>
          <div className={cl.OrderPage__total}>
                <span>
                    {items.length} товаров на сумму {calcTotalPrice(items)} руб.
                </span>
          </div>
      </div>
    </div>
  )
}


