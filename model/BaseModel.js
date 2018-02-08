export default class BaseModel {

	constructor(data) {
		this.DBCon = data;
	}

	GetDoctorInfo(query) {
		var users = [];
		if (query) {
			users = this.DBCon('tbl_doctor').where(query).select()
		} else {
			users = this.DBCon.select('*').from('tbl_doctor')
		}
		return users;
	}

	GetBookingAndCheckItemInfo(query) {
		var bookingData = [];
		if (query) {

			bookingData = this.DBCon('tbl_patient_booking')
				.join('tbl_check_list', 'tbl_check_list.chc_booking_id', '=', 'tbl_patient_booking.booking_id')
				.where(query)
				.select()

		} else {

			bookingData = this.DBCon.select().from('tbl_check_list')
				.join('tbl_patient_booking', 'tbl_check_list.chc_booking_id', '=', 'tbl_patient_booking.booking_id')
				.orderBy('image_num')

		}
		return bookingData;
	}

	GetTemplateData(query) {
		var templateData = [];
		if (query) {

			templateData = this.DBCon('tbl_template')
				.join('tbl_report_module', 'tbl_report_module.module_id', '=', 'tbl_template.report_module_id')
				.join('tbl_module_class', 'tbl_module_class.class_id', '=', 'tbl_report_module.module_class')
				.where(query)
				.select()
		} else {

			templateData = this.DBCon.select().from('tbl_template')
				.join('tbl_report_module', 'tbl_report_module.module_id', '=', 'tbl_template.report_module_id')
				.join('tbl_module_class', 'tbl_module_class.class_id', '=', 'tbl_report_module.module_class')

		}
		return templateData;

	}

	GetBookingInfo(query) {
		var bookingData = [];
		if (query) {
			bookingData = this.DBCon('tbl_patient_booking')
				.where(query)
				.orderBy('image_num')
				.select()
		} else {
			bookingData = this.DBCon.select().from('tbl_patient_booking')
				.orderBy('image_num')
		}
		return bookingData;
	}

	GetModuleClass(query) {
		var modules = [];
		if (query) {
			modules = this.DBCon('tbl_module_class')
				.where(query)
				.select()
		} else {
			modules = this.DBCon.select().from('tbl_module_class')
		}
		return modules;

	}

	GetModule(query) {
		var templateData = [];
		if (query) {

			templateData = this.DBCon('tbl_report_module')
				.join('tbl_module_class', 'tbl_module_class.class_id', '=', 'tbl_report_module.module_class')
				.where(query)
				.select()
		} else {

			templateData = this.DBCon.select().from('tbl_report_module')
				.join('tbl_module_class', 'tbl_module_class.class_id', '=', 'tbl_report_module.module_class')

		}
		return templateData;

	}

	GetCheckItemListInfo(query) {
		var checkList = [];
		if (query) {
			checkList = this.DBCon('tbl_check_list')
				.where(query)
				.select(
					"checkup_equipment",
					"checkup_status",
					"checkup_item",
					"checkup_time",
					"checkup_cost",
					"chc_id"
				);
		} else {
			checkList = this.DBCon.from('tbl_check_list').select(
				"checkup_equipment",
				"checkup_status",
				"checkup_item",
				"checkup_time",
				"checkup_cost",
				"chc_id"
			);
		}
		return checkList;
	}

	GetReportData(query) {
		var templateData = [];
		if (query) {

			templateData = this.DBCon('tbl_patient_booking')
				.join('tbl_report', 'tbl_patient_booking.booking_id', '=', 'tbl_report.booking_id')
				.where(query)
				.select()
		} else {
			templateData = this.DBCon.from('tbl_patient_booking')
				.join('tbl_report', 'tbl_patient_booking.booking_id', '=', 'tbl_report.booking_id')
				.select()
		}
		return templateData;
	}

	GetDeliberationData(query) {
		var templateData = [];
		if (query) {

			templateData = this.DBCon('tbl_patient_booking')
				.join('tbl_report', 'tbl_patient_booking.booking_id', '=', 'tbl_report.booking_id')
				.join('tbl_deliberation', 'tbl_deliberation.report_id', '=', 'tbl_report.report_id')
				.where(query)
				.select()
		} else {
			templateData = this.DBCon.from('tbl_patient_booking')
				.join('tbl_report', 'tbl_patient_booking.booking_id', '=', 'tbl_report.booking_id')
				.join('tbl_deliberation', 'tbl_deliberation.report_id', '=', 'tbl_report.report_id')
				.select()
		}
		return templateData;

	}

	GetDeviceType() {

		return this.DBCon.select('equipment_type').from('tbl_device').groupBy('equipment_type');

	}

	GetModuleCheckupItem(query) {

		let checkItem = [];
		if (query) {
			checkItem = this.DBCon.select('*').from('tbl_checkup_item')
				.join('tbl_module_class', 'tbl_module_class.class_id', '=', 'tbl_checkup_item.checkup_class')
				.join('tbl_device', 'tbl_device.equipment_num', '=', 'tbl_checkup_item.checkup_device')
				.where(query);

		} else {

			checkItem = this.DBCon.select('*').from('tbl_checkup_item')
				.join('tbl_module_class', 'tbl_module_class.class_id', '=', 'tbl_checkup_item.checkup_class')
				.join('tbl_device', 'tbl_device.equipment_num', '=', 'tbl_checkup_item.checkup_device');

		}

		return checkItem;

	}

	GetDeviceList(query) {

		let deviceList = [];
		if (query) {
			deviceList = this.DBCon.select('*').from('tbl_device')
				.where(query);
		} else {
			deviceList = this.DBCon.select('*').from('tbl_device');

		}
		return deviceList;

	}

	getHospitalList(query) {
		let hospitalList = [];
		if (query) {
			hospitalList = this.DBCon.select('*').from('tbl_hospital')
				.where(query);
		} else {
			hospitalList = this.DBCon.select('*').from('tbl_hospital');

		}
		return hospitalList;

	}

	getDepartmentList(query) {
		let departmentList = [];
		if (query) {
			departmentList = this.DBCon.select('*').from('tbl_department')
				.where(query);
		} else {
			departmentList = this.DBCon.select('*').from('tbl_department');
		}
		return departmentList;
	}

	GetCheckItem(query) {

		let checkList = [];
		if (query) {
			checkList = this.DBCon.select('*').from('tbl_checkup_item')
				.where(query);
		} else {
			checkList = this.DBCon.select('checkup_device as updevice').from('tbl_checkup_item');

		}
		return checkList;

	}

	GetRoomInfo(query) {

		let roomInfo = [];
		if (query) {
			roomInfo = this.DBCon.select('*').from('tbl_patient_booking')
				.join('tbl_check_list', 'tbl_check_list.chc_booking_id', '=', 'tbl_patient_booking.booking_id')
				.join('tbl_device', 'tbl_device.equipment_num', '=', 'tbl_check_list.checkup_equipment')
				.where(query);

		} else {

			roomInfo = this.DBCon.select('*').from('tbl_check_list')
				.join('tbl_patient_booking', 'tbl_check_list.chc_booking_id', '=', 'tbl_patient_booking.booking_id')
				.join('tbl_device', 'tbl_device.equipment_num', '=', 'tbl_check_list.checkup_equipment');

		}

		return roomInfo;

	}

	DeleteBookingPatient(query) {
		let update = {
			del_staus: userAuthData.usr_id
		};
		return this.DBCon('tbl_patient_booking')
			.where(query)
			.update(update)

	}

	SavePaitentBookingInfo(PatientBookingInfo, where) {
		if (where) {
			return this.DBCon('tbl_patient_booking')
				.where(where)
				.update(PatientBookingInfo)
		} else {
			return this.DBCon('tbl_patient_booking')
				.insert(PatientBookingInfo);
		}

	}

	SaveCheckList(checkListData) {
		return this.DBCon('tbl_patient_booking')
			.insert(checkListData);
	}

	DeleteCheckList(query) {
		return this.DBCon('tbl_check_list').where(query).del()
	}



	DeleteReportInfo(where) {
		return this.DBCon('tbl_template').where(where).del()
	}

	SaveDeliberation(saveData, where) {

		if (where) {
			return this.DBCon('tbl_deliberation')
				.where(where)
				.update(saveData);
		} else {
			return this.DBCon('tbl_deliberation')
				.insert(saveData);
		}


	}

	DeleteDeliberation(where) {
		return this.DBCon('tbl_deliberation').where(where).del()
	}

	SaveTemplate(saveData, where) {

		if (where) {
			return this.DBCon('tbl_template')
				.where(where)
				.update(saveData);
		} else {
			return this.DBCon('tbl_template')
				.insert(saveData);
		}


	}

	DeleteTemplate(where) {
		return this.DBCon('tbl_template').where(where).del()
	}

}
