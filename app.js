var express = require("express");
var app     = express();

var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://localhost:5000',
    ServerTwo = 'http://localhost:8080';

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
  res.render("homepage");
});

app.all("/yelpcamp/*", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});

app.all("/newsportal/*", function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: ServerTwo});
});

app.listen(6000,function(){
    console.log("Server has started");
});
