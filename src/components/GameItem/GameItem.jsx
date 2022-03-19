import React from 'react'
import {GameCover} from '../GameCover/GameCover'
import {GameBuy} from '../GameBuy/GameBuy'
import cl from './gameitem.module.css'

export const GameItem = ({game}) => {
  return (
    <div className={cl.Game_Item}>
        <GameCover image={game.image}/>
      <div className={cl.game_item_details}>
          <span className={cl.game_item_title}>{game.title}</span>
          <div className={cl.game_item_genre}>
              {game.genres.map(genre=>genre)}
          </div>
          <div className={cl.game_item_btn}>
              <GameBuy game={game}/>
          </div>
      </div>
    </div>
  )
}
