var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/work", function(req, res) {
  res.render("work");
});

app.get("/blog", function(req, res)  {
	res.render("blog");
});

app.get("/blog:post", function(req, res){
	res.render("blog/"+req.params.post);
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

app.listen(process.env.PORT || 3000, function(){
  console.log("website started");
});
