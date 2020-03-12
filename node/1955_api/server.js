var express = require("express");
var bodyParser = require('body-parser');
var port = 8000;
var app = express();

//middleware
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded())

//mongoose file
require('./server/config/mongoose');
//routes
require('./server/config/routes')(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})