//use express framework

var express = require('express')
var app = express()

//use mysql module
const mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'downloaddb'
})

//sets a path for files necessary for middleware
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

var id = 14

//query an id to the sql database
app.use('', (req, res) => {
    var sql = mysql.format("SELECT * FROM games WHERE game_id=?", [id]);
    connection.query(sql, (error, result) => {
        if (error) {
            throw error;
        } else {
            res.render('download', { result })
        }
    })
})

//listens to a port
app.listen(3000)