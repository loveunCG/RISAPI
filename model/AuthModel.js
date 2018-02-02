export default class Auth {

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

	GetPatientInfo(query) {
		let patient = []
		if (query) {
			patient = this.DBCon('tbl_patient').where(query).select()
		} else {
			patient = this.DBCon('tbl_patient').where(query).select()
		}
		return patient
	}


	registerPatient(data) {
		let patient = this.DBCon.insert(data).into('tbl_patient')
		return patient
	}

	changePass(where, update) {
		return this.DBCon('tbl_patient')
			.where(where)
			.update(update)
	}

	CheckDuplicationId(data) {
		let result = []
		console.log(data)
		if (data.pat_id) {
			result = this.DBCon('tbl_patient').where(data).select()
			return result
		} else if (data.usr_id) {
			result = this.DBCon('tbl_doctor').where(data).select()
			return result
		} else {
			return false

		}
	}
	getUserRole(query) {
		let userRole = []
		if (query) {
			userRole = this.DBCon('tbl_role').where(query).select("rle_name as role");
		} else {
			userRole = this.DBCon('tbl_role').select();
		}
		return userRole;
	}

}
