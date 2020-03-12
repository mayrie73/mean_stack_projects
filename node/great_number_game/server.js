//require my npm modules
// require express
var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
//set up the middleware// use it
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
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
/// ROUTES
// root route to render the index.ejs view
app.get('/', function (req, res) {
    return res.render("index")
});

app.get('/', function (req, res) {

    var guess= req.session.guess;
    var randomNumber= Math.floor(Math.random()*101);
    var message = " ";

    if (req.session.guess == req.session.randomNumber){
        req.session.message += "You are Correct! The random number was", + randomNumber
        return res.render('index');
    } 
    if (req.session.guess < req.session.randomNumber){
        req.session. message += "You guess was too low!" 
        return res.render("index");
    }
    if (req.session.guess > req.session.randomNumber){
        req.session. message += "You guess was too high!"
        return res.render("index");
    }
        return res.render('index', {
        guess: req.session.guess,
        randomNumber: req.session.randomNumber,
    })
})
app.post("/", function (req, res) {
    // take the data from the form 
    // form data is always available at req.body
    console.log(req.body);
    req.session.guess=req.body.guess
    req.session.randomNumber= req.body.randomNumber
    return res.redirect('index')
    // save it into sessions
})
// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});