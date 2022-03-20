import React from 'react'
import { GAMES } from '../data'
import { GameItem } from '../components/GameItem/GameItem'
import cl from './home.module.css'



export const HomePage =()=> {
  return (
    <div className={cl.home_page}>
        {GAMES.map(game=><GameItem game={game} key={game.id}/>)}
     
    </div>
  )
}
