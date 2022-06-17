const { request } = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
 try{ let data = req.body;
  if(!body){res.status(400).send({msg:Bad_Request})}
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.status(201).send({ msg: savedData });}
  catch(error){
    res.status(500).send({msg:"Error",error:error.message})
  }
};

const loginUser = async function (req, res) {
  try{let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(401).send({status: false, msg: "username or the password is not corerct" });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  console.log(token)
  res.status(201).send({ status: true, token: token });}
  catch(error){
    res.status(500).send({msg:"Error",error:error.message})
  }
};

const getUserData = async function (req, res) {
 try{let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  res.status(200).send({ status: true, data: userDetails });}
  catch(error){
    res.status(500).send({msg:"Error",error:error.message})
  }
};

const updateUser = async function (req, res) {
  try{let userData = req.body;
  let userId=req.params.userId;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(201).send({ status: updatedUser, data: updatedUser });}
  catch(error){
    res.status(500).send({msg:"Error",error:error.message})
  }
}


const deleteUser = async function(req,res){
  try{let userId=req.params.userId;
  let updatedUser = await userModel.findByIdAndUpdate({ _id: userId },{$set:{isDelete:true}})
  res.status(200).send ({data :updatedUser})}
  catch(error){
    res.status(500).send({msg:"Error",error:error.message})
  }
};

const postMessage =async function (req,res){
  try{let userId=req.params.userId
  let user=await userModel.findById(req.params.userId)
  let message = req.body.message
  let updatedPost = user.posts
  updatedPost.push(message)
  let updatedUser = await userModel.findByIdAndUpdate({_id: user._id},{posts:updatedPost},{new:true})
  return res.status(201).send({status:true, data:updatedUser})}
  catch(error){
    res.status(500).send({msg:"Error",error:error.message})
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage