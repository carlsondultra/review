import React, {useEffect, useContext} from 'react'
import GameFinder from '../apis/GameFinder'
import { GamesContext } from '../context/GamesContext'

const GameList = (props) => {
   const {games, setGames} = useContext(GamesContext)

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
                <tr>
                    <td>testgame</td>
                    <td>testlocation</td>
                    <td>$</td>
                    <td>testingrating</td>
                    <td>
                        <button className="btn btn-warning">Update</button>
                    </td>
                    <td>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        
    </div>
  )
}

export default GameList