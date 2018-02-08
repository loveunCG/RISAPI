import Base from '../model/BaseModel'
export default class ContactModel extends Base {

	constructor(data) {
		super(data);
	}

	getRemoteReviewList(query, between, between2) {
		var RemoteData = [];
		if (query) {
			RemoteData = this.DBCon.from('tbl_contact_info')
				.leftJoin('tbl_patient_booking', 'tbl_patient_booking.booking_id', '=', 'tbl_contact_info.patient_id')
				.where(query)
				.whereBetween('submit_time', between)
				.whereBetween('contact_start_time', between2)
				.whereNotIn('contact_status', [2, 5])
				.select(
					"patient_name",
					"patient_gender",
					"patient_age",
					"license_num",
					"contact_status",
					"patient_id",
					"contact_id",
					"req_hospital",
					"contact_type"
				);
		} else {
			RemoteData = this.DBCon.from('tbl_contact_info')
				.leftJoin('tbl_patient_booking', 'tbl_patient_booking.booking_id', '=', 'tbl_contact_info.patient_id')
				.whereBetween('submit_time', between)
				.whereBetween('contact_start_time', between2)
				.whereNotIn('contact_status', [2, 5])
				.select(
					"patient_name",
					"patient_gender",
					"patient_type",
					"patient_age",
					"license_num",
					"contact_status",
					"patient_id",
					"contact_id",
					"req_hospital",
					"contact_type"
				);
		}
		return RemoteData;
	}

	getRemoteList(query, between) {
		var hospital_name = userAuthData.usr_hospital;
		var RemoteData = [];
		if (query) {
			RemoteData = this.DBCon.from('tbl_contact_info')
				.leftJoin('tbl_patient_booking', 'tbl_patient_booking.booking_id', '=', 'tbl_contact_info.patient_id')
				.where(query)
				.whereBetween('submit_time', between)
				.select(
					"patient_name",
					"patient_gender",
					"patient_age",
					"license_num",
					"contact_status",
					"patient_id",
					"contact_id",
					"req_hospital",
					"contact_type"
				);
		} else {
			RemoteData = this.DBCon.from('tbl_contact_info')
				.leftJoin('tbl_patient_booking', 'tbl_patient_booking.booking_id', '=', 'tbl_contact_info.patient_id')
				.whereBetween('submit_time', between)
				.select(
					"patient_name",
					"patient_gender",
					"patient_type",
					"patient_age",
					"license_num",
					"contact_status",
					"patient_id",
					"contact_id",
					"req_hospital",
					"contact_type"
				);
		}
		return RemoteData;
	}

	saveRomoteReview(data, where) {
		return this.DBCon('tbl_contact_info')
			.where(where)
			.update(data);

	}

	saveContactMemberData(data) {
		return this.DBCon('tbl_contact_member')
			.insert(data);
	}

	getRemoteView(query) {
		var hospital_name = userAuthData.usr_hospital;
		var RemoteData = [];
		if (query) {
			RemoteData = this.DBCon.from('tbl_contact_info')
				.leftJoin('tbl_patient_booking', 'tbl_patient_booking.booking_id', '=', 'tbl_contact_info.patient_id')
				.where(query)
				.select(
					"patient_name",
					"patient_gender",
					"patient_age",
					"set_class",
					"license_num",
					"image_num",
					"contact_status",
					"patient_id",
					"contact_id",
					"set_hospital",
					"set_class",
					"set_check_time",
					"contact_problem",
					"disease_summary",
					"medical_history",
					"checkup_image_upload",
					"checkup_result",
					"contact_type"
				);
		} else {
			RemoteData = this.DBCon.from('tbl_contact_info')
				.leftJoin('tbl_patient_booking', 'tbl_patient_booking.booking_id', '=', 'tbl_contact_info.patient_id')
				.select(
					"patient_name",
					"patient_gender",
					"patient_age",
					"set_class",
					"license_num",
					"image_num",
					"contact_status",
					"patient_id",
					"contact_id",
					"set_hospital",
					"set_class",
					"contact_problem",
					"set_check_time",
					"disease_summary",
					"medical_history",
					"checkup_image_upload",
					"checkup_result",
					"contact_type"
				);
		}
		return RemoteData;
	}

	saveRemoteData(saveData, where) {
		// console.log('this is save', saveData, 'this is  where', where);
		if (where.contact_id) {
			return this.DBCon('tbl_contact_info')
				.where(where)
				.update(saveData);
		} else {
			return this.DBCon('tbl_contact_info')
				.insert(saveData);
		}

	}

}
