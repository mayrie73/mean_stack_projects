var mongoose = require('mongoose');
var Pokemon = mongoose.model('Pokemon');
class PokemonsController {
	index(req, res) {
		Pokemon.find({}, function(err, pokemons) {
			if (err) {
				return res.json(err);
			}
			return res.json(pokemons);
		})
	}
	create(req, res) {
		var pokemon = new Pokemon({
			name: req.body.name
		});
		pokemon.save(function(err, pokemon){
			if (err) {
				return res.json({
					error:"Something went wrong"
				});
			}
			return res.json(pokemon);
		})
	}
	show(req, res) {
		Pokemon.findOne({name: req.params.name}, function(err, pokemon){
			if (err) {
				return res.json({
					error: '404 - user not found'
				});
			}
			return res.json(pokemon);
		})
	}
	destroy(req, res) {
		Pokemon.remove({name: req.params.name}, function(err, pokemon){
			if (err) {
				return res.json(err);
			}
			return res.json({
				'success': 'successfully deleted task'
			});
		})
	}
}

module.exports = new PokemonsController();
