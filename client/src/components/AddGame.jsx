import React from 'react'

const AddGame = () => {
  return (
    <div class="container">
        <form action="">
            <div class="row">
                <div class="col">
                    <input type="text" className="form-control" placeholder="name"/>
                </div>
                <div class="col">
                    <input type="text" className="form-control" placeholder="location"/>
                </div>
                <div class="col">
                    <select className="custom-select my-1 mr-sm-2">
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