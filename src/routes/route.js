const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

//1
router.get('/movies', function (req, res) {
    const movies=['Rang de basanti','The shining','Lord of the rings','Batman begins']
    for(var i=0;i<movies.length+1;i++){
        
    }
    console.log(movies)
    res.send(movies)
});

//2 and 3
router.get('/movies/:indexNumber',function(req,res){
    const movies=['Rang de basanti','The shining','Lord of the rings','Batman begins']
    let len=movies.length
    let item=movies[req.params.indexNumber]
    if(req.params.indexNumber<len){
        console.log(item)
        res.send(item)}
    else {
        console.log('ERROR:THERE IS NO MOVIE')
        res.send('ERROR:THERE IS NO MOVIE')
    }
});

//4 and 5
router.get('/films/:id',function(req,res){
const movies= [{
    "id": 1,
    "name": "The Shining"
   }, {
    "id": 2,
    "name": "Incendies"
   }, {
    "id": 3,
    "name": "Rang de Basanti"
   }, {
    "id": 4,
    "name": "Finding Nemo"
   }]
   JSON.stringify(req.params)
   let id=movies.id
   let item=movies[req.params.id]

   
   if(req.params.id<4){
       console.log(item)
       res.send(item)
   }
   else{
       console.log('ERROR:No movie exists with this id')
       res.send('ERROR:No movie exists with this id')
       
   }
});

module.exports = router;
