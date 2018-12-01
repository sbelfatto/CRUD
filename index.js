// start up file with all the requirments

// import the .env file
require('dotenv').config()

// Express config 
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 100000}))

// import the database models 
var models = require('./app/models') 

// import all of the routes
var routes = require('./app/routes/index.js')(app, express)

// sync the database and only if it is sucessfull spin up the server
models.sequelize.sync().then( function () {
 console.log('Nice! Database looks fine')
 // tell the app server to listen on port 3000
 app.listen(3000)
}).catch(function (err) {
 // the database sync did not complete sucessfully so trow the error and close up shop
 console.log(err, "Something went wrong with the Database Update!")
})