var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool= require(pg).Pool;

var config = {
    
    user:"parthparthchauhan7" ,
    database:"parthparthchauhan7" ,
    host:"db.imad.hasura-app.io" ,
    port: "5432" ,
    password:process.env.DB_PASSWORD
}

var app = express();
app.use(morgan('combined'));




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/art1',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'art1.html'));
    
});


var Pool=new Pool(Config);
app.get('/test-db',function(req,res)
{
    Pool.query(SELECT * FROM test",function(err,result)
    {
        if(err)
        {
            res.status(500).send(err.toString())
        }
        
        else
        {
            res.send(JSON.stringify(result));
        }
    }
}

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