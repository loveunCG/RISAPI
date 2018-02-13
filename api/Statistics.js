let moment = require('moment');

export default class Statistics {
	constructor(data) {
		this.StatisticsModel = data
		this.UserDatas = []
	}

	getQueryRole() {
		switch (userAuthData.usr_role) {
			case 1024:
				return {};
				break;
			case 1:
				return {
					hospital_class: userAuthData.usr_hospital
				};
				break;
			case 10:
				return {
					'tbl_patient_booking.hospital_name': userAuthData.usr_hospital
				};
				break;
			case 100:
				return {
					'req_doctor_name': userAuthData.usr_id
				};
				break;
			case 1000:
				return {
					'req_doctor_name': userAuthData.usr_id
				};
				break;
			default:
				return {};

		}
	}

	getStatisticsInfo(request, response) {
		var chartType = 0;
		let chartStyle = 0;
		let chartDate;
		if (request.query.hasOwnProperty('mydateType')) chartType = request.query.mydateType;
		if (request.query.hasOwnProperty('myWorkType')) chartStyle = request.query.myWorkType;
		if (request.query.hasOwnProperty('mydatePart')) chartDate = request.query.mydatePart;
		var query = {
			dateType: chartType,
			date: chartDate
		}
		switch (parseInt(chartStyle)) {
			case 0:
				this.getPatientStatisticsInfo(query, response);
				break;
			case 1:
				this.getReportStatisticsInfo(query, response);
				break;
			case 2:
				this.getRemoteStatisticsInfo(query, response);
				break;
			case 3:
				this.getdeliverationStatisticsInfo(query, response);
				break;
			default:
				break;
		}
	}

	getPatientStatisticsInfo(params, response) {
		let StatisticsSelf = this;
		var chartType = params.dateType;
		var monthDate = {
			"1": 31,
			"2": 28,
			"3": 31,
			"4": 30,
			"5": 31,
			"6": 30,
			"7": 31,
			"8": 31,
			"9": 30,
			"10": 31,
			"11": 30,
			"12": 31
		}
		var months = {
			"1": "01",
			"2": "02",
			"3": "03",
			"4": "04",
			"5": "05",
			"6": "06",
			"7": "07",
			"8": "08",
			"9": "09",
			"10": "10",
			"11": "11",
			"12": "12"
		}
		var curtDate = params.date;

		let realQuery = this.getQueryRole();
		switch (parseInt(chartType)) {
			case 0:
				var month = parseInt(curtDate.split('-')[1]);
				var queryarray = {};
				for (var index = 0; index < monthDate[month]; index++) {
					queryarray[index] = [curtDate + '-0' + index + ' 00:00:00', curtDate + '-0' + index + ' 23:59:59'];

				}
				getBookingInfoByDate(realQuery, queryarray);
				break;
			case 1:
				var queryarray = {};
				for (var index = 1; index < 13; index++) {
					queryarray[index] = [curtDate + '-' + months[index] + '-01 00:00:00', curtDate + '-' + months[index] + '-' + monthDate[index] + ' 23:59:59'];
				}
				getBookingInfoByDate(realQuery, queryarray);
				break;
			case 2:
				var queryarray = {};
				for (var index = 0; index < 10; index++) {
					var years = parseInt(curtDate) - index;
					queryarray[years] = [years + '-01-01 00:00:00', years + '-12-31 23:59:59'];
				}
				getBookingInfoByDate(realQuery, queryarray);
				break;
			default:
				break;
		}
		async function getBookingInfoByDate(query, params) {
			// console.log(params)
			var sendData = [];
			var date = [];
			var index = 0;
			for (var key in params) {
				// console.log(params[key]);
				var data = await StatisticsSelf.StatisticsModel.getBookingListInfo(query, params[key]);
				date[index] = key;
				sendData[index] = data.length;
				index++;

			}
			response.send({
				data: sendData,
				date: date
			});
			return;
		}
	}

