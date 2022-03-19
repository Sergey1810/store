import React from 'react'
import cl from './gameCover.module.css'

export const GameCover = ({image=""}) => {
    console.log(image)
  return (
    <div className={cl.img}style={{backgroundImage: `URL(${image})`}}/>
      
  )
}
