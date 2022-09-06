
const express = require('express');
const router = express.Router();
const UserController = require("../UserContraller/User.controller.js")

 router.route("/random").get(UserController.RandomUser)
 router.route('/all').get(UserController.AllUser)
 router.route('/save').post(UserController.saveUser)
 router.route('/update/:id').patch(UserController.updateUser)
 router.route('/bulk-update/:id').patch(UserController.bulkUpdateUser)
 router.route('/delete/:id').delete(UserController.deleteUser)

 module.exports=router