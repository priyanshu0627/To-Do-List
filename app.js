//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res) {
  var today = new Date();
  var day = today.getDay();

  if(day === 6 || day === 0) {
    res.send("WeekEnd");
  }
  else {
    res.send("WeekDay");
  }
})

app.listen(process.env.PORT || 3000, function(){
  console.log("server is running");
})
