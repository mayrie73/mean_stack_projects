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
// set counter to 0
var counter = 0;
io.sockets.on('connection', function (socket) {
    console.log('client/socket is connected');
    console.log('client/socket id is:', socket.id);
    //listener
 socket.on("button_pushed", function(data){
     // increase counter by 1 when button is clicked
     counter += 1
     io.emit("push_response", {response:counter})
 })
 socket.on("reset_counter", function(data){
    // resetting counter to zero
    counter = 0;
    io.emit("reset_response", {response:counter})
})
})
