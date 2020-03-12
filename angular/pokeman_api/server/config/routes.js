//import controllers
var Pokemons = require('../controllers/pokemons');
module.exports = function(app){
	app.get('/', Pokemons.index);
	app.post('/Pokemons/new', Pokemons.create);
	app.get('/Pokemons/remove/:name', Pokemons.destroy);
	app.get('/Pokemons/:name', Pokemons.show);
}
