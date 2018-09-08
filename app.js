var express = require("express");
var app     = express();



app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
  res.render("homepage");
});



app.listen(6000,function(){
    console.log("Server has started");
});
