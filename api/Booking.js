let jwt = require('jsonwebtoken');
const fs = require('fs');
let _ = require('lodash');
let foreach = require('foreach');

export default class Booking {
	constructor(data) {
		this.BookingModel = data
		this.BufferData = []
	}

	leaveLog(params) {
		fs.writeFile('./test/result.json', params,  (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
		});
	}


	GetPatientBookingInfo(request, response) {
		let BookingSelf = this
		let BookingData = []
		if (typeof request.searchData != 'undefined') {


		} else {
			this.BookingModel.getBookingAndCheckItemInfo().then(function (data) {
				foreach(data, function (value, key, object) {
					BookingData[key] = {
						booking_id: value.booking_id,
						image_num: value.image_num,
						patient_name: value.patient_name,
						patient_gender: value.patient_gender,
						patient_type: value.patient_type,
						patient_age: value.patient_age,
						license_num: value.license_num,
						patient_pinyin: value.patient_pinyin,
						hospital_name: value.hospital_name
					}
					var query = {
						chc_booking_id: value.booking_id
					}
					BookingSelf.BookingModel.GetCheckItemListInfo(query).then(function (params) {
						foreach(params, function (value, index, obj) {
							BookingData[key].check_list = {
								checkup_equipment: value.checkup_equipment,
								checkup_status: value.checkup_status,
								checkup_item: value.checkup_item,
								checkup_cost: value.checkup_cost
							}
						})
						if (object.length == key + 1) {
							response.status(201).json(BookingData);
						}
					})
				})
			})
		}
	}

	TestProc(request, response) {
		let BookingSelf = this;

		this.BookingModel.GetDeliberationData().then(function (params) {
			BookingSelf.leaveLog(JSON.stringify(params))
			console.log(params.length)
			response.status(201).json(params);
		})

	}

}
