// Import express and path modules.
var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require("path");
// Create the express app.
var app = express();
// Define the static folder.
app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
/// POST request helper
app.use(bodyParser.urlencoded({
    extended: true
}));
/// session
app.use(session({
    secret: "justneedstobeastringdoesnotmatterwhatyouputhere",
    resave: false,
    saveUninitialized: true
}))
// Root route to render the index.ejs view.
app.get('/', function (req, res) {
    res.render("index");
})

// Start Node server listening on port 8000.
var server = app.listen(8000, function () {
    console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log('client/socket is connected');
    console.log('client/socket id is:', socket.id);
    //listener
    socket.on("posting_form", function (data) {
        console.log("received event from client");
    //emit
    var random_number = Math.floor((Math.random() * 1000) + 1);
    socket.emit('updated_message', {response: data});
    socket.emit('random_number', {response: random_number})
    
    })
})
