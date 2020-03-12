var Users = require('../controllers/users');

module.exports = function(app){
	app.get('/', Users.landingpage);
	app.post('/users', Users.create);
	app.post('/users/authenticate', Users.authenticate);
	app.get('/session', Users.isLoggedIn);
	app.get('/logout', Users.logout);
	app.get('/dashboard', Users.dashboard);
}