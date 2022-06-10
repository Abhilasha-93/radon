const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const publisherController= require("../controllers/publisherController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createPublisher", publisherController.createPublisher  )

router.get("/getPublisherData", publisherController.getPublisherData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

 router.put("/updateBooksCover",bookController.updateBookCover)

router.put("/increaseValue", bookController.increaseValue)

module.exports = router;