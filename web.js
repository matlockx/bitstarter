var express = require('express');
var fs = require('fs');
var infile = "index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  fs.readFile(infile, 'utf8', function(err, data) {
     response.send(data);
  }
  );

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
