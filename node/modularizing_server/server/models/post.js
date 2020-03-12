var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	post: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
})
// Register the model
mongoose.model('Post', PostSchema);