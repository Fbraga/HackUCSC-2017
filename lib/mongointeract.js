var MongoClient = require('mongodb').MongoClient
var assert = require('assert')

/*
MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {

  assert.equal(null, err)
  console.log("connect successful")
})
*/

function get_names(next) {
  MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
    assert.equal(null, err)
    console.log("connect successful")
    db.collection('poi_col', function(err, collection) {
      collection.find({}).toArray(function(err, docs) {
        var names = []
        docs.forEach(function(item) {
          names.push(item["name"])
        })
        next(names)
      })
    })
  })
}

function get(name, next) {
  MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
    assert.equal(null, err)
    console.log("connect successful")
    db.collection('poi_col', function(err, collection) {
      collection.findOne({"name":name}, function(err, doc) {
        next(doc)
      })
    })
  })
}

function add(req, next) {
  var new_place = {
    "name" : req.params["name"],
    "lat" : parseFloat(req.params["lat"]),
    "lon" : parseFloat(req.params["lon"]),
    "description" : req.params["description"]
  }
  MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
    assert.equal(null, err)
    console.log("connect successful")
    db.collection('poi_col', function(err, collection) {
      collection.insert(new_place)
      next()
    })
  })
}

module.exports = {
  get_names : get_names,
  get : get,
  add : add
}
