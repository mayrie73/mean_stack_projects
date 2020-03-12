var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var port = 8000;
var app = express();

// middleware
app.use(express.static(__dirname + '/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: "thiscanbeanystringvalue",
    resave: false,
    saveUninitialized: true
}))


var server = app.listen(8000, function () {
    console.log("listening on port 8000");
});
app.get('/', function (req, res) {
    res.render('index')
})
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log('client/socket is connected');
    console.log('client/socket id is:', socket.id);
    //listener
    socket.on("button_clicked", function (data) {
        console.log('received event from client')
    //emit
    // FULL BROADCAST:
     io.emit( "button_response", {msg:"Somebody clicked a button"});
    })
    //listener
    socket.on("form_submission", function (data) {
        console.log("received event from client");
    //emit
        io.emit('form_response', { msg:`${data.user} filled out the form`})
    })
})