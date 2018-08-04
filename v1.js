var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

app.get("/v1", function(req, res) {
  res.render("v1/home");
});

app.get("/v1/work", function(req, res) {
  res.render("v1/work");
});

app.get("/v1/work/:project", function(req, res){
  res.render('v1/work/'+req.params.project);
});

app.get("/v1/about", function(req, res) {
  res.render("v1/about");
});

module.exports = app;