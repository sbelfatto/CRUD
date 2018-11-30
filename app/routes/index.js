module.exports = function(app, express) {
 // basic route
 app.get('/', function (req, res) {
  res.send('Hello World')
 })
 // Import all Auth routes
 var apiRoutes = require('./api.js')(app, express)
}
