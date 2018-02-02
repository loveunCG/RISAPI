
var fileList = require('node-filelist');
var fs = require('fs');
var path = require('path');
export default class Booking {
	
	constructor(data) {
		this.LessionModel = data
		this.UserDatas = []
	}

	getlessionList(request, response){
		this.LessionModel.getLessionListInfo().then(data=>{
			console.log(data);
			if(data.length < 1){
				response.json([]);
				return;
			} else {
				response.json(data);
				return;
			}
		});
	}

	getShareList(request, response){
		var path = "../../assets/uploads";
		if (request.query.hasOwnProperty('dir_name')) {
			var paths = path + '/' + request.query.dir_name;
			fs.mkdir(paths, '0777' , (data)=>{
				if(data){
					response.json('error');	
				}else{
					fs.readdir(path, function(err, items) {			
						 response.json(items);			
						// response.json('success');	
					});
				}				
			});			
		}else{
			fs.readdir(path, function(err, items) {			
				response.json(items);			
			});		
		}
		
	}

	uploadFile(request, response){

		console.log(request.header('filepath'));
		if (request.query.hasOwnProperty('files')) {
			sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
				if (err)
				return res.status(500).send(err);			
				res.send('File uploaded!');
			});

		}

	}
	
	getShareListContent(request, response){
		var files   = [ "../../assets/uploads" ];
		if (request.query.hasOwnProperty('dir_name')) {
			files = files + '/' + request.query.dir_name;
		}
		var option  = { "ext" : "",
		"isStats":true }; 
		var sendData = [];
		fileList.read(files, option , function (results){
			for(var i=0; i<results.length; i++){
				sendData[i] = {
					"title":path.basename(results[i].path),
					"uploadTime":results[i].stats.ctime				
				 };
			}	
			response.json(sendData);			
		});		
	}
	
}
