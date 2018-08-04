var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    admin = require("firebase-admin"),
    serviceAccount = require("./key.json"),
    v1 = require("./v1.js");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://personal-website-dc900.firebaseio.com"
});
var database = admin.database(),
		ref = database.ref(),
		data = {};

ref.on("value", function(snapshot) {
   data = snapshot.val();
}, function (error) {
   console.log("Error: " + error.code);
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs");
app.use('/', v1);

seedDB();


app.get("/", function(req, res) {
  res.render("home");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/work", function(req, res) {

  res.render("work", {data:data});
});

app.get("/work/tech/:project", function(req, res){
  res.render('tech', {data:data['technical'][req.params.project]});
});

app.get("/work/service/:project", function(req, res){
  res.render('service', {data:data['service'][req.params.project]});
});

app.get("/*", function(req, res) {
  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function(){
  console.log("website started");
});
