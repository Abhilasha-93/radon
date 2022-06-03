const express = require('express');
const router = express.Router();


//Write a POST /players api that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data

let players = [
    {
        "name": "Manish",
        "dob": "1/9/1995",
        "gender": "male",
        "city": "jalandar",
        "sports": ["swimming"
        ],
    },
    {
        "name": "Gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": ["soccer"
        ],
    },
    {
        "name": "Lokesh",
        "dob": "1/5/1995",
        "gender": "male",
        "city": "mumbai",
        "sports": ["cricket"
        ],
    },

]

router.post('/players', function (req, res) {
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

    for (let i = 0; i < players.length; i++) {
        if (players[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }
    if (isNameRepeated) {
        res.send("this player is already exist")
    }
    else {
        players.push(newPlayer)
        res.send(players)
    }
})













router.get('/sol1', function (req, res) {
    let arr = [1, 2, 3, 5, 6, 7]
    let item = arr[0]
    let n = 0
    for (let i = 0; i < arr.length + 1; i++) {
        if (arr[i] == item) {
            item++
        } else {
            missingNumber = item
        }
    }
    const sumOfTheArray = (n * (n + 1)) / 2 - missingNumber
    res.send({ missingNumber });
});
router.get('/sol2', function (req, res) {
    let arr = [33, 34, 35, 37, 38]
    let item = arr[0]
    let n = 0
    for (let i = 0; i < arr.length + 1; i++) {
        if (arr[i] == item) {
            item++
        } else {
            missingNumber = item
        }
    }
    const sumOfTheArray = (n * (n + 1)) / 2 - missingNumber
    res.send({ missingNumber });
});
module.exports = router;