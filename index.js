const express = require('express')
const app = express()
const bodyParse = require('body-parser')

app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())


var DB = {
    games: [
        {
            id: 1232,
            title: 'Call of Duty',
            year: 2323,
            price: 68,
        },
        {
            id: 213,
            title: 'CounterStrike',
            year: 5345,
            price: 432,
        },
        {
            id: 343,
            title: 'FIFA20',
            year: 2000,
            price: 682,
        },
    ]
}

//End points
app.get('/games', (req, res) => {
    res.statusCode = 200
    res.json(db.games)
})

app.get('/game/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)
        var game = DB.games.find(g => { g.id == id })
        if (game != undefined) {
            res.statusCode(200)
            res.json(game)
        } else {
            res.statusCode(404)
        }
    }

})

app.post('/game', (req, res) => {
    var { title, price, year } = req.body;

    DB.games.push();


})



app.listen(3000, () => {
    console.log("api false")
})