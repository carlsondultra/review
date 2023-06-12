require("dotenv").config();
const express = require("express")

const app = express()

// Getting all the games
app.get("/api/games", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            game: ["game1", "game2"]
        }
    })
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});