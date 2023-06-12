require("dotenv").config();
const express = require("express")

const app = express()

app.get("/", (req, res) => {
    // console.log("hello world")
    res.send("hello world")
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});