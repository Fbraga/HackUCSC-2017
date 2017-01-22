var express = require('express')
var app = express();

app.use(express.static('.'))

app.get('/:lat/:lon/', function(req, res) {
  var dummy = {
    "name" : "foobar",
    "lat" : parseInt(req.params["lat"]),
    "lon" : parseInt(req.params["lon"]),
    "rating" : 5
  }
  res.send(dummy)
})
// GET method route
/*
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
})
*/
// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})
app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})


