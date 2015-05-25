/// <reference path="../typings/node/node.d.ts"/>
var express = require('express');
var requireDir = require('require-dir');

var app = express();

app.set('views', __dirname + '/website/views');
app.set('view engine', 'jade');

var controllers = requireDir(__dirname + '/website/controllers/');
for (var v in controllers) {
	controllers[v].registerRoutes(app);
}

var server = app.listen(8080, function() {
	console.log('Server listening on port 8080');
});