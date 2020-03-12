//get the model
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var User = mongoose.model('User');

class UsersController {
	dashboard(req, res){
		if(!req.session.user_id){
			return res.redirect('/');
		}
		res.render('dashboard', { session: req.session})
	}
	landingpage(req, res){
		return res.render('index');
	}
	create(req, res) {
		
		req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
		User.create(req.body, function(err, user){
			if(err){
				console.log(err);
			return res.json({
				'errors': 'Invalid Registration Information. All fields must be completed!'
			})
			}
			req.session.user_id = user._id;
			return res.redirect('/dashboard');
		})
	}
	authenticate(req, res){
		User.findOne({ email: req.body.email }, function(err, user){
			if(err){
			return res.redirect('/')
			}
			if(user && user.authenticate(req.body.password)){
				req.session.user_id = user._id;
				return res.redirect('/dashboard')
			}
			return res.json({
				'errors': 'invalid credentials'
			})
		})
	}
	isLoggedIn(req, res){
		if(req.session.user_id){
			return res.json({
				'status': true
			})
			
		} else {
			return res.json({
				'status': false
			})
		}
	}
	logout(req, res){
		delete req.session.user_id;
		return res.redirect('/');
	}
}
module.exports = new UsersController();

