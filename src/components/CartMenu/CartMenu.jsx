import React from 'react'
import cl from './CartMenu.module.css'

export const CartMenu = ({items, onClick}) => {
  return (
    <div className={cl.cartMenu}>
        <div className={cl.cartMenu_games_list}>
        {
            items.map(game=>game.title)
        }
        </div>  
        {
            items.lenght > 0 ?
            <div className={cl.CartMenu_arrange}> 
            <div className={cl.CartMenu_Total_price}>

            </div>

            </div>
            :null
        }    
    </div>
  )
}
