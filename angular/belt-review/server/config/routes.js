//import controllers
var Products = require('../controllers/products');
const path = require('path');

module.exports = function(app){
	app.get('/products', Products.index);
	app.post('/products', Products.create);
	app.get('/products/:id', Products.show);
	app.put('/products/:id', Products.update);
	app.delete('/products/:id', Products.destroy);
	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve('./client-app/dist/index.html'))
	})
}