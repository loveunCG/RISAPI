let express = require('express'),
    jwt = require('express-jwt'),
    config = require('../config'),
    quoter = require('../config/quoter');
let app = module.exports = express.Router();

let jwtCheck = jwt({
    secret: config.secret
});

app.use('/', jwtCheck);

app.get('/', function(req, res) {
    res.status(200).send(quoter.getRandomOne());
});
