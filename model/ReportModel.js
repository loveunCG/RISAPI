import Base from '../model/BaseModel'

export default class ReportModel extends Base {

	constructor(data) {
		super(data);
	}

	GetReportListInfo(query, between) {
		var bookingData = [];
		if (query) {
			bookingData = this.DBCon('tbl_patient_booking')
				.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
				.leftJoin('tbl_hospital', 'tbl_patient_booking.hospital_name', '=', 'tbl_hospital.hospital_name')
				.where(query)
				.whereBetween('booking_time', between)
				.whereNotIn('booking_status', [1, 6])
				// .whereNotIn('report_doc_name', userAuthData.usr_id)
				.groupBy('tbl_patient_booking.booking_id')
				.select(
					"image_num",
					"patient_name",
					"patient_gender",
					"patient_type",
					"patient_age",
					"license_num",
					"tbl_patient_booking.hospital_name",
					"checked_time",
					"booking_time",
					"booking_status",
					"req_doctor_name",
					"report_doc_name",
					"Imaging_performance",
					"tbl_patient_booking.hospital_name as hostipalName",
					"tbl_patient_booking.booking_id as pb_booking_id"
				);
		} else {
			bookingData = this.DBCon('tbl_patient_booking')
				.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
				.whereNotIn('booking_status', [1, 6])
				.whereBetween('booking_time', between)
				// .whereNotIn('report_doc_name', userAuthData.usr_id)
				.groupBy('tbl_patient_booking.booking_id')
				.select(
					"image_num",
					"patient_name",
					"patient_gender",
					"patient_type",
					"patient_age",
					"tbl_patient_booking.hospital_name as hostipalName",
					"license_num",
					"checked_time",
					"booking_time",
					"booking_status",
					"req_doctor_name",
					"report_doc_name",
					"Imaging_performance",
					"tbl_patient_booking.booking_id as pb_booking_id"
				);
		}
		return bookingData;
	}

	getmyReportListInfo(query, between, between1) {
		var bookingData = [];
		console.log(query);
		bookingData = this.DBCon('tbl_patient_booking')
			.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
			.leftJoin('tbl_deliberation', 'tbl_report.report_id', '=', 'tbl_deliberation.report_id')
			.leftJoin('tbl_hospital', 'tbl_patient_booking.hospital_name', '=', 'tbl_hospital.hospital_name');
		if (query) bookingData = bookingData.where(query);
		if (between) bookingData = bookingData.whereBetween('report_time', between);
		if (between1) bookingData = bookingData.whereBetween('booking_time', between1);
		bookingData = bookingData.whereNotIn('booking_status', [1, 2, 6])
			.groupBy('tbl_patient_booking.booking_id')
			.select(
				"image_num",
				"patient_name",
				"patient_gender",
				"patient_type",
				"patient_age",
				"license_num",
				"tbl_patient_booking.hospital_name",
				"checked_time",
				"booking_time",
				"booking_status",
				"req_doctor_name",
				"report_doc_name",
				"Imaging_performance",
				"tbl_patient_booking.hospital_name as hostipalName",
				"tbl_patient_booking.booking_id as pb_booking_id"
			);

		return bookingData;
	}

	GetReportDetailInfo(query, alternative) {
		var bookingData = [];
		if (alternative) {
			bookingData = this.DBCon('tbl_patient_booking')
				.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
				.leftJoin('tbl_deliberation', 'tbl_deliberation.report_id', '=', 'tbl_report.report_id')
				.where(query)
				.whereNot(alternative)
				.groupBy('tbl_report.report_id')
				.select(
					"image_num",
					"patient_name",
					"patient_gender",
					"patient_type",
					"patient_age",
					"license_num",
					"remote_status",
					"booking_status",
					"checked_time",
					"booking_time",
					"req_doctor_name",
					"image_degree",
					"urgency_status",
					"positive_status",
					"report_doc_name",
					"checked_time",
					"doctor_name",
					"impression",
					"recommend_report",
					"Imaging_performance",
					"tbl_patient_booking.hospital_name as hostipal_name",
					"tbl_report.report_id as pb_report_id",
					"tbl_patient_booking.booking_id as pb_booking_id"
				);
		} else if (query) {
			bookingData = this.DBCon('tbl_patient_booking')
				.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
				.leftJoin('tbl_deliberation', 'tbl_deliberation.report_id', '=', 'tbl_report.report_id')
				.groupBy('tbl_report.report_id')
				.select(
					"image_num",
					"patient_name",
					"patient_gender",
					"patient_type",
					"patient_age",
					"impression",
					"remote_status",
					"license_num",
					"recommend_report",
					"checked_time",
					"booking_time",
					"tbl_patient_booking.hospital_name as hostipal_name",
					"checked_time",
					"image_degree",
					"urgency_status",
					"positive_status",
					"booking_status",
					"req_doctor_name",
					"report_doc_name",
					"doctor_name",
					"Imaging_performance",
					"tbl_report.report_id as pb_report_id",
					"tbl_patient_booking.booking_id as pb_booking_id"
				)
				.where(query)
		} else {
			bookingData = this.DBCon.from('tbl_patient_booking')
				.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
				.leftJoin('tbl_deliberation', 'tbl_deliberation.report_id', '=', 'tbl_report.report_id')
				.select(
					"image_num",
					"patient_name",
					"patient_gender",
					"patient_type",
					"impression",
					"patient_age",
					"checked_time",
					"license_num",
					"tbl_patient_booking.hospital_name as hostipal_name",
					"image_degree",
					"urgency_status",
					"positive_status",
					"booking_status",
					"checked_time",
					"booking_time",
					"req_doctor_name",
					"recommend_report",
					"report_doc_name",
					"doctor_name",
					"Imaging_performance",
					"tbl_report.report_id as pb_report_id",
					"tbl_patient_booking.booking_id as pb_booking_id"
				);

		}
		return bookingData;
	}

