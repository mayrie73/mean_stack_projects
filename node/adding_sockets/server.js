// Import express and path modules.
var express = require('express');
var path = require('path');
//create the express app.
var app = express();
//define the static folder.
app.use(express.static(path.join(__dirname, "./static")));
//set up ejs templating and define the views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
//Root route to render the index.ejs view
app.get('/', function (req, res) {
    res.render('index');
});
//start Node Server listening on port 8000
var server = app.listen(8000, function () {
    console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    socket.on("button_clicked", function (data) {
    console.log('Someone clicked a button!  Reason: ' + data.reason);
    socket.emit('server_response', {
    response: "sockets are the best!"
    });
    })    // all the server socket code goes in here
})