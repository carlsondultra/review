import React, {useEffect, useContext} from 'react'
import GameFinder from '../apis/GameFinder'
import { GamesContext } from '../context/GamesContext'
import { useNavigate } from "react-router-dom"

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

    const handleDelete = async (id) => {
        try{
            const response = await GameFinder.delete(`/${id}`)
            setGames(games.filter(game => {
                return game.id !== id
            }))
        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = (id) => {
        navigate(`games/${id}/update`)
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
                        <tr key={game.id}>
                            <td>{game.name}</td>
                            <td>{game.location}</td>
                            <td>{"$".repeat(game.price_range)}</td>
                            <td>reviews</td>
                            <td><button onClick={() => handleUpdate(game.id)} className="btn btn-warning">Update</button></td>
                            <td><button onClick={() => handleDelete(game.id)} className="btn btn-danger">Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
    </div>
  )
}

export default GameList