const express = require('express'),
    bodyParser = require('body-parser')
// 1. set up express app
const app = express()

// 6. use body-parser
app.use(bodyParser.json())

// 5. use routes file
app.use('/api', require('./routes/api'))

// 2. listen for requests
app.listen(process.env.port || 3000, function() {
    console.log("now listening for requests")
})
