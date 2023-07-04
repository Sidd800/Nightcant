// const {check} = require("express-validator")
// const checkAuth = require("../middleware/auth-check")
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const ejs = require("ejs");
const express = require("express")
const app = express.Router();


app.use(bodyParser.urlencoded({
    extended: true
  }));





const Menu = require("../model.js");
const contfood = require("../controllers/food-controller.js");

// ANSWERING A GET REQUEST 
app.get("/", contfood.foodget );

// app.get("/login",contfood.foodlogin);

// ANSWERING A POST REQUEST 
app.post("/", contfood.foodpost );

// ANSWERING A GET REQUEST 
app.get("/:nitem", contfood.foodgetq );
  
  // ANSWERING A PUT REQUEST 
  app.put("/:nitem", contfood.foodput)
  
  // ANSWERING A PATCH REQUEST 
  app.patch("/:nitem", contfood.foodpatch );
  
  // ANSWERING A DELETE REQUEST 
  app.delete("/:nitem", contfood.fooddeleteo );
  
  
  // ANSWERING A DELETE REQUEST 
  app.delete("/", contfood.fooddeletea);

  module.exports=app;