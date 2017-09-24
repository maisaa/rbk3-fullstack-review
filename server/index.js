var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var useragent = require('express-useragent');
var request = require('request');
var app = express();

//////
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(morgan('dev'));
///////


app.get('/repos', function(req, res){ 
  var options = {
  	url: 'https://api.github.com/users/'+req.url.split('?')[1]+'repos',
    headers: {
    	'user-agent': 'Maisaa',
    	'authToken': '6f84a9db63d6450521ba42d46e64a8b8d01a723e'
    }
  }
  request('https://api.github.com', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred and handle it
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      res.send("hi")
    });

})
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  console.log('creating the contacts');

    repo.create({
        id:req.body.id,
        name:req.body.name,
        done: false
    },function(err,repo){
        if(err)
        res.send(err);

        Contact.find({},function(err,repo){
            if(err)
            res.send(err);
            res.json(repo);
        });
    });


});

app.get('/repos', function (req, res) {
  // TODO
  repo.find({},function(err, repos){
        if(err)
        res.send(err);
        res.json(repos);
    });
   
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

