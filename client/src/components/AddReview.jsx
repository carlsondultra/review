import React, {useState} from 'react'
import GameFinder from "../apis/GameFinder"
import { useParams } from "react-router-dom"

const AddReview = () => {
    const { id } = useParams();
    console.log(id)

    const [name, setName] = useState("")
    const [reviewText, setReviewText] = useState("")
    const [rating, setRating] = useState("Rating")

    const handleSubmitReview = async (e) => {
        e.preventDefault()
        const response = await GameFinder.post(`/${id}/addReview`, {
            name,
            review: reviewText,
            rating,
        })
        console.log(response)
        window.location.reload(false) //refreshing the page after submitting a review
    }


  return (
    <div className="mb-2">
            <form action="">
                <div class="row">
                    <div class="col">
                        <label htmlFor="name">Name</label>
                        {/* <input id="name" value={name} onchange={(e)=> setName(e.target.value)} placeholder="name" type="text" className="form-control"/> */}
                        <input defaultValue="" onChange={(e) => setName(e.target.value)} id="name" className="form-control" type="text" />
                    </div>
                    <div class="col">
                        <label htmlFor="rating">Rating</label>
                        <select id="rating" defaultValue="Rating" onChange={(e)=> setRating(e.target.value)} class="form-select">  
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
                    {/* <textarea value={reviewText} onchange={(e)=> setReviewText(e.target.value)} id="Review" className="form-control"></textarea> */}
                    <textarea defaultValue="" onChange={(e)=> setReviewText(e.target.value)} id="Review" className="form-control"></textarea>
                </div>
                <button type="submit" onClick={handleSubmitReview} className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default AddReview