	getReportStatisticsInfo(params, response) {
		let StatisticsSelf = this;
		var chartType = params.dateType;
		var monthDate = {
			"1": 31,
			"2": 28,
			"3": 31,
			"4": 30,
			"5": 31,
			"6": 30,
			"7": 31,
			"8": 31,
			"9": 30,
			"10": 31,
			"11": 30,
			"12": 31
		}
		var months = {
			"1": "01",
			"2": "02",
			"3": "03",
			"4": "04",
			"5": "05",
			"6": "06",
			"7": "07",
			"8": "08",
			"9": "09",
			"10": "10",
			"11": "11",
			"12": "12"
		}
		var curtDate = params.date;
		let realQuery = {
			'report_doc_name': userAuthData.usr_id
		};
		switch (parseInt(chartType)) {
			case 0:
				var month = parseInt(curtDate.split('-')[1]);
				var queryarray = {};
				for (var index = 0; index < monthDate[month]; index++) {
					queryarray[index] = [curtDate + '-0' + index + ' 00:00:00', curtDate + '-0' + index + ' 23:59:59'];
				}
				getReportByDate(realQuery, queryarray);
				break;
			case 1:
				var queryarray = {};
				for (var index = 1; index < 13; index++) {
					queryarray[index] = [curtDate + '-' + months[index] + '-01 00:00:00', curtDate + '-' + months[index] + '-' + monthDate[index] + ' 23:59:59'];
				}
				// console.log(queryarray);
				getReportByDate(realQuery, queryarray);
				break;
			case 2:
				var queryarray = {};
				for (var index = 0; index < 10; index++) {
					var years = parseInt(curtDate) - index;
					queryarray[years] = [years + '-01-01 00:00:00', years + '-12-31 23:59:59'];
				}
				getReportByDate(realQuery, queryarray);
				break;
			default:
				break;
		}

		async function getReportByDate(query, params) {
			// console.log(params)
			var sendData = [];
			var date = [];
			var index = 0;
			for (var key in params) {
				var data = await StatisticsSelf.StatisticsModel.getReportListInfo(query, params[key]);
				date[index] = key;
				sendData[index] = data.length;
				index++;

			}
			response.json({
				data: sendData,
				date: date
			});
			return;
		}

	}

	getRemoteStatisticsInfo(params, response) {
		let StatisticsSelf = this;
		var chartType = params.dateType;
		var monthDate = {
			"1": 31,
			"2": 28,
			"3": 31,
			"4": 30,
			"5": 31,
			"6": 30,
			"7": 31,
			"8": 31,
			"9": 30,
			"10": 31,
			"11": 30,
			"12": 31
		};
		var months = {
			"1": "01",
			"2": "02",
			"3": "03",
			"4": "04",
			"5": "05",
			"6": "06",
			"7": "07",
			"8": "08",
			"9": "09",
			"10": "10",
			"11": "11",
			"12": "12"
		};

		var curtDate = params.date;
		let realQuery = this.getQueryRole();
		switch (parseInt(chartType)) {
			case 0:
				var month = parseInt(curtDate.split('-')[1]);
				var queryarray = {};
				for (var index = 0; index < monthDate[month]; index++) {
					queryarray[index] = [curtDate + '-0' + index + ' 00:00:00', curtDate + '-0' + index + ' 23:59:59'];
				}
				getRemoteInfo(realQuery, queryarray);
				break;
			case 1:
				var queryarray = {};
				for (var index = 1; index < 13; index++) {
					queryarray[index] = [curtDate + '-' + months[index] + '-01 00:00:00', curtDate + '-' + months[index] + '-' + monthDate[index] + ' 23:59:59'];
				}
				getRemoteInfo(realQuery, queryarray);
				break;
			case 2:
				var queryarray = {};
				for (var index = 0; index < 10; index++) {
					var years = parseInt(curtDate) - index;
					queryarray[years] = [years + '-01-01 00:00:00', years + '-12-31 23:59:59'];
				}
				getRemoteInfo(realQuery, queryarray);
				break;
			default:
				break;
		}

		async function getRemoteInfo(query, params) {
			var sendData = [];
			var date = [];
			var index = 0;
			for (var key in params) {
				var data = await StatisticsSelf.StatisticsModel.getRemoteList(query, params[key]);
				date[index] = key;
				sendData[index] = data.length;
				index++;
			}
			response.send({
				data: sendData,
				date: date
			});
			// console.log(sendData);
			return;
		}

	}

