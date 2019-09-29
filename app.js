var express = require('express')
var app = express()

// =============
//    Routes
// =============

app.get('/', function(req, res) {
   res.send('Hi there, welcome to my assignment!')
})