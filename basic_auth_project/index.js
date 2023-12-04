const express = require("express"); //import frameworka
var path = require('path'); //import modułu do działania na ściezkach plików

const app = express(); ## tworzenie instancji aplikacji

function authentication(req, res, next) { /
	var authheader = req.headers.authorization;
	console.log(req.headers);

	if (!authheader) {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}
	//sprawdzenie czy nagłówek ma poprawne dane

	var auth = new Buffer.from(authheader.split(' ')[1],
	'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];
	//parsowanie danych podczas żądania http

	if (user == '' && pass == '') {

		// If Authorized user
		next();
	} else {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}
//sprawdzenie czy dane są puste; w takim przypadku przechodzi dalej
}

// First step is the authentication of the client
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));

// Server setup
app.listen((3000), () => {
	console.log("Server is Running");
})