let express = require('express'),
    jwt = require('express-jwt');
let app = module.exports = express.Router();
let config = require('../config/config');
let knex = require('knex')(require('../config/config').dbconfig)
import Booking from '../api/Booking';
import BookingModel from '../model/BookingModel';
let model = new BookingModel(knex);
let bookings = new Booking(model);
let jwtCheck = jwt({
    secret: config.secret
});
app.use('/', jwtCheck);
app.get('/getBookingDataInfo', function(req, res) {
	bookings.GetPatientBookingInfo(req, res)
});

app.get('/testProc', function (req, res) {	
	bookings.TestProc(req, res)	
});
