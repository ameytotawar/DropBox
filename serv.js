var express = require('express');
var path = require('path');
var routes = require('./app/routes');
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express();

app.set('port', 8600);
app.set('views', './views');
app.use(express.static(__dirname)); 
//app.use('/upload', multer({ dest: '/public/data' }));

app.get('/', function(req, res) {
    console.log('get index');
    res.sendFile(path.join(__dirname,'index.html'));
});

app.use(bodyParser.urlencoded());

app.use('/', routes);

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Server running at http://127.0.0.1:' + port);
});