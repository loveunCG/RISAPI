let express = require('express')
let app = module.exports = express.Router()
let knex = require('knex')(require('../config/config').dbconfig)
import Auth from '../api/Auth'
import AuthModel from '../model/AuthModel'
let auth_model = new AuthModel(knex)
let auths = new Auth(auth_model)
//환자사용자의 등록을 위한 모듈
app.get('/register', function(req, res) {
	auths.registerUser(req, res);
});

// 사용자의 로그인 모듈
app.get('/login', function(req, res) {
    auths.checkUser(req, res)
});

// 사용자의 아이디증복을 검사하는 모듈
app.get('/checkduplication', function(req, res){
	auths.duplicationCheck(req, res)
});

// 사용자가 암호를 잊었을때 처리를 위한 모듈

app.get('/forget', function(req, res){
	auths.forgetPassword(req, res)
});
// 사용자가 등록시에 전화인증을 위한 모듈
app.get('/sendSMS', function (req, res) {
	auths.SendSMS(req,res)
});

app.get('/getRole', function(req, res){
	auths.getUserRole();
});
