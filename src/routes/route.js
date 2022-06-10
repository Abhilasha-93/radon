const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")



/*const mid1= function ( req, res, next) {
const Dates=req
const IpAddress=req.socket.remoteAddress
const UrlPath=req.UrlPath
console.log(Dates,' ',IpAddress,' ',UrlPath)
}*/

router.get("/homepage", commonMW.mid1,UserController.basicCode  )
router.get("/test-me",commonMW.mid1,UserController.mysimpleMiddleware)
router.get("/testingMiddleware",commonMW.mid1, UserController.globalMiddleware)


module.exports = router;