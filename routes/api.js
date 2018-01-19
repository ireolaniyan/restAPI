const express = require('express')
const router = express.Router()

// 3.set up routes
router.get('/ninjas', function(req, res) {
    res.send({type: 'GET'})
})

router.post('/ninjas', function(req, res) {
    res.send({type: 'POST'})
})

router.put('/ninjas/:id', function(req, res) {
    res.send({type: 'PUT'})
})

router.delete('/ninjas/:id', function(req, res) {
    res.send({type: 'DELETE'})
})

// 4. export router in order to use it in server.js
module.exports = router
