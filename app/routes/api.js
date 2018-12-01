// all of the api routes

// import the database
var db = require('../models')
module.exports = function (app, express) {
 // index route for the whole application
 app.get('/api/text', async function (req, res) {
  // display all of the texts in database
  var results = await db.api.findAll()
  res.json(results)
 })
 // display text in database
 app.get('/api/text/:id', async function (req, res) {
  // get the text based on an ID in the database
  var textId = req.params.id 
  var queryResult = await db.api.findOne({
      where: {
          id: textId
      }
  })
  res.json(queryResult)
 })
// update text in the database
 app.put('/api/text/:id', async function (req, res) {
  // get the text based on an ID in the database
  var text = req.body.text
  var textId = req.params.id 
  var queryResult = await db.api.findOne({
      where: {
          id: textId
      }
  })
  queryResult.update({
      text: text
  })
  res.json(queryResult)
 })
 // add text to the database
app.post('/api/text', async function (req, res) {
    var text = req.body.text
    var queryResult = await db.api.create({
        text: text
    })
res.json(queryResult)
})
}
