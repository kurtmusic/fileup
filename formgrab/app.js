var express = require('express')
var multer = require('multer')
var upload = multer({dest: 'uploads/'})
// include body parser for non multipart/form-data
var app = express()

//app.use(multer().array()) use it for every route (not this)
 
// create application/x-www-form-urlencoded parser

app.get('/', (req,res) => {
  	res.sendFile(__dirname + "/form.html")
})

// POST /login gets urlencoded bodies
app.post('/upload', upload.single('upload'), function (req, res) {
    console.log(req.body.myname)
    console.log(req.file)
    res.send('Hi' + req.body.myname  +  ' uploading, ' + req.file)
})

app.listen(3000, () => {
    console.log(`example app listening at localhost${3000}`)
})

 
