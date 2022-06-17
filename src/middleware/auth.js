const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const mid1= async function(req,res,next){
try{let token = req.headers["x-Auth-token"];
//console.log(token)
if(!token)token=req.headers["x-auth-token"];
console.log(token)
if (!token) return res.status(400).send({ status: false, msg: "token absent" });
//console.log(token);
let decodedToken = jwt.verify(token, "functionup-radon");
if (!decodedToken)
  return res.status(403).send({ status: false, msg: "token is invalid" });
let userId = req.params.userId;
let user = await userModel.findById(userId);
if (!user) {
  return res.status(404).send("No such user exists");
}
next()}
catch(error){
  res.status(500).send({msg:"Error",error:error.message})
}
}

const authMid= async function(req,res,next){
try{let token = req.headers["x-Auth-token"];
if(!token)token=req.headers["x-auth-token"];
let decodedToken = jwt.verify(token, "functionup-radon");
console.log(decodedToken)
let userToBeModified = req.params.userId
let userLoggedIn = decodedToken.userId
if(userToBeModified != userLoggedIn) return res.status(403).send({status:false, msg:"user logged in is not allowed to modify the requested user Data"})
next()}
catch(error){
  res.status(500).send({msg:"Error",error:error.message})
}
}
 module.exports.mid1=mid1
 module.exports.authMid=authMid
