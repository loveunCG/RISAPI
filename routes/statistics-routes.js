let express = require('express'),
	jwt = require('express-jwt');
let app = module.exports = express.Router();
let config = require('../config/config');
let knex = require('knex')(require('../config/config').dbconfig);
import Statistics from '../api/Statistics';
import StatisticsModel from '../model/StatisticsModel';
let model = new StatisticsModel(knex);
let statistic = new Statistics(model);
let jwtCheck = jwt({
	secret: config.secret
});
// app.use('/', jwtCheck);
app.get('/statisticsChart', function(req, res) {
	statistic.getStatisticsInfo(req, res);
});

app.get('/urlStatisticsPatient', function(req, res) {
	req.check('date_type', 'date_type is required').notEmpty();
	req.check('chat_type', 'chat_type is required').notEmpty();
	var errors = req.validationErrors();
	if (errors) {
		res.send({
			data: errors
		});
	} else {
		statistic.getBookingData(req, res);
	}

});

app.get('/urlStatisticsReport', function(req, res) {
	req.check('date_type', 'date_type is required').notEmpty();
	req.check('chat_type', 'chat_type is required').notEmpty();
	var errors = req.validationErrors();
	if (errors) {
		res.send({
			data: errors
		});
	} else {
		statistic.getReportData(req, res);
	}

});

app.get('/urlStatisticsRemote', function(req, res) {
	req.check('date_type', 'date_type is required').notEmpty();
	req.check('chat_type', 'chat_type is required').notEmpty();
	var errors = req.validationErrors();
	if (errors) {
		res.send({
			data: errors
		});
	} else {
		statistic.getRemoteData(req, res);
	}
});

app.get('/urlStatisticsHospital', function(req, res) {
	statistic.getHospitalList(req, res);
});
