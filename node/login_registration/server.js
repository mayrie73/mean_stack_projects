var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var  port = 8000;
var app = express();

//middleware
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');

app.use(express.static(__dirname + '/client/static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	secret: 'thisisasecretcanbeanystring',
	resave: false,
	saveUninitialized: true
}))

//mongoose
require('./server/config/mongoose');

//routes
require('./server/config/routes')(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
})