import React from 'react'
import { useSelector } from 'react-redux'
import { GameGenre } from '../../components/GameGenre/GameGenre'
import { GameCover } from '../../components/GameCover/GameCover'
import cl from './GamePage.module.css'
import { GameBuy } from '../../components/GameBuy/GameBuy'

export const GamePage = () => {
    const game = useSelector(state => state.game.currentGame)
    if(!game) return null;
  return (
    <div className={cl.GamePage}>
        <h1 className={cl.GamePage__title}>{game.title}</h1>
         <div className={cl.GamePage__content}>
            <div className={cl.GamePage__left}>
                <iframe 
                    width="90%" 
                    height="400px"  
                    src={game.video}
                    title="YouTube Video Player"
                    frameBorder="0">
                    </iframe>
            </div>
                <div className={cl.GamePage__right}>
                    <GameCover image={game.image}/>
                    <p>{game.description}</p>
                    <p className={cl.secondary__text}>Популярный метки этого продукта: </p>
                    { game.genres.map((genre)=><GameGenre genre={genre} key = {genre}/>)}
            <div className={cl.GamePage__buy__game}>
                <GameBuy game={game}/>
            </div>
        </div>
      </div>
    </div>
  )
}


