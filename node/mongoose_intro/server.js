// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({
    extended: true
}));
// Require path
var path = require('path');
//Require express-session
var session = require('express-session');
// Require Mongoose
var mongoose = require('mongoose');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
/// use session
app.use(session({
    secret: "justneedstobeastringdoesnotmatterwhatyouputhere",
    resave: false,
    saveUninitialized: true
}))
// Routes
// Root Request
app.get('/', function (req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    User.find({}, function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.render('index', {users: users});
       }
    })
})
app.get('/users/new', function (req, res) {
    res.render('users_new')
})
// Add User Request 
app.post('/users', function (req, res) {
    console.log("POST DATA", req.body);
    // Adding the user from req.body to the database.
    // there are two ways to do it // the. save() way && the .create() way
    // the .save() way
    // create a new User with the name and age corresponding to those from req.body
    var user = new User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password
    });
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function (err, user) {
        // if there is an error console.log that something went wrong!
        if (err) {
            console.log('something went wrong');
            console.log(err);
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!')
            console.log(user);
        }
        return res.redirect('/users/new');
    })
})
app.get('/users/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
            return res.redirect('/')
        } else {
            res.render('show_user', {user: user})
        }
    })
})
//create a connection to the mongodb database using mongoose
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;
// register a model by passing in a schema
// create mongoose Model Schema
var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be blank'],
        minlength: [2, 'Name must be greater than 2 characters'],
    },
    age: {
        type: Number,
        min: [1, 'Age must be greater that one'],
    },
    email: {
        type: String,
        required: [true, 'Email cannot be blank'],
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    },
}, {
    timestamps: true
})
// We are setting this Schema in our Models as 'User'
mongoose.model('User', UserSchema);
// We are retrieving this Schema from our Models, named 'User'
var User = mongoose.model('User')
// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})