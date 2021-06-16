//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejsLint = require('ejs-lint');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

var items = ["GFG","WebD","Back Workout","Running"];
app.get("/", function(req, res) {
  var today = new Date();

  options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render("lists", {
    day: day,
    newItem: items
  });
});

app.post("/",function(req,res) {
  var item = req.body.item;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
