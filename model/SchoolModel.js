import Base from '../model/BaseModel'

export default class SchoolModel extends Base {

	constructor(data) {
		super(data);
	}

	getLessionListInfo(query) {
		let lessionInfo = [];
		if (query) {
			lessionInfo = this.DBCon.select('*').from('tbl_lession_info')
				.join('tbl_doctor', 'tbl_lession_info.lession_doctor', '=', 'tbl_doctor.id')
				.where(query)
				.select(
					"lession_title",
					"usr_name as lession_doctor_name",
					"lession_doctor",
					"start_time",
					"lession_class",
					"lession_id"
				);
		} else {
			lessionInfo = this.DBCon.select('*').from('tbl_lession_info')
				.join('tbl_doctor', 'tbl_lession_info.lession_doctor', '=', 'tbl_doctor.id')
				.select(
					"lession_title",
					"usr_name as lession_doctor_name",
					"lession_doctor",
					"start_time",
					"lession_class",
					"lession_id"
				);
		}
		return lessionInfo;
	}

}
