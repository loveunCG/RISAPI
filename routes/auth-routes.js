let express = require('express');
let app = module.exports = express.Router();
let knex = require('knex')(require('../config/config').dbconfig);
import Auth from '../api/Auth';
import AuthModel from '../model/AuthModel';
let auth_model = new AuthModel(knex);
let auths = new Auth(auth_model);

app.get('/register', function(req, res) {
	auths.registerUser(req, res);
});

app.get('/login', function(req, res) {
    auths.checkUser(req, res)
});

app.get('/checkduplication', function(req, res){
	auths.duplicationCheck(req, res)
});

app.get('/forget', function(req, res){
	auths.forgetPassword(req, res)
});

app.get('/sendSMS', function (req, res) {
	auths.SendSMS(req,res)
});

app.get('/getRole', function(req, res){
	auths.getUserRole();
});
