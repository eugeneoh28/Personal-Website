var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    Blog = require("./models/blog"),
    Draft = require("./models/draft"),
    bodyParser = require("body-parser"),
    seedDB = require("./seeds");

mongoose.connect("mongodb://eugeneoh28:hello1@ds159110.mlab.com:59110/personal-blog")
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs");

seedDB();


app.get("/", function(req, res) {
  res.render("home");
});

app.get("/work", function(req, res) {
  res.render("work");
});

app.get("/blog", function(req, res)  {
	Blog.find({}, function(err, allBlogs) {
		if (err) {
			console.log(err)
		} else {
			allBlogs.sort(function(a,b){
				return b.order-a.order;
			});
			res.render("blog", {blogs:allBlogs})
		}
	});
});

app.get("/blog:post", function(req, res){
	Blog.find({blog_id:req.params.post}, function(err, foundBlog) {
		if (err) {
			console.log(err)
		} else {
			res.render("show", {blog:foundBlog})
		}
	});
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
