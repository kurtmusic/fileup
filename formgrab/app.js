var express = require('express')
var multer = require('multer')
var bodyParser = require('body-parser')

var storage = multer.diskStorage({
	destination: function (req, file, cb){
	cb(null, __dirname + '/uploads')
	},
	filename: function (req, file, cb){
	cb(null, file.originalname)
	}
})

var upload = multer({ storage: storage })
var app = express()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended:true}) 


app.get('/', (req,res) => {
  	res.sendFile(__dirname + "/form.html")
})


app.post('/upload', upload.single('upload'), (req, res) => {
    console.log(req.body.myname)
    console.log(req.file)
    res.send('Hi' + req.body.myname  +  ' uploading, ' + req.file)
})

app.get('/textform', (req, res) => {
	res.sendFile(__dirname + "/textform.html")
})

app.post('/textformUpload', urlencodedParser, (req, res) => {
	console.log(req.body)
})

app.get('/getform', (req,res) => {
	res.sendFile(__dirname + "/textform.html")
})

app.get('/getreq', (req,res) => {
	console.log(req.query)
	res.send(req.query.ice)
})

app.get('/addcontent', (req, res) => {
	res.sendFile(__dirname + "/projectform.html")
})

app.post('/addcontent', upload.single('inputFile'), (req, res) => {
	console.log(req.body)
	console.log("Title: " + req.body.inputTitle + " description: " + req.body.inputDescription + " chosen category: " + req.body.inputRadio + " keywords: " + req.body.inputKeyword)
	var ethlinkTitle = req.body.inputTitle.toLowerCase().split(' ').join('-')
	var keywordArray = req.body.inputKeyword.split(', ')
	console.log("assigned etherpad title: " + ethlinkTitle + " keyword array: " + keywordArray)
	console.log("array entry 1: " + keywordArray[0] + "array entry 2: " + keywordArray[1])
	console.log(req.file)
	res.send("file uploaded succesfully")
})


app.listen(3000, () => {
	console.log(`example app listening at localhost${3000}`)
})

