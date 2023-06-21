import React, {useState} from 'react'

const AddGame = () => {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("Price Range")
  return (
    <div class="container">
        <form action="">
            <div class="row">
                <div class="col">
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="name"/>
                </div>
                <div class="col">
                    <input value={location} onChange={(e)=>setLocation(e.target.value)} type="text" className="form-control" placeholder="location"/>
                </div>
                <div class="col">
                    <select value={priceRange} onChange={(e)=>setPriceRange(e.target.value)}className="custom-select my-1 mr-sm-2">
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>
                <button className="btn btn-primary">Add to Library</button>
            </div>
        </form>
    </div>
  )
}

export default AddGame