	GetReportListPast(query) {
		var bookingData = [];
		if (query) {
			bookingData = this.DBCon('tbl_patient_booking')
				.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
				.leftJoin('tbl_deliberation', 'tbl_deliberation.report_id', '=', 'tbl_report.report_id')
				.select(
					"image_num",
					"patient_name",
					"patient_gender",
					"patient_type",
					"patient_age",
					"impression",
					"remote_status",
					"license_num",
					"recommend_report",
					"checked_time",
					"booking_time",
					"tbl_patient_booking.hospital_name as hostipal_name",
					"checked_time",
					"image_degree",
					"urgency_status",
					"positive_status",
					"booking_status",
					"req_doctor_name",
					"report_doc_name",
					"doctor_name",
					"Imaging_performance",
					"tbl_report.report_id as pb_report_id",
					"tbl_patient_booking.booking_id as pb_booking_id"
				)
				.where(query)
		} else {
			bookingData = this.DBCon.from('tbl_patient_booking')
				.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
				.leftJoin('tbl_deliberation', 'tbl_deliberation.report_id', '=', 'tbl_report.report_id')
				.select(
					"image_num",
					"patient_name",
					"patient_gender",
					"patient_type",
					"impression",
					"patient_age",
					"checked_time",
					"license_num",
					"tbl_patient_booking.hospital_name as hostipal_name",
					"image_degree",
					"urgency_status",
					"positive_status",
					"booking_status",
					"checked_time",
					"booking_time",
					"req_doctor_name",
					"recommend_report",
					"report_doc_name",
					"doctor_name",
					"Imaging_performance",
					"tbl_report.report_id as pb_report_id",
					"tbl_patient_booking.booking_id as pb_booking_id"
				);

		}
		return bookingData;
	}

	getDeliberationInfo(query) {
		var bookingData = [];
		var alternative = {
			booking_status: 1,
			booking_status: 2
		}
		if (query) {
			bookingData = this.DBCon('tbl_patient_booking')
				.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
				.leftJoin('tbl_deliberation', 'tbl_deliberation.report_id', '=', 'tbl_report.report_id')
				.whereNot(alternative)
				.select(
					"image_num",
					"patient_name",
					"patient_gender",
					"patient_type",
					"patient_age",
					"license_num",
					"booking_status",
					"checked_time",
					"deliberation_content",
					"req_doctor_name",
					"image_degree",
					"urgency_status",
					"positive_status",
					"report_doc_name",
					"doctor_name",
					"deliberation_id",
					"recommend_report",
					"Imaging_performance",
					"tbl_report.report_id as pb_report_id",
					"tbl_patient_booking.booking_id as pb_booking_id"
				)
				.where(query);
		} else {
			bookingData = this.DBCon.from('tbl_check_list')
				.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
				.leftJoin('tbl_deliberation', 'tbl_deliberation.report_id', '=', 'tbl_report.report_id')
				.whereNot(alternative)
				.select(
					"image_num",
					"patient_name",
					"patient_gender",
					"deliberation_id",
					"patient_type",
					"patient_age",
					"license_num",
					"booking_status",
					"checked_time",
					"deliberation_content",
					"req_doctor_name",
					"image_degree",
					"urgency_status",
					"positive_status",
					"report_doc_name",
					"doctor_name",
					"recommend_report",
					"Imaging_performance",
					"tbl_report.report_id as pb_report_id",
					"tbl_patient_booking.booking_id as pb_booking_id"
				);

		}
		return bookingData;
	}

	getDeliList(query, reportTime, deliTime) {
		var hospital_name = userAuthData.usr_hospital;
		console.log(query, 'this is my operation', reportTime);
		var bookingData = this.DBCon('tbl_patient_booking')
			.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
			.leftJoin('tbl_deliberation', 'tbl_deliberation.report_id', '=', 'tbl_report.report_id')
			.leftJoin('tbl_hospital', 'tbl_hospital.hospital_name', '=', 'tbl_patient_booking.hospital_name')
			.whereNotIn('booking_status', [1, 2, 7, 6]);
		if (query) {
			bookingData = bookingData.where(query);
		}
		if (reportTime) {
			bookingData = bookingData.whereBetween('report_time', reportTime);

		}
		if (deliTime) {
			bookingData = bookingData.whereBetween('deliberation_time', deliTime);

		}
		bookingData = bookingData.select(
			"image_num",
			"patient_name",
			"patient_gender",
			"patient_type",
			"patient_age",
			"license_num",
			"booking_status",
			"checked_time",
			"deliberation_content",
			"req_doctor_name",
			"image_degree",
			"urgency_status",
			"positive_status",
			"report_doc_name",
			"doctor_name",
			"recommend_report",
			"Imaging_performance",
			"tbl_report.report_id as pb_report_id",
			"tbl_patient_booking.booking_id as pb_booking_id"
		);
		return bookingData;
	}

	SaveReportInfo(saveData, where) {
		console.log(saveData);
		if (where) {
			return this.DBCon('tbl_report')
				.where(where)
				.update(saveData);
		} else {
			return this.DBCon('tbl_report')
				.insert(saveData);
		}

	}

	UpdateBookingData(data, where) {
		console.log('data', data, "where", where);
		return this.DBCon('tbl_patient_booking')
			.where(where)
			.update(data);
	}

}
