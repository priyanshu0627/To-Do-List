//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejsLint = require('ejs-lint');

const app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  var today = new Date();
  var currDay = today.getDay();
  var day = "";

  switch (currDay) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 0:
      day = "Sunday";
      break;
    default:
      console.log("Error with day " + currDay);

  }
  res.render("lists", {
    day: day
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
