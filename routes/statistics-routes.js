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
app.use('/', jwtCheck);
app.get('/statisticsChart', function (req, res) {
	statistic.getStatisticsInfo(req, res);
});
