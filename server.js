require('import-export');
let expressValidator = require('express-validator');
let logger = require('morgan'),
	cors = require('cors'),
	http = require('http'),
	jwtToken = require('jsonwebtoken'),
	express = require('express'),
	errorhandler = require('errorhandler'),
	dotenv = require('dotenv'),
	bodyParser = require('body-parser');
let app = express();
global.userAuthData = {};
app.use(function(req, res, next) {
	console.log(req.url);
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		// return req.headers.authorization.split(' ')[1];
		userAuthData = jwtToken.decode(req.headers.authorization.split(' ')[1]);
	} else if (req.query && req.query.token) {
		userAuthData = jwtToken.decode(req.query.token);
		next();
		//return userAuthData;
	}
	next()
	//return null;
});

dotenv.load();
// Parsers
// old version of line
// app.use(bodyParser.urlencoded());
// new version of line
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
	app.use(logger('dev'));
	app.use(errorhandler())
}
app.use(expressValidator());
app.use('/api/report', require('./routes/report-routes'));
app.use('/api/study', require('./routes/school-routes'));
app.use('/api/remote', require('./routes/remote-routes'));
app.use('/api/booking', require('./routes/booking-routes'));
app.use('/api/auth', require('./routes/auth-routes'));
app.use('/api/statistics', require('./routes/statistics-routes'));
app.use(function(err, req, res, next) {
	if (err.name === 'StatusError') {
		res.send(err.status, err.message);
	} else {
		next(err);
	}
});
var port = process.env.PORT;
http.createServer(app).listen(port, function(err) {
	console.log('listening in http://localhost:' + port);
});
