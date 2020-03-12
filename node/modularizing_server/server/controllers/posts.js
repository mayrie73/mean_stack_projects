var mongoose = require('mongoose');
var Post = mongoose.model('Post');

class PostsController {
	index(req, res){
		res.render('posts/post.ejs')
	}
}

module.exports = new PostsController()