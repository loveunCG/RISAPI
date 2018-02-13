import Base from '../model/BaseModel'

export default class StatisticsModel extends Base {

	constructor(data) {
		super(data);
	}

	getBookingListInfo(query, between) {
		var bookingData = [];
		if (query) {
			bookingData = this.DBCon('tbl_patient_booking')
				.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
				.leftJoin('tbl_hospital', 'tbl_patient_booking.hospital_name', '=', 'tbl_hospital.hospital_name')
				.where(query)
				.whereBetween('booking_time', between)
				.groupBy('tbl_patient_booking.booking_id')
				.select(
					"image_num"
				);
		} else {
			bookingData = this.DBCon('tbl_patient_booking')
				.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
				.leftJoin('tbl_hospital', 'tbl_patient_booking.hospital_name', '=', 'tbl_hospital.hospital_name')
				.whereBetween('booking_time', between)
				.groupBy('tbl_patient_booking.booking_id')
				.select(
					"image_num"
				);
		}
		return bookingData;
	}

	getReportListInfo(query, between) {
		var reportData = [];
		if (query) {
			reportData = this.DBCon('tbl_patient_booking')
				.leftJoin('tbl_check_list', 'tbl_check_list.chc_booking_id', '=', 'tbl_patient_booking.booking_id')
				.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
				.leftJoin('tbl_hospital', 'tbl_patient_booking.hospital_name', '=', 'tbl_hospital.hospital_name')
				.where(query)
				.whereBetween('report_time', between)
				.groupBy('tbl_report.report_id')
				.select(
					"image_num"
				);
		} else {
			reportData = this.DBCon('tbl_patient_booking')
				.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
				.leftJoin('tbl_check_list', 'tbl_check_list.chc_booking_id', '=', 'tbl_patient_booking.booking_id')
				.leftJoin('tbl_hospital', 'tbl_patient_booking.hospital_name', '=', 'tbl_hospital.hospital_name')
				.whereBetween('report_time', between)
				.groupBy('tbl_report.report_id')
				.select(
					"image_num"
				);
		}
		return reportData;
	}

	getRemoteList(query, between) {
		var RemoteData = [];
		if (query) {
			RemoteData = this.DBCon.from('tbl_contact_info')
				.leftJoin('tbl_patient_booking', 'tbl_patient_booking.booking_id', '=', 'tbl_contact_info.patient_id')
				.where(query)
				.whereBetween('submit_time', between)
				.groupBy('contact_id')
				.select(
					"patient_name",
				);
		} else {
			RemoteData = this.DBCon.from('tbl_contact_info')
				.leftJoin('tbl_patient_booking', 'tbl_patient_booking.booking_id', '=', 'tbl_contact_info.patient_id')
				.whereBetween('submit_time', between)
				.groupBy('contact_id')
				.select(
					"contact_id",
				);
		}
		return RemoteData;
	}

	getDeliList(query, deliTime) {
		var hospital_name = userAuthData.usr_hospital;
		var bookingData = this.DBCon('tbl_patient_booking')
			.leftJoin('tbl_report', 'tbl_report.booking_id', '=', 'tbl_patient_booking.booking_id')
			.leftJoin('tbl_deliberation', 'tbl_deliberation.report_id', '=', 'tbl_report.report_id')
			.leftJoin('tbl_hospital', 'tbl_hospital.hospital_name', '=', 'tbl_patient_booking.hospital_name')
			.where(query)
			.whereBetween('deliberation_time', deliTime)
			.groupBy('deliberation_id')
			.select(
				"image_num"
			);
		return bookingData;
	}

}
