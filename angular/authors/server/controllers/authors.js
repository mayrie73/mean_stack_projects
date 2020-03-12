var mongoose = require('mongoose');
var Author = mongoose.model('Author');

class AuthorsController {
	index(req, res) {
		Author.find({}, function(err, authors){
			if(err){
				return res.json(err);
			}
			return res.json(authors);
		})
	}
	create(req, res) {
		Author.create(req.body, function(err, author){
			if(err){
				return res.json(err);
			}
			return res.json(author);
		
		})
	}
	show(req, res){
		Author.findById(req.params.id, function(err, author){
			if(err){
				return res.json({ error: '404 - Task not found' });
			}
			return res.json(author);
		})
	}
	update(req, res) {
		Author.findByIdAndUpdate(req.params.id, { $set : req.body }, { new: true }, function(err, author){
			if(err){
				return res.json(err);
			}
			return res.json(author);
		})
	}
	destroy(req, res){
		Author.findByIdAndRemove(req.params.id, function(err, author){
			if(err){
				return res.json(err);
			}
			return res.json({
				'success': 'successfully deleted author'
			});
		})
	}
}

module.exports = new AuthorsController();
