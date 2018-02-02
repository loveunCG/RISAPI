const fs = require('fs');
let _ = require('lodash');
let foreach = require('foreach');
let moment = require('moment');
const axios = require('axios');
let dicomBaseUrl = 'http://127.0.0.1:5006/';
let parser = require('xml2json');

export default class Reporting {

	constructor(data) {
		this.ReportingModel = data
		this.UserDatas = []
	}

	getQueryRole() {
		console.log(userAuthData.usr_role);
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

	ReportList(request, response) {
		let query = {};
		if (request.query.hasOwnProperty('hospital_name')) query.hospital_name = request.query.hospital_name;
		query = this.getQueryRole();
		let startdate = new Date("2000-01-01");
		let enddate = new Date("2100-01-01");
		let defaultstart = startdate.getFullYear() + "-" + (startdate.getMonth() + 1) + "-" + startdate.getDate();
		let defaultend = enddate.getFullYear() + "-" + (enddate.getMonth() + 1) + "-" + enddate.getDate();
		let startTime = request.query.hasOwnProperty('start') ? request.query.deliendtime : defaultstart;
		let endTime = request.query.hasOwnProperty('end') ? request.query.deliendtime : defaultend;
		let between = [startTime, endTime];
		if (request.query.hasOwnProperty('patient_source')) query.patient_source = request.query.patient_source;
		if (request.query.hasOwnProperty('booking_status')) query.booking_status = request.query.booking_status;
		
		this.ReportingModel.GetReportListInfo(query, between)
			.then(data => {
				let ReportData = [];
				if (data.length == 0) {
					response.status(201).json([]);
					return;
				}
				var index = 0;
				for (var key in data) {
					if (data.hasOwnProperty(key)) {
						if (data[key].report_doc_name == userAuthData.usr_id) continue;
						ReportData[index] = {
							booking_id: data[key].pb_booking_id,
							image_num: data[key].image_num,
							patient_name: data[key].patient_name,
							patient_gender: data[key].patient_gender,
							patient_type: data[key].patient_type,
							patient_age: data[key].patient_age,
							license_num: data[key].license_num,
							booking_status: data[key].booking_status,
							hospital_name: data[key].hospital_name
						}
						index++;
					}
				}
				response.status(201).json(ReportData);
				return;
			})
			.catch(err => {
				console.log(err);
			})


	}

	ReportDeatial(request, response, userData) {
		let ReportingModel = this.ReportingModel;
		var query = {};
		if (request.query.hasOwnProperty('booking_id') && request.query.booking_id != "") {
			query = {
				"tbl_patient_booking.booking_id": request.query.booking_id
			};
		} else if (request.query.hasOwnProperty('report_id') && request.query.report_id != "") {
			query = {
				"tbl_report.report_id": request.query.report_id
			};
		} else {
			return response.send([]);

		}
		ReportingModel.GetReportDetailInfo(query).then(data => {
			if (!data.length) {
				return response.send([]);
			}
			let sendData = {};
			let booking_id = data[0].pb_booking_id;
			let pastquery = {
				license_num: data[0].license_num
			};
			ReportingModel.GetReportListPast(pastquery).then(res => {
				sendData.history = res;
				console.log('this is pastquery result', res);
				if (!res.length) {
					return response.send(sendData);
				}
				var cnt = 0;
				foreach(res, function (info, key, object) {
					var query = {
						chc_booking_id: info.pb_booking_id
					};
					ReportingModel.GetCheckItemListInfo(query).then(checkList => {
						info['check_list'] = checkList;
						cnt++;
						console.log('info booking_id ', info.pb_booking_id, 'booking_id --------------', booking_id);
						if (info.pb_booking_id == booking_id) {
							sendData.cur_data = info;
						}
						if (cnt == res.length) {
							response.send(sendData);
						}
					});
				});
			});
		});
	}

	reportingView(request, response) {
		let query = {};
		if (request.query.hasOwnProperty('booking_id') && request.query.booking_id != "") {
			query = {
				"tbl_patient_booking.booking_id": request.query.booking_id
			};
		} else {
			return response.send([]);
		}

		this.ReportingModel.GetReportDetailInfo(query)
			.then((data) => {
				let sendData = data[0]
				var checkQuery = {
					chc_booking_id: sendData.pb_booking_id
				}
				this.ReportingModel.GetCheckItemListInfo(checkQuery).then(checkList => {
					sendData['check_list'] = checkList;
					response.status(201).json(sendData);
				});

			})

	}

	reporting(request, response) {
		let saveData = {};
		if (request.query.hasOwnProperty('report_id') && request.query.report_id != '') {
			var where = {
				report_id: request.query.report_id
			};
		}

		if (request.query.hasOwnProperty('booking_id') && request.query.booking_id != '') {
			saveData.booking_id = request.query.booking_id;

		} else {
			console.log('here is null');
			return response.json([]);
			return;
		}
		if (request.query.hasOwnProperty('report_doc_name')) saveData.report_doc_name = request.query.report_doc_name;
		if (request.query.hasOwnProperty('clinical_diagnosis')) saveData.clinical_diagnosis = request.query.clinical_diagnosis;
		if (request.query.hasOwnProperty('image_degree')) saveData.image_degree = request.query.image_degree;
		if (request.query.hasOwnProperty('recommend_report')) saveData.recommend_report = request.query.recommend_report;
		if (request.query.hasOwnProperty('impression')) saveData.impression = request.query.impression;
		if (request.query.hasOwnProperty('urgency_status')) saveData.urgency_status = request.query.urgency_status;
		if (request.query.hasOwnProperty('positive_status')) saveData.positive_status = request.query.positive_status;
		if (request.query.hasOwnProperty('Imaging_performance')) saveData.Imaging_performance = request.query.Imaging_performance;
		if (!saveData) return response.json([]);
		saveData.report_time = moment().format('YYYY-MM-DD h:mm:ss');
		console.log('this is save Data', saveData);
		this.ReportingModel.SaveReportInfo(saveData, where)
			.then((data) => {
				if (data == 0) {
					return response.json({
						status: "error"
					});
				} else {
					let updateQuery = {
						booking_id: saveData.booking_id
					};
					let status = request.query.hasOwnProperty('save') ? 7 : 3
					let updateData = {
						booking_status: status
					};
					console.log('this is update data', updateData);
					this.ReportingModel.UpdateBookingData(updateData, updateQuery).then((data) => {
							if (data != 0) {
								return response.json({
									status: "success"
								});
								console.log(data);
							}
						})
						.catch((err) => {

						})

				}
			})
			.catch(err => {
				console.log(err)

			})

	}

	myReportList(request, response) {
		let query = {};
		if (request.query.hasOwnProperty('hospital_name')) query.hospital_name = request.query.hospital_name;
		query.report_doc_name = userAuthData.usr_id;
		let startdate = new Date("2000-01-01");
		let enddate = new Date("2100-01-01");
		let defaultstart = startdate.getFullYear() + "-" + (startdate.getMonth() + 1) + "-" + startdate.getDate();
		let defaultend = enddate.getFullYear() + "-" + (enddate.getMonth() + 1) + "-" + enddate.getDate();
		let delistarttime = request.query.hasOwnProperty('delistarttime') ? request.query.deliendtime : defaultstart;
		let deliendtime = request.query.hasOwnProperty('deliendtime') ? request.query.deliendtime : defaultend;
		let reportstarttime = request.query.hasOwnProperty('reportstarttime') ? request.query.reportstarttime : defaultstart;
		let reportendtime = request.query.hasOwnProperty('reportendtime') ? request.query.reportendtime : defaultend;
		let deliBet = [delistarttime, deliendtime];
		let reportBet = [reportstarttime, reportendtime];
		if (request.query.hasOwnProperty('booking_status')) query.booking_status = request.query.booking_status;
		if (!request.query.hasOwnProperty('delistarttime') && !request.query.hasOwnProperty('deliendtime')) deliBet = null;
		if (!request.query.hasOwnProperty('reportstarttime') && !request.query.hasOwnProperty('reportendtime')) reportBet = null;
		console.log(query, deliBet, reportBet);
		this.ReportingModel.getmyReportListInfo(query, reportBet, deliBet)
			.then(data => {
				
				let ReportData = [];
				console.log('this is report data', data)
				if (data.length == 0) {
					response.status(201).json([]);
					return;
				}
				for (var key in data) {
					if (data.hasOwnProperty(key)) {
						ReportData[key] = {
							booking_id: data[key].pb_booking_id,
							image_num: data[key].image_num,
							patient_name: data[key].patient_name,
							patient_gender: data[key].patient_gender,
							patient_type: data[key].patient_type,
							patient_age: data[key].patient_age,
							license_num: data[key].license_num,
							booking_status: data[key].booking_status,
							hospital_name: data[key].hospital_name
						}
					}
				}
				console.log(ReportData);
				response.status(201).json(ReportData);

			})
			.catch(err => {
				console.log(err)
			});

	}

	deliberationDetial(request, response) {
		let ReportingModel = this.ReportingModel;
		let query = {};
		if (request.query.hasOwnProperty('report_id')) {
			query = {
				"tbl_report.report_id": request.query.report_id
			}
		}
		ReportingModel.getDeliberationInfo(query)
			.then((data) => {
				if (data.length == 0) {
					response.status(201).json([]);
					return;
				} else if (request.query.report_id) {
					var search = {
						chc_booking_id: data[0].pb_booking_id
					};
					var send_data = data[0];

					ReportingModel.GetCheckItemListInfo(search).then((result) => {
						send_data.check_list = result;
						console.log('this is first', send_data);

						response.status(201).json(send_data);
					})

				} else {
					console.log('this is servrial')
					response.status(201).send(data);
				}

			});
	}

	deliberationList(request, response) {
		let query = {};
		query = this.getQueryRole();		
		let startdate = new Date("2000-01-01");
		let enddate = new Date("2100-01-01");
		let defaultstart = startdate.getFullYear() + "-" + (startdate.getMonth() + 1) + "-" + startdate.getDate();
		let defaultend = enddate.getFullYear() + "-" + (enddate.getMonth() + 1) + "-" + enddate.getDate();
		let delistarttime = request.query.hasOwnProperty('delistarttime') ? request.query.deliendtime : defaultstart;
		let deliendtime = request.query.hasOwnProperty('deliendtime') ? request.query.deliendtime : defaultend;
		let reportstarttime = request.query.hasOwnProperty('reportstarttime') ? request.query.reportstarttime : defaultstart;
		let reportendtime = request.query.hasOwnProperty('reportendtime') ? request.query.reportendtime : defaultend;
		let deliBet = [delistarttime, deliendtime];
		let reportBet = [reportstarttime, reportendtime];
		if (!request.query.hasOwnProperty('delistarttime') && !request.query.hasOwnProperty('deliendtime')) {
			deliBet = null;
			console.log('hello');
		}
		if (request.query.hasOwnProperty('booking_status')) query.booking_status = request.query.booking_status;
		this.ReportingModel.getDeliList(query, reportBet, deliBet)
			.then((data) => {
				console.log(data);
				if (data.length == 0) {
					response.status(201).json([]);
				} else {
					response.status(201).json(data);
				}

			});
	}

	deliberation(request, response) {
		let saveDeliData = {};
		let where = {};
		let booking_status = {};
		let booking_id = request.query.booking_id;
		if (request.query.hasOwnProperty('deliberation_content')) saveDeliData.deliberation_content = request.query.deliberation_content;
		if (request.query.hasOwnProperty('report_id')) saveDeliData.report_id = request.query.report_id;
		if (request.query.hasOwnProperty('doctor_name')) saveDeliData.doctor_name = request.query.doctor_name;
		if (request.query.hasOwnProperty('deliberation_id')) where.deliberation_id = request.query.deliberation_id;
		if (request.query.hasOwnProperty('booking_stauts')) booking_status = request.query.booking_stauts;
		if (where) {
			saveDeliData.lastupdate_time = moment().format('YYYY-MM-DD h:mm:ss');
		} else {
			saveDeliData.deliberation_time = moment().format('YYYY-MM-DD h:mm:ss');
		}
		console.log('this is save Data', saveDeliData);
		this.ReportingModel.SaveDeliberation(saveDeliData, where).then((data) => {
			if (data) {

				let updateQuery = {
					booking_id: booking_id
				};

				let updateData = {
					booking_status: booking_status
				};
				console.log('this is update Data', updateData);

				this.ReportingModel.UpdateBookingData(updateData, updateQuery).then((data) => {
						if (data != 0) {
							return response.json({
								status: "success"
							});
						}
					})
					.catch((err) => {

					});
			} else {
				return response.json({
					status: "error"
				});
			}
		});

	}

	dicomimg_list(request, response) {
		if(request.query.hasOwnProperty('patient_id')){
			let getStudyIdUrl = dicomBaseUrl + 'getDicom?operation=cfind&patId=' + request.query.patient_id;
			axios.get(getStudyIdUrl).then(studyIdData => {
				this.getStudyIdList(studyIdData.data, response);
			}).catch(error => {  
				console.log(error);		
				
			});
		}else{

		}
		
	}
	getStudyIdList(data, response){
		console.log('this is getting studyID');
		var options = {
			object: false,
			reversible: false,
			coerce: false,
			sanitize: true,
			trim: true,
			arrayNotation: false,
			alternateTextNode: false
		};
		let stdData = parser.toJson(data, options);
		if(JSON.parse(stdData).dicom.hasOwnProperty('response')){
			var resStudyData = JSON.parse(stdData).dicom.response;
			let sendData = {};
			for(var key in resStudyData.attr){
				var tmpAttrData = resStudyData.attr[key];				
				switch (resStudyData.attr[key].tag) {
					case '00100020':
						sendData.patId = tmpAttrData['$t'];
						break;
					case '00100010':
						sendData.patName = tmpAttrData['$t'];
						break;
					case '00080020':
						sendData.studyDate = tmpAttrData['$t'];
						break;
					case '00080061':
						sendData.studyMods = tmpAttrData['$t'];
						break;
					case '00201206':
						sendData.studyNumSeries = tmpAttrData['$t'];
						break;
					case '0020000D':
						sendData.studyUID = tmpAttrData['$t'];
						break;								
					case '0020000E':
						sendData.seriesUID = tmpAttrData['$t'];
						break;					
					default:
						break;
				}
			}
			if(sendData.hasOwnProperty('studyUID')){
				let getStudyIdUrl = dicomBaseUrl + 'getDicom?operation=cfind&studyUID=' + sendData.studyUID;				
				axios.get(getStudyIdUrl).then(resAjax => {
					let allinData = parser.toJson(resAjax.data, options);					
					var allinJson = JSON.parse(allinData);	
					var qresponse = allinJson.dicom;
					this.getRealListData(qresponse, response, sendData);				
					
				}).catch(error => {  
					
				});

			}else{

			}
		}else{
			return response.status(200).send({
				data:[],
				message:'there is no this patient Dicom'
			});

		}
		
	}
	getRealListData(data, res, patient_data){
		var qresponse = data.qresponse;		
		var response = data.response;
		var realSendDatas = [];
		for(var index in response){
			var realSendData = {};
			var objectUID = [];
			// realSendData = patient_data;			
			realSendData.number = response[index].number;
			realSendData.studyMods = patient_data.studyMods;
			realSendData.patName = patient_data.patName;
			realSendData.patId = patient_data.patId;
			var responseAttr = response[index].attr;		
			for(var key in responseAttr){
				switch (responseAttr[key].tag) {
					case '00100020':
						realSendData.patId = responseAttr[key]['$t'];
						break;
					case '00100010':
						realSendData.patName = responseAttr[key]['$t'];
						break;
					case '00080020':
						realSendData.studyDate = responseAttr[key]['$t'];
						break;
					case '00080061':
						realSendData.studyMods = responseAttr[key]['$t'];
						break;
					case '00201206':
						realSendData.studyNumSeries = responseAttr[key]['$t'];
						break;
					case '0020000D':
						realSendData.studyUID = responseAttr[key]['$t'];
						break;								
					case '0020000E':
						realSendData.seriesUID = responseAttr[key]['$t'];
						break;					
					default:
						break;
				}
			}				
			var objectIndex = 0;
			for(var keyword in qresponse){				
				if(qresponse[keyword].qrequest == realSendData.number ){

					for(var incrementNum in qresponse[keyword].attr){
						if(qresponse[keyword].attr[incrementNum].tag == '00080018'){							
							objectUID[objectIndex] = {objectUID: qresponse[keyword].attr[incrementNum]['$t']};		
							objectIndex++;			
						}
					}
				}
			}
			realSendData.objectUID = (objectUID);
			realSendDatas[index] = realSendData;
		}		
		return res.json(realSendDatas);		

	}

	
}
