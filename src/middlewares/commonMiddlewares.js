const mongoose = require('mongoose')

const isValidObjectId = function (ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId)
}

const mid1= function ( req, res, next) {
    let data=req.headers.isfreeappuser
    if(!data){
        res.send({msg:"The request is missing a mandatory header"})
    } else{
    next()}
    console.log(data)
}

const mid2= async function(req,res,next){
    let data=req.body
    let productId=req.body.product_id 
    let userId=req.body.user_id
    if (!productId){
        return res.send({ msg: 'ProductId is mandatory in the request' })}
    if (!userId){
        return res.send({ msg: 'userId is mandatory in the request' })}                  
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
    next()
}
module.exports.mid1= mid1
module.exports.mid2= mid2
