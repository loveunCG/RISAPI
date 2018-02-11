let express = require('express'),
    jwt = require('express-jwt')
let app = module.exports = express.Router();
let config = require('../config/config')
let knex = require('knex')(require('../config/config').dbconfig)
import Reporting from '../api/Report';
import ReportModel from '../model/ReportModel';
let model = new ReportModel(knex);
let reportings = new Reporting(model);
let jwtCheck = jwt({
    secret: config.secret
});
// app.use('/', jwtCheck);
app.get('/checkauth', function(req, res) {
	res.json({msg:"ok"});
});
app.get('/reportlist', function(req, res) {
	reportings.reportList(req, res, userAuthData);
});

app.get('/reportdetail', function(req, res) {
	reportings.reportDeatial(req, res);
});

app.get('/reportingview', function(req, res) {
	reportings.reportingView(req, res);
});

app.get('/reporting', function(req, res) {
	reportings.reporting(req, res);
});

app.get('/myreportlist', function(req, res) {
	reportings.myReportList(req, res);
});

app.get('/deliberationDetial', function(req, res) {
	reportings.deliberationDetial(req, res);
});

app.get('/deliberationlist', function(req, res) {
	reportings.deliberationList(req, res);
});

app.get('/deliberation', function(req, res) {
	reportings.deliberation(req, res);
});

app.get('/test', function(req, res) {
	reportings.test(req, res);
});

app.get('/dicomimg_list', function(req, res){
  reportings.dicomimg_list(req, res);
});
