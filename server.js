var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

app.use(express.urlencoded({extended: true}));
app.use(express.json({limit: '50mb'})) // To parse the incoming requests with JSON payloads
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors())
app.use(bodyParser())
app.set("view engine", "ejs");


//const bodyParser = require('body-parser')


port = process.env.PORT || 5000



User = require('./models/userListModel')
ImageSchema = require('./models/imageModel')

mongoose.Promise = global.Promise
const uri = process.env.MONGO_URI
mongoose.connect(uri, function(error){
    if(error) throw error
    console.log('Successfully connnected')
})


var routes = require('./routes/imageListRoutes');
var userRoutes = require('./routes/userRoutes');

routes(app)
userRoutes(app)

app.listen(port)
console.log('Started on : ' + port)