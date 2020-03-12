var mongoose = require('mongoose');
var User = mongoose.model('User');
class UsersController {
	index(req, res) {
		User.find({}, function(err, users) {
			if (err) {
				return res.json(err);
			}
			return res.json(users);
		})
	}
	create(req, res) {
		var user = new User({
			name: req.body.name
		});
		user.save(function(err, user){
			if (err) {
				return res.json({
					error:"Something went wrong"
				});
			}
			return res.json(user);
		})
	}
	show(req, res) {
		User.findOne({name: req.params.name}, function(err, user){
			if (err) {
				return res.json({
					error: '404 - user not found'
				});
			}
			return res.json(user);
		})
	}
	destroy(req, res) {
		User.remove({name: req.params.name}, function(err, user){
			if (err) {
				return res.json(err);
			}
			return res.json({
				'success': 'successfully deleted task'
			});
		})
	}
}

module.exports = new UsersController();
