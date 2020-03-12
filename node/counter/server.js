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
app.get('/showUser', function (req, res) {
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count= 1;
    }
    return res.render('showUser', {
        user: req.session.user,
        email: req.session.email,
        count: req.session.count
    })
})
app.get('/reload', function(req, res){
    req.session.count += 1;
    return res.redirect('showUser')
})
app.get('/reset', function(req, res){
    req.session.count = 0;
    return res.redirect('showUser')
})
app.post("/login", function (req, res) {
    // take the data from the form 
    // form data is always available at req.body
    console.log(req.body);
    req.session.user=req.body.name
    req.session.email= req.body.email
    req.session.count =req.body.count
    return res.redirect('/showUser')
    // save it into sessions
})
// post route for adding a user
app.post('/users', function (req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user to the database
    // Then redirect to the root route
    res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});