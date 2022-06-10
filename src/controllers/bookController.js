const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

// validation for checking id:
const mongoose = require('mongoose')
const isValidObjectId = function (ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId)
}



const createBook= async function (req, res) {
    let book = req.body    
    console.log("ERROR:  ",book.publisher_id)
    if(!book.author_id){
        return res.send("Error - publisher_id does not exist")
    }
    if (!isValidObjectId (req.body.author_id) || !isValidObjectId(book.publisher_id )){
        return res.send("ERROR :- Id is not valid")
    }
    let author_check = await authorModel.findById(req.body.author_id)
    if(!author_check){
        return res.send("author_id does not exist")
    }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}


const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: books})
}

const updateBookCover = async function (req, res) {
 let cover = await bookModel.updateMany({$or : [{publisher : "Penguine" },{publisher : "HarperCollins" }]},{$set : {isHardCover : false}},{new:true})
    res.send({data : cover})
}

const increaseValue =async function (req,res){
    let updatedValue = await bookModel.updateMany({ratings : {$gt : 3}},{$inc : {prices : 10}},{new:true})
    res.send({data : updatedValue})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBookCover = updateBookCover
module.exports.increaseValue = increaseValue