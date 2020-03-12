// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var users = [
    {id: 1, name: "Mary", email: "mary@gmail.com"},  
    {id: 2, name: "Chasity", email: "chasity@gmail.com"},
    {id: 3, name: "Charles", email: "charles@gmail.com"}
   ];
// root route to render the index.ejs view
app.get('/', function(req, res) {
    //pass data through to the view
 res.render("index.ejs",{"users": users});
})
// post route for adding a user
app.post('/users', function(req, res) {
 console.log(req.body.name);
  // This is where we would add the user to the database
 var newId = users[users.length-1].id +1
 var userObj = {
     id: newId,
     name: req.body.name,
     email: req.body.email
 }
 // Then redirect to the root route
 users.push(userObj);
 res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