	getdeliverationStatisticsInfo(params, response) {
		let StatisticsSelf = this;
		var chartType = params.dateType;
		var monthDate = {
			"1": 31,
			"2": 28,
			"3": 31,
			"4": 30,
			"5": 31,
			"6": 30,
			"7": 31,
			"8": 31,
			"9": 30,
			"10": 31,
			"11": 30,
			"12": 31
		}
		var months = {
			"1": "01",
			"2": "02",
			"3": "03",
			"4": "04",
			"5": "05",
			"6": "06",
			"7": "07",
			"8": "08",
			"9": "09",
			"10": "10",
			"11": "11",
			"12": "12"
		}
		var curtDate = params.date;
		//userAuthData.usr_name
		let realQuery = {}; //{doctor_name: userAuthData.usr_name };
		switch (parseInt(chartType)) {
			case 0:
				var month = parseInt(curtDate.split('-')[1]);
				// console.log(monthDate[month]);
				var queryarray = {};
				for (var index = 0; index < monthDate[month]; index++) {
					queryarray[index] = [curtDate + '-0' + index + ' 00:00:00', curtDate + '-0' + index + ' 23:59:59'];
				}
				getDeliberation(realQuery, queryarray);
				break;
			case 1:
				var queryarray = {};
				for (var index = 1; index < 13; index++) {
					queryarray[index] = [curtDate + '-' + months[index] + '-01 00:00:00', curtDate + '-' + months[index] + '-' + monthDate[index] + ' 23:59:59'];
				}
				// console.log(queryarray);
				getDeliberation(realQuery, queryarray);
				break;
			case 2:
				var queryarray = {};
				for (var index = 0; index < 10; index++) {
					var years = parseInt(curtDate) - index;
					queryarray[years] = [years + '-01-01 00:00:00', years + '-12-31 23:59:59'];
				}
				getDeliberation(realQuery, queryarray);
				break;
			default:
				break;
		}

		async function getDeliberation(query, params) {
			// console.log(query);
			var sendData = [];
			var date = [];
			var index = 0;
			for (var key in params) {
				var data = await StatisticsSelf.StatisticsModel.getDeliList(query, params[key]);
				date[index] = key;
				sendData[index] = data.length;
				index++;
			}
			response.json({
				data: sendData,
				date: date
			});

			return;
		}

	}

