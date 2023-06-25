import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GamesContext } from '../context/GamesContext'
import GameFinder from '../apis/GameFinder'
import StarRating from '../components/StarRating'
import Reviews from '../components/Reviews'
import AddReview from '../components/AddReview'

const GameDetailPage = () => {
  const {id} = useParams()
  const {selectedGame, setSelectedGame} = useContext(GamesContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GameFinder.get(`/${id}`)


        setSelectedGame(response.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  // console.log(selectedGame)
  // console.log(selectedGame.game?.name)
  // console.log(selectedGame.game[0].name)

  return (
    <div>
      {selectedGame && (
        <>
        <h1 className="text-center display-1">{selectedGame.game?.name}</h1>
          <div className="mt-3">
            <Reviews reviews={selectedGame.reviews}/>
          </div>
          <AddReview />
        </>
    )}</div>
  )
}

export default GameDetailPage