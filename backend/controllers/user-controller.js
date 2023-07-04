const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const ejs = require("ejs");
const express = require("express")
const app = express.Router();

const Menu = require("../model.js");

const userget=(req,res)=>{
    Menu.find({}).then((err, posts) => {
      if (err) {
        res.send(err);
      } else {
        res.send(posts);
      }
    });
  }

  const usergetq=(req,res)=>{
    Menu.findOne({
      name: req.params.nitem
    }).then((err, posts) => {
      if (err) {
        res.send(err);
      } else {
        res.send("NO ARTICLE FOUND HERE");
      }
    });
  }



module.exports={
    userget,
    usergetq
}