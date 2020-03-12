//import controllers
var Users = require('../controllers/users');
var Bikes = require('../controllers/bikes');
const path = require('path');
module.exports = function(app){
	app.get('/users',Users.index);
	app.post('/users', Users.create);
	app.get('/users/:id', Users.show);
	app.put('/users/:id',Users.update);
	app.get('/session', Users.session);
    app.post('/session', Users.authenticate);
	app.delete('/users/:id', Users.destroy);
	app.get('/bikes', Bikes.index);
	app.post('/bikes', Bikes.create);
	app.get('/bikes/:id', Bikes.show);
	app.put('/bikes/:id', Bikes.update);
	app.delete('/Bikes/:id', Bikes.destroy);

	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve('./client-app/dist/index.html'))
	})
}