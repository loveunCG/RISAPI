var fileList = require('node-filelist');
var fs = require('fs');
var path = require('path');
export default class School {

	constructor(data) {
		this.LessionModel = data
		this.UserDatas = []
	}

	getlessionList(request, response) {
		this.LessionModel.getLessionListInfo().then(data => {
			console.log(data);
			if (data.length < 1) {
				response.json([]);
				return;
			} else {
				response.json(data);
				return;
			}
		});
	}

	getShareList(request, response) {
		var path = "../../assets/uploads";
		if (request.query.hasOwnProperty('dir_name')) {
			var paths = path + '/' + request.query.dir_name;
			fs.mkdir(paths, '0777', (data) => {
				if (data) {
					response.json('error');
				} else {
					fs.readdir(path, function(err, items) {
						response.json(items);
						// response.json('success');
					});
				}
			});
		} else {
			fs.readdir(path, function(err, items) {
				response.json(items);
			});
		}

	}

	uploadFile(request, response) {

		console.log(request.header('filepath'));
		if (request.query.hasOwnProperty('files')) {
			sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
				if (err)
					return res.status(500).send(err);
				res.send('File uploaded!');
			});

		}

	}

	getShareListContent(request, response) {
		var files = ["../../assets/uploads"];
		if (request.query.hasOwnProperty('dir_name')) {
			files = files + '/' + request.query.dir_name;
		}
		var option = {
			"ext": "",
			"isStats": true
		};
		var sendData = [];
		fileList.read(files, option, function(results) {
			for (var i = 0; i < results.length; i++) {
				sendData[i] = {
					"title": path.basename(results[i].path),
					"uploadTime": results[i].stats.ctime
				};
			}
			response.json(sendData);
		});
	}

	async getPostList(request, response) {
		let postDatas = await this.LessionModel.getPostInfo();
		if (!postDatas.length) {
			return response.send('there is no post data');
		}
		let send_data = [];
		let comments = await this.LessionModel.getCommmentInfo();
		for (var key in postDatas) {

			let post_id = postDatas[key].post_id;
			send_data[key] = {
				"author": postDatas[key].usr_name,
				"post_id": post_id,
				"author_id": postDatas[key].usr_id,
				"title": postDatas[key].pst_title,
				"createdate": postDatas[key].pst_time,
				"content": postDatas[key].pst_content,
				"number": comments.length,
				"comment": comments
			}
		}
		return response.send(send_data);
	}

	savePost(request, response) {
		if (request.query.hasOwnProperty('pst_title') && request.query.hasOwnProperty('pst_content')) {
			let save_data = {
				pst_title: request.query.pst_title,
				pst_content: request.query.pst_content,
				pst_doctor: userAuthData.usr_id,
				pst_name: userAuthData.usr_name
			}
			if (request.query.hasOwnProperty('post_id')) {
				this.LessionModel.savePostInfo(save_data, request.query.post_id).then(data => {
						return response.send(data);
					})
					.catch(e => {
						return response.send('could not save Post data!');
					});
			} else {
				this.LessionModel.savePostInfo(save_data).then(data => {
						return response.send(data);
					})
					.catch(e => {
						return response.send('could not save Post data!');
					});
			}
		} else {
			return response.send('Please Insert correctly data');
		}

	}
	
	saveComment(request, response) {

		if (request.query.hasOwnProperty('cmt_content') && request.query.hasOwnProperty('cmt_pst_id')) {
			let save_data = {
				cmt_content: request.query.cmt_content,
				cmt_pst_id: request.query.cmt_pst_id,
				cmt_doctor: userAuthData.usr_id
			}
			if (request.query.hasOwnProperty('comment_id')) {
				this.LessionModel.saveCommentInfo()(save_data, request.query.comment_id).then(data => {
						return response.send(data);
					})
					.catch(e => {
						return response.send('could not save Post data!');
					});
			} else {
				this.LessionModel.saveCommentInfo(save_data).then(data => {
						return response.send(data);
					})
					.catch(e => {
						return response.send('could not save Post data!');
					});
			}
		} else {
			return response.send('Please Insert correctly data');
		}

	}

}
