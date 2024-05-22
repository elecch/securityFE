const express = require("express")
const app = express()
const port = 3000;

app.get("/", (req, res) => {
    res.end("Top Page")
})

module.exports = router