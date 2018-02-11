let express = require('express'),
    jwt = require('express-jwt'),
    config = require('../config/config');
let app = module.exports = express.Router();
let jwtCheck = jwt({
    secret: config.secret
});
let knex = require('knex')(require('../config/config').dbconfig);
import Remote from '../api/Remote';
import RemoteModel from '../model/RemoteModel';
let model = new RemoteModel(knex);
let remotes = new Remote(model);

app.use('/', jwtCheck); // authorization by token


// remote modulw
app.get('/remoteList', function(req, res) {
	remotes.remoteList(req, res);
});

app.get('/remoteView', function(req, res) {
	remotes.remoteView(req, res);
});


app.get('/saveRemote', function(req, res) {
	remotes.saveRemote(req, res);
});

app.get('/getpaitent', function(req, res) {
	remotes.getpaitent(req, res);
});

app.get('/remoteReviewList', function(req, res) {
	remotes.remoteReviewList(req, res);
});

app.get('/urlRomoteReviewListSave', function(req, res){
  remotes.remoteReviewSave(req, res);
});
