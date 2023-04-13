import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {GameCover} from '../GameCover/GameCover'
import {GameBuy} from '../GameBuy/GameBuy'
import {GameGenre} from '../GameGenre/GameGenre'
import { setCurrentGame } from '../../redux/games/reducer'
import cl from './gameItem.module.css'


export const GameItem = ({game}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handelClick = () => {
    dispatch(setCurrentGame(game))
    navigate(`/app/${game.title}`)
  } 
  return (
    <div className={cl.Game_Item} onClick={handelClick}>
        <GameCover image={game.image}/>
      <div className={cl.game_item_details}>
          <span className={cl.game_item_title}>{game.title}</span>
          <div className={cl.game_item_genre}>
              {game.genres.map(genre=><GameGenre genre={genre} key={genre}/>)}
          </div>
          <div className={cl.game_item_btn}>
              <GameBuy game={game}/>
          </div>
      </div>
    </div>
  )
}
