require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/",{ useNewUrlParser: true, useUnifiedTopology: true  }, ()=>{
  console.log("Database is connected successfully");
})


app.route("/")
  .get(function(req, res){
    res.render("home")
  })

app.listen(3000, ()=> {
  console.log("Server is running on port 3000")
})
