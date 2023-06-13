require("dotenv").config();
const express = require("express")
const app = express()

app.use(express.json())

// Getting all the games
app.get("/api/games", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            game: ["game1", "game2"]
        }
    })
})

// Getting a single game 
app.get("/api/games/:id", (req, res) => {
    console.log(req.params)

    res.status(200).json({
        status: "success",
        data: {
            game: "testing"
        }
    })
})

// Creating a game
app.post("/api/games", (req, res) => {
    console.log(req.body)

    res.status(201).json({
        status: "success",
        data: {
            game: "testing"
        }
    })
})

// Updating a game
app.put("/api/games/:id", (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    
    res.status(200).json({
        status: "success",
        data: {
            game: "testing"
        }
    })
})

// Deleting a game
app.delete("/api/games/:id", (req, res) => {
    res.status(204).json({
        status: "success"
    })
})


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});