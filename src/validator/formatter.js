    const express = require('express');
    const {route} = require('express/lib/application');
    const externalModule = require('..logger/logger.js');
    const helperModule = require('../util/helper');
    const lodash = require('lodash')
    const router = lodash.router();
    
    
    router.get('/hello', function (req, res) {
    //problem 4/1
    
    let array = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    console.log(_.chunk(array, 3))


    //problem 4/2
    
    let odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log(_.tail(odd))
   
   
    //problem 4/3
   
    let a = [1, 85, 33, 4, 6, 2, 5]
    let b = [2, 6, 3, 8, 9, 87, 9]
    let c = [5, 3, 9, 7, 666, 58, 8]
    let d = [25, 3, 6, 9, 7, 8, 5]
    let e = [6, 8, 39, 3, 6, 4, 5]
    console.log(_.union(a, b, c, d, e))
    
    //problem 4/5

    let pairs = [
        ['horror', 'The Shining'],
        ["drama", "Titanic"],
        ["thriller", "Shutter Island"],
        ["fantas", "Pans Labyrinth"]
    ]

    console.log(_.fromPairs(pairs))


    res.send('Hello there!')
});

module.exports = router;