const { count } = require("console")
const productModel= require("../models/productModel")

const createProduct= async function (req, res) {
    let data = req.body
    let savedData= await productModel.create(data)
    res.send({data: savedData})
}

const getProductData= async function (req, res) {
    let allProduct= await productModel.find()
    res.send({msg: allProduct})
}


module.exports.createProduct= createProduct
module.exports.getProductData= getProductData