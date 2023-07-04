// const checkAuth = require("../middleware/auth-check")◘
const { check } = require("express-validator")
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const ejs = require("ejs");
const express = require("express")
const path = require('path');


const app = express.Router();

const Menu = require("../model.js");
const contuser = require("../controllers/user-controller.js")

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", contuser.userget);


app.get("/:nitem", contuser.usergetq);


module.exports = app;