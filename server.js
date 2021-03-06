const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')

// 1. set up express app
const app = express()

// 9. connect to mongoDB
// a. this tells mongoose to find the database we want to connect to
// b. set mongoose's Promise to the global Promise because mongoose's is deprecated
mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise = global.Promise


// 6. use body-parser
app.use(bodyParser.json())

// 5. use routes file
app.use('/api', require('./routes/api'))

// 2. listen for requests
app.listen(process.env.port || 3000, function() {
    console.log("now listening for requests")
})
