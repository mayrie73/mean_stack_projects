var  express = require("express");
var bodyParser = require('body-parser');
var port = 8000;
var app = express();

//middleware
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded())

app.use(express.static( __dirname + '/client-app/dist' ));

//mongoose file
require('./server/config/mongoose');
//routes
require('./server/config/routes')(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
})