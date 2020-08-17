var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })
 
app.get('/', (req,res) => {
    res.send("Hi there coder")
})

// POST /login gets urlencoded bodies
app.post('/upload', urlencodedParser, function (req, res) {
    console.log(req.body)
    res.send('uploading, ' + req.body.upload)
})

app.listen(3000, () => {
    console.log(`example app listening at localhost${3000}`)
})

 
