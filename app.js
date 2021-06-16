//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejsLint = require('ejs-lint');
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

let items = ["GFG","WebD","Back Workout","Running"];
let workList = [];

app.get("/", function(req, res) {
  var day = date.getDate();
  res.render("lists", {
    day: day,
    newItem: items
  });
});

app.post("/",function(req,res) {
  // console.log(req.body);
  if(req.body.button === "Work") {
    workList.push(req.body.item);
    res.redirect("/work");
  }else {
    let item = req.body.item;
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work",function(req,res) {
  res.render("lists",{day : "Work Lists", newItem: workList});
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
