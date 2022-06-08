const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const authorModel= require("../models/authorModel.js")
const Controllers= require("../controllers/Controllers")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", Controllers.createAuthor)
router.post("/createBook", Controllers.createBook)
router.get("/getBookbyChetanBhagat",Controllers.getBookbyChetanBhagat)
router.get("/authorOfBook",Controllers.authorOfBook)
router.get ("/bookBetween50_100",Controllers.bookBetween50_100)


module.exports = router;