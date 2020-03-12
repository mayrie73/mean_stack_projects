var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bike = mongoose.model('Bike');

class UsersController {
	session(req, res) {
		if (req.session.user_id) {
			return res.json({
				status: true,
				user_id: req.session.user_id
			})
		}
		return res.json({
			status: false
		})
	}
	index(req, res) {
		User.find({}, function (err, users) {
			if (err) {
				return res.json(err);
			}
			return res.json(users);
		})
	}
	create(req, res) {
		User.create(req.body, function (err, user) {
			if (err) {
				return res.json(err);
			}
			return res.json(user);

		})
	}
	show(req, res) {
		User.findById(req.params.id, function (err, user) {
			if (err) {
				return res.json({
					error: '404 - User not found'
				});
			}
			return res.json(user);
		})
	}
	update(req, res) {
		User.findByIdAndUpdate(req.params.id, {
			$set: req.body
		}, {
			new: true
		}, function (err, user) {
			if (err) {
				return res.json(err);
			}
			return res.json(user);
		})
	}
	destroy(req, res) {
		User.findByIdAndRemove(req.params.id, function (err, user) {
			if (err) {
				return res.json(err);
			}
			return res.json({
				'success': 'successfully deleted user'
			})
		})
	}
	authenticate(req, res){
	User.findOne({ email: req.body.email }, function (err, user) {
				if (err) {
					return res.json(err);
				}
				if (user && user.authenticate(req.body.password)) {
					req.session.user_id = user._id;
					return res.json(user);
				}
				return res.json({
					errors: {
						login: {
							message: 'Invalid credentials'
						}
					}
				})
			})
		}
	logout(req, res){
			if (req.session.user_id) {
				delete req.session.user_id
			}
			return res.json({
				status: true
			})
		}
	}

module.exports = new UsersController();