
const express = require('express')
const router = express.Router();
const RandomUser = require("../UserContraller/User.controller.js")
const postUser = require("../UserContraller/User.controller.js")
 router.route("/").get(RandomUser)
 .post(postUser)
 .patch()

 module.exports=router