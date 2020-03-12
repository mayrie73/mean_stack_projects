// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Require Mongoose
var mongoose = require('mongoose');
// Require Path
var path = require('path');
//Intergrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true}));
//set the static folder directory
app.use(express.static(path.join(__dirname, './static')));
//set the views folder directory
app.set('views', path.join(__dirname, './views'));
//set our View Engine to EJS
app.set('view engine', 'ejs');
 // Routes
app.get('/', function(req, res){
  res.render('index');
});
app.get('/result', function(req, res){
  Quote.find({}, function(err, results){
    if(err){ console.log(err); }
    res.render('quotes', { quotes: results}); 
  })
});
app.post('/quotes', function(req, res){
  console.log("Post Data", req.body);
  var quote = new Quote({name: req.body.name, quote: req.body.quote});
  quote.save(function(err){
    if(err){
      console.log('Something went wrong');
    }else {
      console.log('Successfully added a Quote!');
      res.redirect('/result')
    }
  })
});
//Create a connection to mongodb database using Mongoose
mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.Promise = global.Promise;
// Create mongoose Model Schema
var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String,
})
// Setting the created Schema in our Models as "Quote"
mongoose.model('Quote', QuoteSchema);
// Retrieving the created Schema from our Models, named "Quote"
var Quote = mongoose.model('Quote')
// Setting our server to listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})
