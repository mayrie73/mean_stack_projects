var  mongoose = require("mongoose");
var fs = require('fs');

mongoose.connect('mongodb://localhost/login_registration');
mongoose.Promise = global.Promise;
var models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach((file) => {
	if(file.includes('.js')){
		console.log(`loading ${file}...`);
		require(`${models_path}/${file}`);
	}
})
