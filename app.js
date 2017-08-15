var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/work", function(req, res) {
  res.render("work");
});

app.get("/13things", function(req, res) {
  res.render("13things");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/*", function(req, res) {
  res.redirect("/");
})

app.listen(3000, function(){
  console.log("website started");
});
