const express = require('express');
const externalModule = require('../logger/logger');
const secondfile = require('../util/helper');
const thirdfile = require('../validator/formatter');
const router = express.Router();

router.get('/test-me', function (req, res) {
   
    externalModule.welcome()
    secondfile.printDate()
    secondfile.printMonth()
    secondfile.getBatchInfo()
    thirdfile.trimfunc()
    thirdfile.lowerfunc()
    thirdfile.upperfunc()
});


module.exports = router;

