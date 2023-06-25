import React, {useState} from 'react'

const AddReview = () => {
    const [name, setName] = useState("")
    const [reviewText, setReviewText] = useState("")
    const [rating, setRating] = useState("Rating")


  return (
    <div className="mb-2">
            <form action="">
                <div class="row">
                    <div class="col">
                        <label htmlFor="name">Name</label>
                        <input id="name" value={name} onchange={(e)=> setName(e.target.value)} placeholder="name" type="text" className="form-control"/>
                    </div>
                    <div class="col">
                        <label htmlFor="rating">Rating</label>
                        <select id="rating" value={rating} onchange={(e)=> setRating(e.target.value)} class="form-select">  
                            <option disabled>Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="Review">Review</label>
                    <textarea value={reviewText} onchange={(e)=> setReviewText(e.target.value)} id="Review" className="form-control"></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default AddReview