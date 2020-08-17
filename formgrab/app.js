var express = require('express')
var multer = require('multer')

var app = express()

app.use(multer().array())
 
// create application/x-www-form-urlencoded parser

 
app.get('/', (req,res) => {
  	res.sendFile(__dirname + "/form.html")
})

// POST /login gets urlencoded bodies
app.post('/upload', function (req, res) {
    console.log(req.body.upload)
    console.log(req.body.myname)
    console.log(req.files)
    res.send('Hi' + req.body.myname  +  ' uploading, ' + req.body.upload)
})

app.listen(3000, () => {
    console.log(`example app listening at localhost${3000}`)
})

 
