var express = require("express");
var app = express();
// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
    response.send('<h1>Hello Express</h1>');
})
app.use(express.static(__dirname + "/static"));
app.set ('views', __dirname + '/views');
app.set('view engine', 'ejs');
// route to process new user form data:
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.  
    res.redirect('/')
});

// new code:
var session = require('express-session');
// original code:
var app = express();
// more new code:
app.use(session({secret: 'codingdojorocks'}));  // string for encryption
app.post('/users', function (req, res){
    // set the name property of session.  
    req.session.name = req.body.name;
    console.log(req.session.name);
    //code to add user to db goes here!
    // redirect the user back to the root route. 
    res.redirect('/');
});


app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});

app.get('/users',function(request, response){
    var users_array=[
        {name: "Michael", email:"michael@codingdojo.com"},
        {name: "Jay", email:"Jay@codingdojo.com"},
        {name: "Brendan", email:"brendan@codingdojo.com"},
        {name: "Andrew", email:"andrew@codingdojo.com"},   
    ];
    response.render('users',{users:users_array} );
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})