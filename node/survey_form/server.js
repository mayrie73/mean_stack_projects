// require my npm modules
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
    return res.render('index')
})
app.get('/result', function (req, res) {
    return res.render('result', { 
        name: req.session.name,
        location: req.session.location,
        language: req.session.language,
        comment: req.session.comment
    })
})
app.post('/result', function (req, res) {
    // take the data from the form 
    // form data is always available at req.body
    console.log(req.body);
    req.session.name = req.body.name
    req.session.location = req.body.location
    req.session.language = req.body.language
    req.session.comment = req.body.comment
    return res.redirect('result')
    // save it into sessions
})
// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});