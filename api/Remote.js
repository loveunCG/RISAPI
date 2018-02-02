let moment = require('moment');

export default class Booking {

	constructor(data) {
		this.RemoteModels = data
		this.UserDatas = []
	}

	remoteList(request, response) {
		// console.log('this is error', request.query)
		var query;
		if (request.query) {
			console.log('this is error')
		}
		let startdate = new Date("2000-01-01");
		let enddate = new Date("2100-01-01");
		let defaultstart = startdate.getFullYear() + "-" + (startdate.getMonth() + 1) + "-" + startdate.getDate();
		let defaultend = enddate.getFullYear() + "-" + (enddate.getMonth() + 1) + "-" + enddate.getDate();
		let delistarttime = request.query.hasOwnProperty('submitstarttime') ? request.query.submitstarttime : defaultstart;
		let deliendtime = request.query.hasOwnProperty('submitendtime') ? request.query.submitendtime : defaultend;
		delete request.query.submitendtime;
		delete request.query.submitstarttime;
		query = request.query;
		// console.log(typeof request.query);
		let deliBet = [delistarttime, deliendtime];
		this.RemoteModels.getRemoteList(query, deliBet).then((data) => {
			// console.log(data);
			response.json(data);
		}, (err) => {
			console.log(err);
		})

	}

	remoteView(request, response) {
		let RemoteSelf = this;
		var query = {};
		if (request.query.hasOwnProperty('contact_id')) {
			query = {
				contact_id: request.query.contact_id
			}

		}

		async function remoteviewfunc() {
			var remoteviewData = {};
			if (request.query.hasOwnProperty('contact_id')) {
				remoteviewData = await RemoteSelf.getRemoteViewdetail(query);

			} else {
				remoteviewData = [{
					"patient_name": '',
					"contact_problem": '',
					"medical_history": '',
					"disease_summary": '',
					"req_doctor_name": '',
					"contact_type": '',
					"contact_type": '',
					"reject_reason": '',
					"patient_gender": '',
					"patient_age": '',
					"license_num": '',
					"image_num": '',
					"contact_status": '',
					"patient_id": '',
					"contact_id": '',
					"req_hospital": '',
					"contact_type": ''
				}]
			}

			var hospitalListData = await RemoteSelf.getHospitalList();
			var deaprtmentData = await RemoteSelf.getDepartment();
			var doctorInfo = await RemoteSelf.RemoteModels.GetDoctorInfo();
			var sendDoctorInfo = [];
			var hosDataSend = [];
			var hospital_name = userAuthData.usr_hospital;
			var doctorName = userAuthData.usr_name;
			for (var key in hospitalListData) {
				hosDataSend[key] = {
					hosName: hospitalListData[key].hospital_name,
					hosId: hospitalListData[key].hospital_id
				}
			}

			for (var key in doctorInfo) {
				sendDoctorInfo[key] = {
					doctorName: doctorInfo[key].usr_name,
					DoctorId: doctorInfo[key].usr_id,
					Id: doctorInfo[key].id,
					docHos: doctorInfo[key].usr_hospital
				}

			}
			// console.log(remoteviewData);
			let sendData = {
				remoteData: remoteviewData[0],
				hosData: hosDataSend,
				departData: deaprtmentData,
				doctor: sendDoctorInfo,
				hosName: hospital_name,
				doctorName: doctorName
			}
			// console.log(sendData);
			response.json(sendData);
		}
		remoteviewfunc();
		console.log()


	}

	getRemoteViewdetail(query) {
		return this.RemoteModels.getRemoteView(query);
	}

	getHospitalList() {
		return this.RemoteModels.getHospitalList();

	}

	async getpaitent(request, response) {
		var sendData = await this.RemoteModels.GetBookingInfo(request.query);
		if (sendData.length > 0) {
			response.json(sendData[0]);

		} else {
			var remoteviewData = {
				"patient_name": '',
				"contact_problem": '',
				"medical_history": '',
				"disease_summary": '',
				"req_doctor_name": '',
				"contact_type": '',
				"contact_type": '',
				"reject_reason": '',
				"patient_gender": '',
				"patient_age": '',
				"license_num": '',
				"image_num": '',
				"contact_status": '',
				"patient_id": '',
				"contact_id": '',
				"req_hospital": '',
				"contact_type": ''
			};
			response.json(remoteviewData);
		}

	}

