// Require Express for routing
var express = require("express");
var app = express();
// Defining local port or assigned port when deployed
var PORT = process.env.PORT || 3000;

// Require EJS for templating
var ejs = require("ejs");
// Templating engine will look to views folder
app.set("view engine", "ejs");
// Serving up everything in the public folder
app.use(express.static("public"));

// Route to home page
app.get("/", function(req, res) {
  res.render(__dirname + "/views/main.ejs");
});

// Route to project page
app.get("/project", function(req, res) {
  res.render(__dirname + "/views/project.ejs");
});

// Route to law/resume page
app.get("/law", function(req, res) {
  res.render(__dirname + "/views/law.ejs");
});

// Route to blog page
app.get("/blog", function(req, res) {
  res.render(__dirname + "/views/blog.ejs");
});

// Route to contact page
app.get("/contact", function(req, res) {
  res.render(__dirname + "/views/contact.ejs");
});

// App is listening on local 3000 or assigned port
app.listen(PORT, function(err) {
  if (err) throw err;
  console.log("Personal Portfolio Initializing...  (" + PORT + ")");
});
