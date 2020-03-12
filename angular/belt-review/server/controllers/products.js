var mongoose = require('mongoose');
var Product = mongoose.model('Product');

class ProductsController {
	index(req, res) {
		Product.find({}, function(err, products){
			if(err){
				return res.json(err);
			}
			return res.json(products);
		})
	}
	create(req, res) {
		Product.create(req.body, function(err, product){
			if(err){
				return res.json(err);
			}
			return res.json(product);
		
		})
	}
	show(req, res){
		Product.findById(req.params.id, function(err, product){
			if(err){
				return res.json({ error: '404 - Product not found' });
			}
			return res.json(product);
		})
	}
	update(req, res) {
		Product.findByIdAndUpdate(req.params.id, { $set : req.body }, { new: true }, function(err, product){
			if(err){
				return res.json(err);
			}
			return res.json(product);
		})
	}
	destroy(req, res){
		Product.findByIdAndRemove(req.params.id, function(err, product){
			if(err){
				return res.json(err);
			}
			return res.json({
				'success': 'successfully deleted product'
			});
		})
	}
}

module.exports = new ProductsController();