var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/art1',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'art1.html'));
    
});

app.get('/parth',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'parth.html'));
});

app.get('/sumit',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'sumit.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});