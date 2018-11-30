// all of the api routes

// import the database
var db = require('../models')
module.exports = function (app, express) {
 // index route for the whole application
 app.get('/api/text', async function (req, res) {
  // display all of the texts in database

 })
 app.get('/api/text/:id', async function (req, res) {
  // get the text based on an ID in the database

 })
}