	getBookingData(req, res) {
		let data_type = req.query.data_type;
		var chartType = req.query.chat_type;
		let date_part = req.query.hasOwnProperty('date_part') ? req.query.date_part : moment().format('YYYY-MM-DD');
		let source_type = req.query.hasOwnProperty('source_type') ? req.query.source_type : null;
		let hospital_name = req.query.hasOwnProperty('hospital_name') ? req.query.source_type : null;
		if (!moment(date_part, 'YYYY-MM-DD').isValid()) {
			return res.send({
				error: 'date vaild errors'
			});
		}
		let StatisticsSelf = this;
		var monthDate = {
			"1": 31,
			"2": 28,
			"3": 31,
			"4": 30,
			"5": 31,
			"6": 30,
			"7": 31,
			"8": 31,
			"9": 30,
			"10": 31,
			"11": 30,
			"12": 31
		}
		var months = {
			"1": "01",
			"2": "02",
			"3": "03",
			"4": "04",
			"5": "05",
			"6": "06",
			"7": "07",
			"8": "08",
			"9": "09",
			"10": "10",
			"11": "11",
			"12": "12"
		}
		var curtDate = date_part;
		let realQuery = this.getQueryRole();
		if (source_type) realQuery.patient_source = source_type;
		if (hospital_name) realQuery.hospital_name = hospital_name;
		switch (parseInt(chartType)) {
			case 0:
				var month = parseInt(curtDate.split('-')[1]);
				// console.log(monthDate[month]);
				var queryarray = {};
				for (var index = 0; index < monthDate[month]; index++) {
					queryarray[index] = [curtDate + '-0' + index + ' 00:00:00', curtDate + '-0' + index + ' 23:59:59'];
				}
				getBookingInfoByDate(realQuery, queryarray);
				break;
			case 1:
				var queryarray = {};
				for (var index = 1; index < 13; index++) {
					queryarray[index] = [curtDate + '-' + months[index] + '-01 00:00:00', curtDate + '-' + months[index] + '-' + monthDate[index] + ' 23:59:59'];
				}
				// console.log(queryarray);
				getBookingInfoByDate(realQuery, queryarray);
				break;
			case 2:
				var queryarray = {};
				for (var index = 0; index < 5; index++) {
					var years = parseInt(curtDate) - index;
					queryarray[years] = [years + '-01-01 00:00:00', years + '-12-31 23:59:59'];
				}
				getBookingInfoByDate(realQuery, queryarray);
				break;
			default:
				break;
		}

		async function getBookingInfoByDate(query, params) {
			var sendData = [];
			var date = [];
			var index = 0;
			for (var key in params) {
				var data = await StatisticsSelf.StatisticsModel.getBookingListInfo(query, params[key]);
				date[index] = key;
				sendData[index] = data.length;
				index++;

			}
			res.send({
				data: sendData,
				date: date
			});
			return;
		}

	}

	getReportData(request, response) {
		let data_type = request.query.data_type;
		var chartType = request.query.chat_type;
		let date_part = request.query.hasOwnProperty('date_part') ? request.query.date_part : moment().format('YYYY-MM-DD');
		let device_type = request.query.hasOwnProperty('device_type') ? request.query.device_type : null;
		let hospital_name = request.query.hasOwnProperty('hospital_name') ? request.query.source_type : null;
		if (!moment(date_part, 'YYYY-MM-DD').isValid()) {
			return res.send({
				error: 'date vaild errors'
			});
		}
		let StatisticsSelf = this;
		var monthDate = {
			"1": 31,
			"2": 28,
			"3": 31,
			"4": 30,
			"5": 31,
			"6": 30,
			"7": 31,
			"8": 31,
			"9": 30,
			"10": 31,
			"11": 30,
			"12": 31
		}
		var months = {
			"1": "01",
			"2": "02",
			"3": "03",
			"4": "04",
			"5": "05",
			"6": "06",
			"7": "07",
			"8": "08",
			"9": "09",
			"10": "10",
			"11": "11",
			"12": "12"
		}
		var curtDate = date_part;
		let realQuery = {
			'report_doc_name': userAuthData.usr_id
		};
		if (device_type) realQuery.checkup_type = device_type;
		switch (parseInt(chartType)) {
			case 0:
				var month = parseInt(curtDate.split('-')[1]);
				var queryarray = {};
				for (var index = 0; index < monthDate[month]; index++) {
					queryarray[index] = [curtDate + '-0' + index + ' 00:00:00', curtDate + '-0' + index + ' 23:59:59'];
				}
				getReportByDate(realQuery, queryarray);
				break;
			case 1:
				var queryarray = {};
				for (var index = 1; index < 13; index++) {
					queryarray[index] = [curtDate + '-' + months[index] + '-01 00:00:00', curtDate + '-' + months[index] + '-' + monthDate[index] + ' 23:59:59'];
				}
				// console.log(queryarray);
				getReportByDate(realQuery, queryarray);
				break;
			case 2:
				var queryarray = {};
				for (var index = 0; index < 5; index++) {
					var years = parseInt(curtDate) - index;
					queryarray[years] = [years + '-01-01 00:00:00', years + '-12-31 23:59:59'];
				}
				getReportByDate(realQuery, queryarray);
				break;
			default:
				break;
		}

		async function getReportByDate(query, params) {
			var sendData = [];
			var date = [];
			var index = 0;
			for (var key in params) {
				var data = await StatisticsSelf.StatisticsModel.getReportListInfo(query, params[key]);
				date[index] = key;
				sendData[index] = data.length;
				index++;

			}
			response.json({
				data: sendData,
				date: date
			});
			return;
		}

	}

