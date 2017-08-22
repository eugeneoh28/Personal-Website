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

app.get("/work/:project", function(req, res){
  res.render('work/'+req.params.project);
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/*", function(req, res) {
  res.redirect("/");
})

app.listen(3000, function(){
  console.log("website started");
});
