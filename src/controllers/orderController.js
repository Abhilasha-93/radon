const { count } = require("console")
const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const mongoose = require('mongoose')
/*
const isValidObjectId = function (ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId)
}


const createOrder= async function (req, res)  {  
    let data = req.body
    console.log(data)
    let productId = req.body.product_id 
    let userId = req.body.user_id
    console.log(productId)
    console.log(userId)
    if (!productId){return res.send({ msg: 'ProductId is mandatory in the request' })}
    if (!userId){return res.send({ msg: 'userId is mandatory in the request' })}                  
    if (!isValidObjectId (userId) || !isValidObjectId(productId )){
        return res.send("ERROR :- Id is not valid , Please enter a valid Id")
    }
    let product_check  = await productModel.findById(req.body.product_id)
    if(!product_check){
        return res.send("Error - This product_id does not exist")
    }
    let user_check = await userModel.findById(req.body.user_id)
    if(!user_check){
        return res.send("Error - This user_id does not exist")
    }
    let orderCreated = await orderModel.create(createOrder)
    res.send({data: orderCreated})
}  */

const createOrder=async function(req,res){
    let data=req.body
    let check_isfreeappuser=req.headers.check_isfreeappuser
    let balancedata=await userModel.find({name:"maya"}).selct({balance:1,id:0})
    let finalbalance=balancedata[0]

    if(finalbalance.balance>=100 && check_isfreeappuser==="false"){
        let data =await orderModel.findOneAndUpdate({balance:100},{balance:0},{new:true})
        let orderData=await orderModel.create(data)
        return res.send({data:orderData})
    }
    if(finalbalance.balance<100){
        return res.send("Insufficient Balance")
    }
    if(check_isfreeappuser==="true"){
        let savedData=await orderModel.create(data)
    return res.send({data:savedData})    
    }
}

const getOrderData = async function (req, res) {
    let Data = await orderModel.find().populate('user_id').populate('product_id')
    res.send({ msg: Data })
}


module.exports.createOrder = createOrder
module.exports.getOrderData = getOrderData








/*
const createOrder = async function (req, res) {
    let data = req.body
    let productId = data.product_id
    if (!productId) return res.send({ msg: 'ProductId is mandatory in the request' })
    let userId = data.user_id
    if (!userId) return res.send({ msg: 'userId is mandatory in the request' })
    let savedData = await orderModel.create(data)
    res.send({ data: savedData })
}
*/