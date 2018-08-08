var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    admin = require("firebase-admin"),
    v1 = require("./v1.js");


admin.initializeApp({
  credential: admin.credential.cert({
    "private_key": process.env.FIREBASE_PRIVATE_KEY,
    "client_email": process.env.FIREBASE_CLIENT_EMAIL
  }),
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
  var name = req.params.project;
  if (name in data['technical']) {
    res.render('tech', {data:data['technical'][name]});
  }
});

app.get("/work/service/:project", function(req, res){
  var name = req.params.project;
  if (name in data['service']) {
    res.render('service', {data:data['service'][name]});
  }
});

app.get("/*", function(req, res) {
  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function(){
  console.log("website started");
});
