function HomeController() {
	this.registerRoutes = function(app) {
		app.get('/', function(req,res) {
			res.render('home');
		});
		app.get('/home', function(req, res) {
			res.render('home');
		});
	}
	
	return {
		registerRoutes: this.registerRoutes
	};
}

module.exports = new HomeController;