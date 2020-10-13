const express = require('express');
const mongoose = require('mongoose');


// Initialization
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from express')
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running at ${port}`))