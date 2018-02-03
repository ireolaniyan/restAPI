const express = require('express'),
    router = express.Router(),
    Ninja = require("../model/ninja")

// 3.set up routes
router.get('/ninjas', function(req, res) {
    res.send({type: 'GET'})
})

// add a new ninja to the db
router.post('/ninjas', function(req, res) {
    // using bosy parser
    
    // 10. create a ninja object using the data received from the body of the request,
    // save the data to the db, then return the ninja saved to the db. Finally, send a 
    // json response of the ninja details
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja)
    })
})

router.put('/ninjas/:id', function(req, res) {
    res.send({type: 'PUT'})
})

router.delete('/ninjas/:id', function(req, res) {
    res.send({type: 'DELETE'})
})

// 4. export router in order to use it in server.js
module.exports = router
