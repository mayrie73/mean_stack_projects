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
app.get('/', function(req, res){
    Post.find({}).populate('comments').exec(function(err, posts){
        console.log(posts);
        res.render('index', {posts: posts});
    })
});
app.post('/posts', function(req, res){
    var new_post = new Post(req.body);
    console.log(new_post);
    new_post.save(function(err, results){
        if(err){
            console.log(err);
            console.log('broken');
        }else{
            res.redirect('/');
        }
    })
});
// route for getting a particular post and comments
app.get('/comments/:id', function (req, res){
 Post.findOne({_id: req.params.id}).populate('comments').exec(function(err, post) {
      res.render('post', {post: post});
        });
});
// route for creating one comment 
app.post('/comments/:id', function (req, res){
  Post.findOne({_id: req.params.id}, function(err, post){
         var comment = {name: req.body.name, comment: req.body.comment, post: req.params.id};
         var comment = new Comment(req.body);
         comment._post = post._id;
         post.comments.push(comment);
         comment.save(function(err){
                 post.save(function(err){
                       if(err) { console.log('Error'); } 
                       else { res.redirect('/'); }
                 });
         });
   });
 });

//create a connection to the mongodb database using mongoose
mongoose.connect('mongodb://localhost/dojo_messageboard');
mongoose.Promise = global.Promise;
// register a model by passing in a schema
// create Message Model Schema
var PostSchema = new mongoose.Schema({
    post: {
        type: String,
        required: [true, 'message post cannot be blank'],
        minlength: [4, 'message post  must be greater than 4 characters'],
    },
    name : {
        type: String,
        required: [true, 'name cannot be blank'],
        minlength: [4, 'name must be greater than 4 characters'],
    },
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
}, {timestamps: true})
// We are setting this Schema in our Models as 'Message'
mongoose.model('Post', PostSchema);
// We are retrieving this Schema from our Models, named 'User'
var Post = mongoose.model('Post')
// create Comment Model Schema
var CommentSchema = new mongoose.Schema({
    comment : {
        type: String,
        required: [true, 'comment post cannot be blank'],
        minlength: [4, 'comment post  must be greater than 4 characters'],
    },
        name : {
        type: String,
        required: [true, 'name post cannot be blank'],
        minlength: [4, 'name  must be greater than 4 characters'],
    },
	post: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post'
	}]
}, {timestamps: true})
// We are setting this Schema in our Models as 'Message'
mongoose.model('Comment', CommentSchema);
// We are retrieving this Schema from our Models, named 'User'
var Comment = mongoose.model('Comment')

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})