//import controllers
var Users = require('../controllers/users');
module.exports = function(app){
	app.get('/', Users.index);
	app.post('/users/new', Users.create);
	app.get('/users/remove/:name', Users.destroy);
	app.get('/users/:name', Users.show);
}

