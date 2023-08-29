import React, {useEffect, useContext} from 'react'
import GameFinder from '../apis/GameFinder'
import { GamesContext } from '../context/GamesContext'
import { useNavigate } from "react-router-dom"
import StarRating from '../components/StarRating'

const GameList = (props) => {
   const {games, setGames} = useContext(GamesContext)
   const navigate = useNavigate();

    useEffect(() => {
        //defining function to send API call
        const fetchData = async () => {
            try {
                const response = await GameFinder.get("/") //adding to baseURL
                setGames(response.data.data.games)
            } catch(err) {}
        }
        fetchData();
    },[])

    const handleDelete = async (e, id) => {
        e.stopPropagation() // so table row event won't get triggered
        try{
            const response = await GameFinder.delete(`/${id}`)
            setGames(games.filter(game => {
                return game.id !== id
            }))
        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = (e, id) => {
        e.stopPropagation()
        navigate(`games/${id}/update`)
    }

    const handleGameSelect = (id) => {
        navigate(`games/${id}`)
    }

    const renderRating = (game) => {
        if(!game.count){
            return <span className="text-warning">0 reviews</span>
        }
        return<>
            <StarRating rating={game.average_rating}/>
            <span className="text-warning ml-1">({game.count})</span>
        </>
    }
    
  return (
    <div className="list-group">
        <table className="table table-hover table-dark">
            <thead>
            <tr className="bg-primary">
                    <th scope="col">Game</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Ratings</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {/* display only if there are available games */}
                {games && games.map(game =>{
                    return (
                        <tr onClick={() => handleGameSelect(game.id)} key={game.id}>
                            <td>{game.name}</td>
                            <td>{game.location}</td>
                            <td>{"$".repeat(game.price_range)}</td>
                            <td>{renderRating(game)}</td>
                            <td><button onClick={(e) => handleUpdate(e, game.id)} className="btn btn-warning">Update</button></td>
                            <td><button onClick={(e) => handleDelete(e, game.id)} className="btn btn-danger">Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
    </div>
  )
}

export default GameList