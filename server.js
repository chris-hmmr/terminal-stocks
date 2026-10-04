var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');

app.use(bodyParser());

require('./app/routes.js')(app);

// Listen only when run directly (npm start); Vercel imports the exported app instead.
if (require.main === module) {
  app.listen(port);
  console.log('Application server is up and running on port: ' + port);
}

module.exports = app;