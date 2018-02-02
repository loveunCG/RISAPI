export default class Statistics {
	constructor(data) {
		this.StatisticsModel = data
		this.UserDatas = []
	}

	getQueryRole() {
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

	getStatisticsInfo(request, response) {
		var chartType = 0;
		let chartStyle = 0;
		let chartDate;
		if (request.query.hasOwnProperty('mydateType')) chartType = request.query.mydateType;
		if (request.query.hasOwnProperty('myWorkType')) chartStyle = request.query.myWorkType;
		if (request.query.hasOwnProperty('mydatePart')) chartDate = request.query.mydatePart;
		var query = {
			dateType: chartType,
			date: chartDate
		}
		switch (parseInt(chartStyle)) {
			case 0:
				this.getPatientStatisticsInfo(query, response);
				break;
			case 1:
				this.getReportStatisticsInfo(query, response);
				break;
			case 2:		
				this.getRemoteStatisticsInfo(query, response);
				break;
			case 3:
			 	this.getdeliverationStatisticsInfo(query, response);
				break;
			default:
				break;
		}
	}

	getPatientStatisticsInfo(params, response){
		let StatisticsSelf = this;
		var chartType = params.dateType;
		var monthDate = {
			"1":31,
			"2":28,
			"3":31,
			"4":30,
			"5":31,
			"6":30,
			"7":31,
			"8":31,
			"9":30,
			"10":31,
			"11":30,
			"12":31
		}		
		var months = {
			"1":"01",
			"2":"02",
			"3":"03",
			"4":"04",
			"5":"05",
			"6":"06",
			"7":"07",
			"8":"08",
			"9":"09",
			"10":"10",
			"11":"11",
			"12":"12"
		}
		var curtDate  = params.date;
		
		let realQuery = this.getQueryRole();
		switch (parseInt(chartType)) {
			case 0:	
				var month = parseInt(curtDate.split('-')[1]);
				console.log(monthDate[month]);
				var queryarray = {};
				for (var index = 0; index < monthDate[month]; index++) {
					queryarray[index] = [curtDate+'-0'+index+' 00:00:00', curtDate+'-0'+index+' 23:59:59'];

				}
				getBookingInfoByDate(realQuery, queryarray);				
				break;
			case 1:		
				var queryarray = {};		
				for (var index = 1; index < 13; index++) {
					queryarray[index] = [curtDate+'-'+months[index]+'-01 00:00:00', curtDate+'-'+months[index]+'-'+monthDate[index]+' 23:59:59'];										
				} 
				console.log(queryarray);
				getBookingInfoByDate(realQuery, queryarray);			    	
				break;
			case 2:
				var queryarray = {};	
				for (var index = 0; index < 10; index++) {
					var years = parseInt(curtDate) - index;
					queryarray[years] = [years+'-01-01 00:00:00', years+'-12-31 23:59:59'];										
				}
				getBookingInfoByDate(realQuery, queryarray);		  	
				break;		
			default:
				break;
		}

		async function getBookingInfoByDate(query, params) {
			// console.log(params)
			var sendData = [];
			var date=[];
			var index = 0;
			for (var key in params) {
				console.log(params[key]);
				var data = await StatisticsSelf.StatisticsModel.getBookingListInfo(query, params[key]);
				date[index] = key;
				sendData[index] = data.length;
				index++;

		   }
		   response.send({data: sendData, date: date});
		   return;					
		}
		

	}

	getReportStatisticsInfo(params, response){
		let StatisticsSelf = this;
		var chartType = params.dateType;
		var monthDate = {
			"1":31,
			"2":28,
			"3":31,
			"4":30,
			"5":31,
			"6":30,
			"7":31,
			"8":31,
			"9":30,
			"10":31,
			"11":30,
			"12":31
		}		
		var months = {
			"1":"01",
			"2":"02",
			"3":"03",
			"4":"04",
			"5":"05",
			"6":"06",
			"7":"07",
			"8":"08",
			"9":"09",
			"10":"10",
			"11":"11",
			"12":"12"
		}
		var curtDate  = params.date;
		let realQuery = {'report_doc_name': userAuthData.usr_id };
		switch (parseInt(chartType)) {
			case 0:	
				var month = parseInt(curtDate.split('-')[1]);
				var queryarray = {};
				for (var index = 0; index < monthDate[month]; index++) {
					queryarray[index] = [curtDate+'-0'+index+' 00:00:00', curtDate+'-0'+index+' 23:59:59'];
				}
				getReportByDate(realQuery, queryarray);				
				break;
			case 1:		
				var queryarray = {};		
				for (var index = 1; index < 13; index++) {
					queryarray[index] = [curtDate+'-'+months[index]+'-01 00:00:00', curtDate+'-'+months[index]+'-'+monthDate[index]+' 23:59:59'];										
				} 
				console.log(queryarray);
				getReportByDate(realQuery, queryarray);			    	
				break;
			case 2:
				var queryarray = {};	
				for (var index = 0; index < 10; index++) {
					var years = parseInt(curtDate) - index;
					queryarray[years] = [years+'-01-01 00:00:00', years+'-12-31 23:59:59'];										
				}
				getReportByDate(realQuery, queryarray);		  	
				break;		
			default:
				break;
		}

		async function getReportByDate(query, params) {
			console.log(params)
			var sendData = [];
			var date = [];
			var index = 0;
			for (var key in params) {
				var data = await StatisticsSelf.StatisticsModel.getReportListInfo(query, params[key]);
				date[index] = key;
				sendData[index] = data.length;
				index++;

		   }
		   response.json({data: sendData, date:date});
		   return;					
		}

	}

	getRemoteStatisticsInfo(params, response){
		let StatisticsSelf = this;
		var chartType = params.dateType;
		var monthDate = {
			"1":31,
			"2":28,
			"3":31,
			"4":30,
			"5":31,
			"6":30,
			"7":31,
			"8":31,
			"9":30,
			"10":31,
			"11":30,
			"12":31
		};		
		var months = {
			"1":"01",
			"2":"02",
			"3":"03",
			"4":"04",
			"5":"05",
			"6":"06",
			"7":"07",
			"8":"08",
			"9":"09",
			"10":"10",
			"11":"11",
			"12":"12"
		};

		var curtDate  = params.date;
		let realQuery = this.getQueryRole();
		switch (parseInt(chartType)) {
			case 0:	
				var month = parseInt(curtDate.split('-')[1]);
				var queryarray = {};
				for (var index = 0; index < monthDate[month]; index++) {
					queryarray[index] = [curtDate+'-0'+index+' 00:00:00', curtDate+'-0'+index+' 23:59:59'];
				}
				getRemoteInfo(realQuery, queryarray);				
				break;
			case 1:		
				var queryarray = {};		
				for (var index = 1; index < 13; index++) {
					queryarray[index] = [curtDate+'-'+months[index]+'-01 00:00:00', curtDate+'-'+months[index]+'-'+monthDate[index]+' 23:59:59'];										
				} 
				getRemoteInfo(realQuery, queryarray);			    	
				break;
			case 2:
				var queryarray = {};	
				for (var index = 0; index < 10; index++) {
					var years = parseInt(curtDate) - index;
					queryarray[years] = [years+'-01-01 00:00:00', years+'-12-31 23:59:59'];										
				}
				getRemoteInfo(realQuery, queryarray);		  	
				break;		
			default:
				break;
		}

		async function getRemoteInfo(query, params) {
			var sendData = [];
			var date = [];
			var index = 0;
			for (var key in params) {
				var data = await StatisticsSelf.StatisticsModel.getRemoteList(query, params[key]);
				date[index] = key;
				sendData[index] = data.length;
				index++;
		   }
		   response.send({data:sendData, date:date});
		   console.log(sendData);
		   return;					
		}

	}

	getdeliverationStatisticsInfo(params, response){
		let StatisticsSelf = this;
		var chartType = params.dateType;
		var monthDate = {
			"1":31,
			"2":28,
			"3":31,
			"4":30,
			"5":31,
			"6":30,
			"7":31,
			"8":31,
			"9":30,
			"10":31,
			"11":30,
			"12":31
		}		
		var months = {
			"1":"01",
			"2":"02",
			"3":"03",
			"4":"04",
			"5":"05",
			"6":"06",
			"7":"07",
			"8":"08",
			"9":"09",
			"10":"10",
			"11":"11",
			"12":"12"
		}
		var curtDate  = params.date;
		//userAuthData.usr_name
		let realQuery = {};//{doctor_name: userAuthData.usr_name };
		switch (parseInt(chartType)) {
			case 0:	
				var month = parseInt(curtDate.split('-')[1]);
				console.log(monthDate[month]);
				var queryarray = {};
				for (var index = 0; index < monthDate[month]; index++) {
					queryarray[index] = [curtDate+'-0'+index+' 00:00:00', curtDate+'-0'+index+' 23:59:59'];
				}
				getDeliberation(realQuery, queryarray);				
				break;
			case 1:		
				var queryarray = {};		
				for (var index = 1; index < 13; index++) {
					queryarray[index] = [curtDate+'-'+months[index]+'-01 00:00:00', curtDate+'-'+months[index]+'-'+monthDate[index]+' 23:59:59'];										
				} 
				console.log(queryarray);
				getDeliberation(realQuery, queryarray);			    	
				break;
			case 2:
				var queryarray = {};	
				for (var index = 0; index < 10; index++) {
					var years = parseInt(curtDate) - index;
					queryarray[years] = [years+'-01-01 00:00:00', years+'-12-31 23:59:59'];										
				}
				getDeliberation(realQuery, queryarray);		  	
				break;		
			default:
				break;
		}

		async function getDeliberation(query, params) {
			console.log(query);
			var sendData = [];
			var date = [];
			var index = 0;
			for (var key in params) {
				var data = await StatisticsSelf.StatisticsModel.getDeliList(query, params[key]);
				date[index] = key;
				sendData[index] = data.length;
				index++;		   
			}
		   response.json({data: sendData, date: date});
		   console.log({data: sendData, date: date});
		   return;					
		}

	}


}
