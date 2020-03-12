var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://localhost/pokemonapi');
//overwrite the Promise library
mongoose.Promise = global.Promise;

var models_path = __dirname + '/../models';
//loops through the files
fs.readdirSync(models_path).forEach((file) => {
	if(file.includes('.js')){
		console.log(`loading ${file}...`);
		require(`${models_path}/${file}`);
	}
})