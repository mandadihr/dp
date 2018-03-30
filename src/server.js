var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extende: true}));



app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

app.get("/api/getWish", function (req, res){
    res.send({
        wishes: [{ wish: 'Hello World'}]
    })
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
  })

