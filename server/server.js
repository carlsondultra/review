require("dotenv").config();
const express = require("express")

const app = express()

app.use((req, res, next) => {
    console.log("middleware testing")
    next(); //tells middleware to go to next middleware or route handler
})

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
})

// Creating a game
app.post("/api/games", (req, res) => {
    console.log(req)
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});