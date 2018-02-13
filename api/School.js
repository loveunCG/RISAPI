var fileList = require('node-filelist');
var fs = require('fs');
var path = require('path');
let moment = require('moment');

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
		for (var key in postDatas) {
			let post_id = postDatas[key].post_id;
			let query = {
				cmt_pst_id: post_id
			}
			let comments = await this.LessionModel.getCommmentInfo(query);
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
				pst_doctor: userAuthData.id,
				pst_name: userAuthData.usr_name,
				pst_time: moment().format('YYYY-MM-DD h:mm:ss')
			}
			if (request.query.hasOwnProperty('post_id')) {
				this.LessionModel.savePostInfo(save_data, request.query.post_id).then(data => {
						return response.send({
							data: null,
							message: 'successfuly!',
							response_code: 1
						});
					})
					.catch(e => {
						return response.send({
							data: null,
							message: 'could not save Post data!',
							response_code: 0
						});
					});
			} else {
				this.LessionModel.savePostInfo(save_data).then(data => {
						return response.send({
							data: null,
							message: 'successfuly!',
							response_code: 1
						});
					})
					.catch(e => {
						return response.send({
							data: null,
							message: 'could not save Post data!',
							response_code: 0
						});
					});
			}
		} else {
			return response.send({
				data: null,
				message: 'Please Insert correctly data',
				response_code: 0
			});
		}

	}

	saveComment(request, response) {

		if (request.query.hasOwnProperty('cmt_content') && request.query.hasOwnProperty('cmt_pst_id')) {
			let save_data = {
				cmt_content: request.query.cmt_content,
				cmt_pst_id: request.query.cmt_pst_id,
				cmt_doctor: userAuthData.id,
				cmt_time: moment().format('YYYY-MM-DD h:mm:ss')
			}
			if (request.query.hasOwnProperty('comment_id')) {
				this.LessionModel.saveCommentInfo(save_data, request.query.comment_id).then(data => {
						return response.send({
							data: null,
							message: 'successfuly',
							response_code: 1
						});
					})
					.catch(e => {
						return response.send({
							data: null,
							message: 'could not save Post data!',
							response_code: 0
						});
					});
			} else {
				this.LessionModel.saveCommentInfo(save_data).then(data => {
						return response.send({
							status: 'error',
							message: 'could not save Post data!',
							response_code: 0
						});
					})
					.catch(e => {
						return response.send({
							data: null,
							message: 'could not save Post data!',
							response_code: 0
						});
					});
			}
		} else {
			return response.send({
				data: null,
				message: 'please insert full parameter',
				response_code: 0
			});
		}

	}

	async deleteComment(request, response) {
		let query = {
			comment_id: request.query.comment_id
		}
		let postData = await this.LessionModel.getCommmentInfo(query);
		console.log(postData[0].cmt_doctor, userAuthData.id);

		if (postData[0].cmt_doctor == userAuthData.id) {
			console.log(query);
			this.LessionModel.deleteCommentInfo(query).then(data => {
				if (data) {
					return response.send({
						data: null,
						message: 'could not save Post data!',
						response_code: 0
					});
				} else {
					return response.send({
						status: 'error',
						message: 'could not delete Comment Data!',
						response_code: 0
					});
				}
			});
		} else {

			return response.send({
				status: 'error',
				message: 'could not delete Comment Data!',
				response_code: 0
			});

		}

	}

	async deletePost(request, response) {
		let query = {
			post_id: request.query.post_id
		}
		let postData = await this.LessionModel.getPostInfo(query);
		if (postData[0].pst_doctor == userAuthData.id) {
			this.LessionModel.deletePostInfo(query).then(data => {
				if (data) {
					return response.send({
						data: null,
						message: 'successfuly',
						response_code: 1
					});
				} else {
					return response.send({
						status: 'error',
						message: 'could not delete Post data!',
						response_code: 0
					});
				}

			});
		} else {
			return response.send({
				status: 'error',
				message: 'could not delete Post data!',
				response_code: 0
			});
		}
	}

}
