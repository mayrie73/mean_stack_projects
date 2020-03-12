var mongoose = require('mongoose');
var Book = mongoose.model('Book');

class BooksController {
	index(req, res) {
		Book.find({}, function(err, books){
			if(err){
				return res.json(err);
			}
			return res.json(books);
		})
	}
	create(req, res) {
		Book.create(req.body, function(err, book){
			if(err){
				return res.json(err);
			}
			return res.json(book);
		})
	}
	show(req, res){
		Book.findById(req.params.id, function(err, book){
			if(err){
				return res.json({ error: '404 - Task not found' });
			}
			return res.json(book);
		})
	}
	update(req, res) {
		Book.findByIdAndUpdate(req.params.id, { $set : req.body }, { new: true }, function(err, book){
			if(err){
				return res.json(err);
			}
			return res.json(book);
		})
	}
	destroy(req, res){
		Book.findByIdAndRemove(req.params.id, function(err, book){
			if(err){
				return res.json(err);
			}
			return res.json({
				'success': 'successfully deleted task'
			});
		})
	}
}

module.exports = new BooksController();
