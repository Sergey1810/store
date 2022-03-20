import React from 'react'
import cl from './gameCover.module.css'

export const GameCover = ({image=""}) => {
   
  return (
    <div className={cl.img}style={{backgroundImage: `URL(${image})`}}/>
      
  )
}
