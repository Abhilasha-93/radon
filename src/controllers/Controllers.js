const { count } = require("console")
const AuthorModel = require("../models/authorModel")
const BookModel = require("../models/bookModel")

const createAuthor = async function (req, res) {
    let data = req.body
    let author_id = data.author_id
    if (!author_id) return res.send ({msg : "Author_id is mandatory in the request"})
    let savedData = await AuthorModel.create(data)
    res.send({ msg: savedData })
}
const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}
const getBookbyChetanBhagat = async function (req, res) {
    let data = await AuthorModel.find({ author_name: "Chetan Bhagat" }).select("author_id")
    let bookData = await BookModel.find({ author_id: data[0].author_id })
    res.send({ msg: bookData })
}

const authorOfBook = async function (req, res) {
    let data = await BookModel.findOneAndUpdate({ name: "Two States" }, { $set: { prices: 100 } }, { new: true })
    let authorData = await AuthorModel.find({ author_id: data.author_id }).select("author_name")
    let price = data.prices
    res.send({ msg: authorData, price })
}

const bookBetween50_100 = async function (req, res) {
    let data = await BookModel.find({ prices: { $gte: 50, $lte: 100 } }).select({ author_id: 1 }) //array
    let Res = data.forEach((element) => {
    console.log(element);
    })
    res.send({ msg:Res })
}


module.exports.createAuthor = createAuthor
module.exports.createBook = createBook
module.exports.getBookbyChetanBhagat = getBookbyChetanBhagat
module.exports.authorOfBook = authorOfBook
module.exports.bookBetween50_100 = bookBetween50_100