var express = require('express');
var fs = require('fs'); 
var app = express();
app.use(express.logger());
app.use(express.static(__dirname + '/public'));

var f = fs.readFileSync('index.html', 'utf-8');
var fb = new Buffer(f, 'utf-8');


app.get('/', function(request, response) {
  response.send(fb.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
