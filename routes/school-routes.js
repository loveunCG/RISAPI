let express = require('express'),
    jwt = require('express-jwt');
let app = module.exports = express.Router();
let config = require('../config/config');
let knex = require('knex')(require('../config/config').dbconfig)
import School from '../api/School';
import SchoolModel from '../model/SchoolModel';
let model = new SchoolModel(knex);
let schools = new School(model);
let jwtCheck = jwt({
    secret: config.secret
});
const fileUpload = require('express-fileupload');
// app.use('/', jwtCheck);
app.use(fileUpload());

app.get('/getBookingDataInfo', function(req, res) {
	bookings.GetPatientBookingInfo(req, res)
});

app.get('/studyList', function (req, res) {
	schools.getlessionList(req, res)
});

app.get('/urlStduyDataShareList', function (req, res) {
	schools.getShareList(req, res);
});

app.get('/StduyDataShareListContent', function (req, res) {
	schools.getShareListContent(req, res);
});

app.post('/upload', function (req, res) {
	schools.uploadFile(req, res);
});

app.get('/urlStduyDiscussList', function (req, res) {
	schools.getPostList(req, res);
});

app.get('/savePost', function (req, res) {
	schools.savePost(req, res);
});

app.get('/savecomment', function (req, res) {
	schools.saveComment(req, res);
});
