const express = require('express')

// 1. set up express app
const app = express()

// 5. use routes file
app.use('/api', require('./routes/api'))

// 2. listen for requests
app.listen(process.env.port || 3000, function() {
    console.log("now listening for requests")
})
