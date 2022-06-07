const { count } = require("console")
const bookModel = require("../models/bookModel")
//const BookModel= require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({ msg: savedData })
}

const booklist = async function (req, res) {
    let allBooks = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: allBooks })
}

const getBooksInYear = async function (req, res) {
    let data = req.body.year
    let allBooks = await bookModel.find({ year: data })
    res.send({ msg: allBooks })
}

const getParticularbooks = async function (req, res) {
    let condition = await bookModel.find(req.body)
    res.send({ msg: condition })
}

const getXINRBooks = async function (req, res) {
    let allBooks = await bookModel.find({ "prices.INR": { $in: ["100", "200", "500"] } })
    res.send({ msg: allBooks })
}

const getRandomBooks = async function (req, res) {
    let allBooks = await bookModel.find({ stockAvailable: true, totalPages: { $gt: 500 } })
    res.send({ msg: allBooks })
}

module.exports.createBook = createBook
module.exports.booklist = booklist
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularbooks = getParticularbooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks 