
var express = require('express')
var app = express()

var sounds = {
   pig: 'Oink',
   cow: 'Moo',
   dog: 'Woof Woof!',
   rooster: 'Cockadoodledooooooo',
   hawk: 'Screeeee!!'
}

// =============
//    Routes
// =============

app.get('/', function(req, res) {
   res.send('Hi there, welcome to my assignment!')
})

app.get('/speak/:animal', function(req, res) {
   var animal = req.params.animal.toLocaleLowerCase()

   var speak = sounds[animal]

   // if (animal === 'pig') {speak = 'Oink'}
   // else if (animal === 'cow') {speak = 'Moo'}
   // else if (animal === 'dog') {speak = 'Woof Woof!'}
   // else if (animal === 'rooster') {speak = 'Cockadoodledooooooo'}
   // else if (animal === 'hawk') {speak = 'Screeee!!'}
   
   res.send('The ' + animal + ' says "' + speak + '"')
})

app.get('/repeat/:text/:num', function(req, res) {
   var num = Number(req.params.num)
   var str = ''

   for (var i = 0; i < num; i++) {
      if (i !== num - 1) {
         str += req.params.text + ' '
      }
      else {
         str += req.params.text
      }
   }
   res.send(str)
})

app.get('/add/:addAnimal', function(req, res) {
   addAnimal = req.params.addAnimal
   sounds[addAnimal] = 'Harumph'
   var speak = sounds[addAnimal]
   
   res.send('The ' + addAnimal + ' says "' + speak + '"')
   console.log(sounds)
})

app.get('*', function(req, res) {
   res.send('Sorry, page not found...What are you doing with your life?')
})

// =============
//    Routes
// =============

app.listen(3000, process.env.IP, function() {
   console.log('The server has started')
})