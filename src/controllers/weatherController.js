let axios = require("axios")

let getWeather = async function (req, res) {
    try {
        let id = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getLondonTemp = async function (req,res){
    try{
        let id = req.params.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${id}`
        }
        let result = await axios(options);
        console.log(result)
        let londonTemp = result.data.main.temp
        console.log(londonTemp)
        res.status(200).send({ msg: londonTemp, status: true })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let sortCities =async function (req,res){
    try{
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray=[]
        for (i=0; i<cities.length; i++){
            let obj = {city: cities[i]}
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=2992099c9c5adf2b582a0cd8b14ac96f`)
            console.log(result.data.main.temp)
            obj.temp=result.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort(function(a,b){return a.temp - b.temp})
        console.log(sorted)
        res.status(200).send({status : true,data :sorted})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getWeather = getWeather
module.exports.getLondonTemp = getLondonTemp
module.exports.sortCities = sortCities
