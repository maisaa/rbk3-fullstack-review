var express = require('express');
//var bodyParser = require('body-parser');
var morgan = require('morgan');
var useragent = require('express-useragent');
//var request = require('request');
var app = express();

//////
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(morgan('dev'));
///////
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  // TODO


});

app.get('/repos', function (req, res) {
  // TODO
    res.send(req.useragent);
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