	getRemoteData(request, response) {
		let data_type = request.query.data_type;
		var chartType = request.query.chat_type;
		let date_part = request.query.hasOwnProperty('date_part') ? request.query.date_part : moment().format('YYYY-MM-DD');
		let remote_type = request.query.hasOwnProperty('remote_type') ? request.query.remote_type : null;
		let hospital_name = request.query.hasOwnProperty('hospital_name') ? request.query.source_type : null;
		if (!moment(date_part, 'YYYY-MM-DD').isValid()) {
			return res.send({
				error: 'date vaild errors'
			});
		}
		let StatisticsSelf = this;
		var monthDate = {
			"1": 31,
			"2": 28,
			"3": 31,
			"4": 30,
			"5": 31,
			"6": 30,
			"7": 31,
			"8": 31,
			"9": 30,
			"10": 31,
			"11": 30,
			"12": 31
		};
		var months = {
			"1": "01",
			"2": "02",
			"3": "03",
			"4": "04",
			"5": "05",
			"6": "06",
			"7": "07",
			"8": "08",
			"9": "09",
			"10": "10",
			"11": "11",
			"12": "12"
		};
		var curtDate = date_part;
		let realQuery = this.getQueryRole();
		if (remote_type) realQuery.contact_type = remote_type;
		switch (parseInt(chartType)) {
			case 0:
				var month = parseInt(curtDate.split('-')[1]);
				var queryarray = {};
				for (var index = 0; index < monthDate[month]; index++) {
					queryarray[index] = [curtDate + '-0' + index + ' 00:00:00', curtDate + '-0' + index + ' 23:59:59'];
				}
				getRemoteInfo(realQuery, queryarray);
				break;
			case 1:
				var queryarray = {};
				for (var index = 1; index < 5; index++) {
					queryarray[index] = [curtDate + '-' + months[index] + '-01 00:00:00', curtDate + '-' + months[index] + '-' + monthDate[index] + ' 23:59:59'];
				}
				getRemoteInfo(realQuery, queryarray);
				break;
			case 2:
				var queryarray = {};
				for (var index = 0; index < 10; index++) {
					var years = parseInt(curtDate) - index;
					queryarray[years] = [years + '-01-01 00:00:00', years + '-12-31 23:59:59'];
				}
				getRemoteInfo(realQuery, queryarray);
				break;
			default:
				break;
		}

		async function getRemoteInfo(query, params) {
			var sendData = [];
			var date = [];
			var index = 0;
			for (var key in params) {
				var data = await StatisticsSelf.StatisticsModel.getRemoteList(query, params[key]);
				date[index] = key;
				sendData[index] = data.length;
				index++;
			}
			response.send({
				data: sendData,
				date: date
			});
			return;
		}

	}

	getHospitalList(req, res) {
		let query = null;
		switch (userAuthData.usr_role) {
			case 1024:
				query = null;
				break;
			case 1:
				query = {
					hospital_class: userAuthData.usr_hospital
				};
				break;
			case 10:
				query = {
					'hospital_name': userAuthData.usr_hospital
				};
				break;
			case 100:
				query = {
					'hospital_name': userAuthData.usr_hospital
				};
				break;
			case 1000:
				query = {
					'hospital_name': userAuthData.usr_hospital
				};
				break;
			default:
				query = null;

		}

		this.StatisticsModel.getHospitalList(query).then(data => {
			let send_data = [];
			for (var key in data) {
				send_data[key].hospital_name = data[key].hospital_name;
			}
			return res.send({
				data: send_data,
				response_code: 1
			});
		}).catch(err => {
			return res.send({
				message: '找不到医院列表',
				response_code: 0
			});
		});
	}

}
