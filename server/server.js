require("dotenv").config();
const express = require("express")
const cors = require("cors")
const db = require("./db")
const app = express()

app.use(cors())
app.use(express.json())

// Getting all the games
app.get("/api/games", async (req, res) => {
    try{
        const results = await db.query("select * from games")
        console.log(results)
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                games: results.rows,
            }
    })
    } catch (err) {
        console.log(err)
    }
})

// Getting a single game 
app.get("/api/games/:id", async (req, res) => {
    console.log(req.params.id)
    try {
        // select * from games where id = req.params.id (used for avoiding sql injection)
        const game = await db.query("select * from games where id = $1", [req.params.id])

        const reviews = await db.query("select * from reviews where game_id = $1", [req.params.id])

        res.status(200).json({
            status: "success",
            data: {
                game: game.rows,
                reviews: reviews.rows
            }
        })
    } catch (err) {
        console.log(err)
    }
})

// Creating a game
app.post("/api/games", async (req, res) => {
    console.log(req.body)
    try {
        const results = await db.query("INSERT INTO games (name, location, price_range) values($1, $2, $3) returning *", 
        [req.body.name, req.body.location, req.body.price_range])
        console.log(results)
        res.status(201).json({
            status: "success",
            data: {
                game: results.rows[0]
            }
        })
    } catch (err) {
        console.log(err)
    }
})

// Updating a game
app.put("/api/games/:id", async (req, res) => {
    try {
        const results = await db.query("UPDATE games SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
        [req.body.name, req.body.location, req.body.price_range, req.params.id])
        res.status(200).json({
            status: "success",
            data: {
                game: results.rows[0],
            }
        })
    } catch (err) {
        console.log(err)
    }

    console.log(req.params.id)
    console.log(req.body)
})

// Deleting a game
app.delete("/api/games/:id", async (req, res) => {
    try {
        const results = await db.query("DELETE FROM games where id = $1", [req.params.id])
        res.status(204).json({
            status: "success"
        })
    } catch (err) {
        console.log(err)
    }
})

// Adding a review
app.post("/api/games/:id/addReview", async (req, res) => {
    try{
        const newReview = await db.query("INSERT INTO reviews (game_id, name, review, rating) values ($1, $2, $3, $4) returning *;", [req.params.id, 
        req.body.name, req.body.review, req.body.rating])
        res.status(201).json({
            status: 'success',
            data: {
                review: newReview.rows[0],
            }
        })
    } catch (err) {
        console.log(err)
    }
})


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});