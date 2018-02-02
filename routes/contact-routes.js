let express = require('express'),
    jwt = require('express-jwt'),
    config = require('../config'),
    quoter = require('../config/quoter');
let app = module.exports = express.Router();

let jwtCheck = jwt({
    secret: config.secret
});

app.use('/api/protected', jwtCheck);

app.get('/api/protected/random-quote', function(req, res) {
    res.status(200).send(quoter.getRandomOne());
});
