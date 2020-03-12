//get the model
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var User = mongoose.model('User');

class UsersController {
	dashboard(req, res){
		if(!req.session.user_id){
			return res.redirect('/');
		}
		res.render('dashboard', { session: req.session })
	}
	homepage(req, res){
		return res.render('index');
	}
	create(req, res) {
		req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
		User.create(req.body, function(err, user){
			if(err){
				console.log(err);
			}
			req.session.user_id = user._id;
			return res.redirect('/dashboard');
		})
	}
	authenticate(req, res){
		User.findOne({ email: req.body.email }, function(err, user){
			if(err){
				//if using Angular
				return res.json(err);
				//if using ejs
				// return res.redirect('/')
			}
			if(user && user.authenticate(req.body.password)){
				req.session.user_id = user._id;
				//went to next phase of app
				// return res.json(user);
				return res.redirect('/dashboard')
			}
			return res.json({
				'errors': 'invalid credentials'
			})
		})
	}
	isLoggedIn(req, res){
		if(req.session.user_id){
			//if using Angular
			return res.json({
				'status': true
			})
			//if using ejs
			// send back a boolean
		} else {
			//if using ejs
			//redirect to the login page

			//if using Angular
			return res.json({
				'status': false
			})
		}
	}
	logout(req, res){
		delete req.session.user_id;
		//if using Angular
		// return res.json({
		// 	'status': true
		// })

		//if using ejs
		//redirect back to the root route
		return res.redirect('/');
	}
}

module.exports = new UsersController();
