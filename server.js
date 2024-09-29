// import our dependacies

const express = require("express");
const app = express()

// base endpoint to say hello world
app.get('',(req, res) => {
    res.send("Hello World, We finna get rich broh")
})

//start and listen to the server 
app.listen(3300, () => {
    console.log('server is running on port 3300... ')
})
