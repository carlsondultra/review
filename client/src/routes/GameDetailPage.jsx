import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GamesContext } from '../context/GamesContext'
import GameFinder from '../apis/GameFinder'
import StarRating from '../components/StarRating'

const GameDetailPage = () => {
  const {id} = useParams()
  const {selectedGame, setSelectedGame} = useContext(GamesContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GameFinder.get(`/${id}`)
        console.log(response.data.data)
        setSelectedGame(response.data.data.game[0])
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div>{selectedGame && <StarRating rating={3.3}/>}</div>
  )
}

export default GameDetailPage