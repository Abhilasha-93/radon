const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", bookController.createBook)
router.get("/booklist", bookController.booklist)
router.get("/getBooksInYear", bookController.getBooksInYear)
router.get("/getParticularbooks", bookController.getParticularbooks)
router.get("/getXINRBooks", bookController.getXINRBooks)
router.get("/getRandomBooks", bookController.getRandomBooks)

module.exports = router;