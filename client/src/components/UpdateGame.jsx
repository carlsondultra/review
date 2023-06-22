import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GameFinder from '../apis/GameFinder'

const UpdateGame = (props) => {
    const {id} = useParams()
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await GameFinder.get(`/${id}`)
            // console.log(response)
            // console.log(response.data.data)
            // console.log(response.data.data.game[0].name)
            setName(response.data.data.game[0].name)
            setLocation(response.data.data.game[0].location)
            setPriceRange(response.data.data.game[0].price_range)
        }
        fetchData()
    }, [])

    return (
        <div>
            <form action = "">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input value={name || ''} onChange={(e) => setName(e.target.value)} id="name" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input value={location || ''} onChange={(e) => setLocation(e.target.value)} id="location" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="price_range">Price Range</label>
                    <input value={priceRange || ''} onChange={(e) => setPriceRange(e.target.value)} id="price_range" className="form-control" type="number" />
                </div>

                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default UpdateGame