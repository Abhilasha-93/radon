const express = require('express');
const router = express.Router();
const weatherController= require("../controllers/weatherController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



//router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

router.get("/getWeather",weatherController.getWeather)
router.get("/getLondonTemp/:appid",weatherController.getLondonTemp)
router.get("/sortCities", weatherController.sortCities)



module.exports = router;