var express = require('express');
var app = express();
var path = require('path');
const PORT = process.env.PORT || 5000

// viewed at http://localhost:8080
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(PORT, ()=> console.log('listening on port ' + PORT));