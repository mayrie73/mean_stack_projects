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
    // This is where we will retrieve the lions from the database and include them in the view page we will be rendering.
    Lion.find({}, function (err, lions) {
        if (err) {
            console.log(err);
        } else {
            res.render('index', {lions: lions});
       }
    })
})
app.get('/lions/new', function (req, res) {
    res.render('lions_new')
})
// Add Lion Request 
app.post('/lions', function (req, res) {
    console.log("POST DATA", req.body);
    // create a new Lion with the name and age corresponding to those from req.body
    var lion = new Lion({
        name: req.body.name,
        age: req.body.age
       
    });
    // save that new lion to the database 
    lion.save(function (err, lion) {
        if (err) {
            console.log('something went wrong');
            console.log(err);
            return res.redirect('/');
        } else { 
            console.log('successfully added a user!')
            console.log(lion);
        }
        return res.redirect('/lions/new');
    })
})
app.get('/lions/:id', function (req, res) {
    Lion.findById(req.params.id, function (err, lion) {
        if (err) {
            console.log(err);
            return res.redirect('/')
        } else {
            res.render('show_lion', {lion: lion})
        }
    })
})

app.get('/edit/:id', function (req, res) {
    Lion.find({_id: req.params.id}, function (err, lion) {
        if (err) {
            console.log(err);
            return res.redirect('/')
        } else {
            res.render('edit_lion', {lion: lion})
        }
    })
})
app.post('/lions/:id', function(req, res, next) {
    Lion.update({$set:{name :req.body.name, age: req.body.age}}, function (err){
        if(err){
            console.log(err);
            return res.redirect("/")
        }else{
            console.log('successfully updated a lion!')
            return res.redirect('/')
        }
    })
}) 
app.post('/delete/:id', function(req, res) {
    Lion.remove({ _id: req.params.id }, function (err){
        if(err){
            console.log(err);
            return res.redirect("/")
        }else{
            console.log('successfully deleted a lion!')
            return res.redirect('/')
        }
    })
})
//create a connection to the mongodb database using mongoose
mongoose.connect('mongodb://localhost/lion');
mongoose.Promise = global.Promise;
// register a model by passing in a schema
// create mongoose Model Schema
var LionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be blank'],
        minlength: [2, 'Name must be greater than 2 characters'],
    },
    age: {
        type: Number,
        min: [1, 'Age must be greater that one'],
    },
}, {
    timestamps: true
})
// We are setting this Schema in our Models as 'User'
mongoose.model('Lion', LionSchema);
// We are retrieving this Schema from our Models, named 'User'
var Lion = mongoose.model('Lion')
// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})