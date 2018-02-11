export default class Auth {

	constructor(data) {
		this.DBCon = data;
	}

	getDoctorInfo(query) {
		var users = [];
		if (query) {
			users = this.DBCon('tbl_doctor').where(query).select();
		} else {
			users = this.DBCon.select('*').from('tbl_doctor');
		}
		return users;
	}

	GetPatientInfo(query) {
		let patient = [];
		if (query) {
			patient = this.DBCon('tbl_patient').where(query).select();
		} else {
			patient = this.DBCon('tbl_patient').where(query).select();
		}
		return patient;
	}

	registerPatient(data) {
		let patient = this.DBCon.insert(data).into('tbl_patient');
		return patient;
	}

	changePass(where, update) {
		return this.DBCon('tbl_patient').where(where).update(update);
	}

	CheckDuplicationId(data) {
		let result = [];
		if (data.pat_id) {
			result = this.DBCon('tbl_patient').where(data).select();
			return result;
		} else if (data.usr_id) {
			return result = this.DBCon('tbl_doctor').where(data).select();
		} else {
			return false;
		}
	}

	getUserRole(query) {
		let userRole = [];
		if (query) {
			userRole = this.DBCon('tbl_role').where(query).select("rle_name as role");
		} else {
			userRole = this.DBCon('tbl_role').select();
		}
		return userRole;
	}

	checkPhoneNumber(query) {
		return this.DBCon('tbl_phone_verify').where(query).select();
	}

	updatePhoneVerify(data, isSave) {
		let query = {phonenum: data.phonenum};
		if (!isSave) {
			console.log('insert');
			return this.DBCon('tbl_phone_verify').insert(data);
		} else {
			console.log('update');
			return this.DBCon('tbl_phone_verify').where(query).update(data);
		}
	}

}
