var express = require('express')
var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var interact = require('./lib/mongointeract.js')
var app = express()

MongoClient.connect('mongodb://localhost:27017/myproject', function(err, db) {
  assert.equal(null, err)
  console.log("connect successful")

  app.use(express.static('.'))

  app.get('/get_names', function(req, res) {
    interact.get_names(function(results) {
      res.send(results)
    })
  })

  app.get('/get/:name', function(req, res) {
    interact.get(req.params["name"], function(results) {
      res.send(results)
    })
  })

  app.get('/add/:lat/:lon/:name/:description', function(req, res) {
    interact.add(req, function() {
      res.send("OK!")
    })
  })

  app.get('/debug/:lat/:lon/', function(req, res) {
    var dummy = {
      "name" : "foobar",
      "lat" : parseFloat(req.params["lat"]),
      "lon" : parseFloat(req.params["lon"]),
      "rating" : 5
    }
    res.send(dummy)
  })

  app.listen(80, function() {
    console.log('Example app listening on port 3000!')
  })
})
