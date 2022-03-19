import React from 'react'
import cl from './header.module.css'
import { Link } from 'react-router-dom'
import {CartBlock} from '../CartBlock/CartBlock'

export const Header =()=> {
  return (
    <div className={cl.header}>
      <div className={cl.wrapper}>
          <Link to='/' className={cl.header__store_title}>
              Game Store 
          </Link>
      </div>
      <div className={cl.wrapper+''+cl.header_cart_btn}>
          <CartBlock/>
      </div>
    </div>
  )
}
