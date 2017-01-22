var MongoClient = require('mongodb').MongoClient
var assert = require('assert')

/*
MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {

  assert.equal(null, err)
  console.log("connect successful")
})
*/

function get_names(next) {
  var results = []
  MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {

    assert.equal(null, err)
    console.log("connect successful")
    var cursor = db.collection('poi_col').find({}, cursor.forEach( function(row) {
      results.push(row.name)
    }))
  })
  results.sort()
  next(results)
}

function get(req, res) {
  var retval = null
  MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {

    assert.equal(null, err)
    console.log("connect successful")
    retval = db.collection('poi_col').findOne({"name":req["name"]})
  })
  res.send(retval)
}

function add(req) {
  var new_place = {
    "name" : req["name"],
    "lat" : parseFloat(req["lat"]),
    "lon" : parseFloat(req["lon"]),
    "description" : req["description"]
  }
  MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {

    assert.equal(null, err)
    console.log("connect successful")
    var collection = db.collection('poi_col')
    collection.insert(new_place)
  })
}

module.exports = {
  get_names : get_names,
  get : get,
  add : add
}
