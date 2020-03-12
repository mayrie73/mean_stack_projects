//import controllers
var Books = require('../controllers/books');

module.exports = function(app){
	app.get('/books', Books.index);
	app.post('/books', Books.create);
	app.get('/books/:id', Books.show);
	app.put('/books/:id', Books.update);
	app.delete('/books/:id', Books.destroy);
}