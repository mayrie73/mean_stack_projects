var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

//set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client/static'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');

//import the database file
require('./server/config/mongoose');

//import the routes file
require('./server/config/routes')(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})