import React from 'react'
import cl from './GameGenre.module.css'

export const GameGenre = ({genre}) => {
  return (
    <span className={cl.genre}>
      {genre}
    </span>
  )
}
