var express = require('express');
var app = express();
var path = require('path');
const PORT = process.env.PORT || 5000

app.use(express.static('public'));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname + '/index.html')));
// viewed at http://localhost:5000
app.listen(PORT, ()=> console.log('listening on port ' + PORT));