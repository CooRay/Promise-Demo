var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(8080, function(){
    console.log('listening on port 8080');
});