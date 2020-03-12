var mongoose = require('mongoose');
var Bike = mongoose.model('Bike');
var User = mongoose.model('User');
class BikesController {
	index(req, res) {
		Bike.find({}, function(err, bikes){
			if(err){
				return res.json(err);
			}
			return res.json(bikes);
		})
	}
	create(req, res) {
		Bike.create(req.body, function(err, bike){
			if(err){
				return res.json(err);
			}
			return res.json(bike);
		
		})
	}
	show(req, res){
		Bike.findById(req.params.id, function(err, bike){
			if(err){
				return res.json({ error: '404 - Task not found' });
			}
			return res.json(bike);
		})
	}
	update(req, res) {
		Bike.findByIdAndUpdate(req.params.id, { $set : req.body }, { new: true }, function(err, bike){
			if(err){
				return res.json(err);
			}
			return res.json(bike);
		})
	}
	destroy(req, res){
		Bike.findByIdAndRemove(req.params.id, function(err, bike){
			if(err){
				return res.json(err);
			}
			return res.json({
				'success': 'successfully deleted bike'
			});
		})
	}
}

module.exports = new BikesController();