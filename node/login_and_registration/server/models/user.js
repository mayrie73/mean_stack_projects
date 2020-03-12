var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

let UserSchema = new mongoose.Schema({
	first_name: {
		type: String,
		minlength: [2, 'First name must be greater than 2 characters'],
		required: [true, 'First name cannot be blank']
	},
	last_name: {
		type: String,
		minlength: [2, 'Last name  must be greater than 2 characters'],
		required: [true, 'Last name cannot be blank']
	},
	email: {
		type: String,
		unique: [true, "Email already exists."],
		required: [true, 'Enter a valid email']
	},
	password: {
		type: String,
		minlength: [8, 'Password must be greater than 8 characters'],
		required: [true, 'Password field cannot be blank']
	},
	password_confirmation: { 
		type: String,
		required: true
	},
	birthday:{
		type: Date,
		required: [true, 'Birthday cannot be blank']
	}
}, { timestamps: true });

UserSchema.methods.authenticate = function(password){
	return bcrypt.compareSync(password, this.password);
}

mongoose.model('User', UserSchema);
