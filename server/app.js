var express = require('express');
var app = express();
var path = require ("path");
var yolo = require('./public/assets/data/group.json');

app.set("port", (process.env.PORT || 8000));

app.get("/yolo", function(req,res){
  res.send(yolo);
  console.log(yolo);
});

app.get("/*", function(req,res){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
  console.log("listening on port: ", app.get("port"));
});

module.exports = app;