	saveRemote(request, response) {
		var saveData = {};
		var where = {};
		if (request.query.hasOwnProperty('set_hospital')) saveData.set_hospital = request.query.set_hospital;
		if (request.query.hasOwnProperty('set_class')) saveData.set_class = request.query.set_class;
		if (request.query.hasOwnProperty('setCheckTime')) saveData.set_check_time = request.query.setcheckDate + " " + request.query.setCheckTime;
		if (request.query.hasOwnProperty('patient_id')) saveData.patient_id = request.query.patient_id;
		if (request.query.hasOwnProperty('medical_history')) saveData.medical_history = request.query.medical_history;
		if (request.query.hasOwnProperty('disease_summary')) saveData.disease_summary = request.query.disease_summary;
		if (request.query.hasOwnProperty('contact_problem')) saveData.contact_problem = request.query.contact_problem;
		if (request.query.hasOwnProperty('contact_type')) saveData.contact_type = request.query.contact_type;
		if (request.query.hasOwnProperty('contact_id')) where.contact_id = request.query.contact_id;
		if (request.query.hasOwnProperty('save_status')) {
			saveData.contact_status = request.query.save_status;
		}
		saveData.submit_time = moment().format('YYYY-MM-DD h:mm:ss');
		saveData.req_hospital = userAuthData.usr_hospital;
		saveData.req_doctor_name = userAuthData.id;
		// console.log('this is save data',saveData);
		this.RemoteModels.saveRemoteData(saveData, where).then((data) => {
			if (data) {
				response.json({
					status: "success"
				});
			} else {
				response.json({
					status: "error"
				});
			}
		});
	}

	getDepartment() {
		return this.RemoteModels.getDepartmentList();
	}

	remoteReviewList(request, response) {
		let query = {};
		let startdate = new Date("2000-01-01");
		let enddate = new Date("2100-01-01");
		let defaultstart = startdate.getFullYear() + "-" + (startdate.getMonth() + 1) + "-" + startdate.getDate();
		let defaultend = enddate.getFullYear() + "-" + (enddate.getMonth() + 1) + "-" + enddate.getDate();
		let submitstarttime = request.query.hasOwnProperty('submitstarttime') ? request.query.submitstarttime : defaultstart;
		let submitendtime = request.query.hasOwnProperty('submitendtime') ? request.query.submitendtime : defaultend;
		let reviewstarttime = request.query.hasOwnProperty('reviewstarttime') ? request.query.reviewstarttime : defaultstart;
		let reviewendtime = request.query.hasOwnProperty('reviewendtime') ? request.query.reviewendtime : defaultend;
		let submit_time = [submitstarttime, submitendtime];
		let review_time = [reviewstarttime, reviewendtime];
		if (request.query.hasOwnProperty('contact_status')) {
			query.contact_status = request.query.contact_status;
		}
		if (request.query.hasOwnProperty('patient_name')) {
			query.patient_name = request.query.patient_name;
		}


		this.RemoteModels.getRemoteReviewList(query, submit_time, review_time).then(data => {
			console.log('this is query', query);
			console.log(data.length);
			response.json(data);
		});

	}

	remoteReviewSave(request, response) {
		// console.log(request.query);
		let where = {};
		let updateData = {};
		let memdatas = {};
		let insertmemData = [];
		if(request.query.hasOwnProperty('contact_id')) {
			where.contact_id = request.query.contact_id;
		} else{
			response.json(false);
			retrun;
		}
		if(request.query.hasOwnProperty('contact_title')) updateData.contact_title = request.query.contact_title;
		if(request.query.hasOwnProperty('password')) updateData.password = request.query.password;
		if(request.query.hasOwnProperty('set_check_time')) updateData.set_check_time = request.query.set_check_date + ' ' + request.query.set_check_time;
		if(request.query.hasOwnProperty('control_date')) updateData.control_dataTime = request.query.control_date + ' ' + request.query.control_time;
		if(request.query.hasOwnProperty('mem_doc_id')) memdatas = request.query.mem_doc_id;

		if(request.query.hasOwnProperty('notPass_cause')) {
			updateData={};
			updateData.contact_status = 4;
			updateData.notPass_cause = request.query.notPass_cause;

		} else {

			updateData.contact_status = 3;

		}

		for (var variable in memdatas) {
			var tmpStr = memdatas[variable].split('---');
			var tmpinsertData = {};
			tmpinsertData.mem_contact_id = where.contact_id;
			tmpinsertData.mem_doc_id = tmpStr[0];
			tmpinsertData.mem_status = 1;
			tmpinsertData.mem_time = moment().format('YYYY-MM-DD h:mm:ss');
			insertmemData[variable] = tmpinsertData;
		}
		console.log(insertmemData);

		this.RemoteModels.saveRomoteReview(updateData, where).then(data=>{

			if(data&& insertmemData.length > 0){
				this.RemoteModels.saveContactMemberData(insertmemData).then(res=>{
					if(res){
						response.json(true);
					}
				});
			}
		})
		.catch(err=>{
			console.log(err);

		})
	}

}
