var Users = require('../controllers/users');
var Posts = require('../controllers/posts');

module.exports = function(app){
	app.get('/', Users.index);
	app.get('/posts', Posts.index);
}