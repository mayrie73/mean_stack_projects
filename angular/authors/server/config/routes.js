//import controllers
var Authors = require('../controllers/authors');
const path = require('path');

module.exports = function(app){
	app.get('/authors', Authors.index);
	app.post('/authors', Authors.create);
	app.get('/authors/:id', Authors.show);
	app.put('/authors/:id', Authors.update);
	app.delete('/authors/:id', Authors.destroy);
	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve('./client-app/dist/index.html'))
	})
}