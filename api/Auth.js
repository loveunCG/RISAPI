let jwt = require('jsonwebtoken')
let _ = require('lodash')
let md5 = require('js-md5')
let config = require('../config/config')
let got = require('got')
export default class Auth {
	constructor(data) {
		this.AuthModel = data
		this.UserDatas = []
	}
	createToken(user) {
		return jwt.sign(_.omit(user, 'password'), config.secret, {
			expiresIn: 60 * 60 * 2
		});
	}

	checkUser(req, res) {
		let AuthSelf = this
		let userData = {
			usr_id: req.query.username,
			usr_passwd: md5(req.query.password)
		}
		if (!userData.usr_id ||
			!req.query.password) {
			return res.status(400).send("You must send the username and the password");
		}
		this.AuthModel.GetDoctorInfo(userData).then((params) => {
			if (params.length < 1) {
				let query = {
					pat_id: req.query.username,
					pat_passwd: md5(req.query.password)
				}
				AuthSelf.AuthModel.GetPatientInfo(query)
					.then(param => {
						if (param.length < 1) {
							return res.status(201).send({
								message: "The username or password don't match"
							});
						} else {
							query.pat_name = param[0].pat_name;
							query.pat_IdNum = param[0].pat_IdNum;
							query.pat_status = param[0].pat_status;
							query.usr_is_doctor = false;
							query.id_token = AuthSelf.createToken(query)
							res.status(201).json(query);
						}

					});

			} else if (params[0].usr_status != 1) {
				return res.status(201).json({
					message: "该账号已注销了"
				});
			} else if (!params[0].usr_status && params[0].pat_status != 1) {
				return res.status(201).json({
					message: "该账号已注销了"
				});
			} else {
				if (params[0].usr_id) {
					userData.usr_role = params[0].usr_role;
					userData.usr_is_doctor = true;
					userData.usr_name = params[0].usr_name;
					userData.id = params[0].id;
					userData.usr_hospital = params[0].usr_hospital;
					userData.usr_phone_num = params[0].usr_phone_num;
					async function getRoleUserData() {
						userData.doctor_role = await AuthSelf.AuthModel.getUserRole({
							rle_doctor_id: params[0].id
						});
						userData.id_token = AuthSelf.createToken(userData);
						// console.log(userData);
						res.status(201).json(userData);
					}
					getRoleUserData();
				}
			}
		})
	}

	async getUserRole(query) {
		console.log(query);
		const data = await this.AuthModel.getUserRole(query);
		console.log(data);
		return data;
	}

	registerUser(req, res) {
		let AuthSelf = this
		let registerData = {
			pat_id: req.query.phoneNum,
			pat_phone_num: req.query.phoneNum,
			pat_passwd: md5(req.query.password),
			pat_name: req.query.patName,
			pat_IdNum: req.query.patIDNum,
			pat_status: 1,
			pat_create_time: (new Date()).toISOString().replace(/T/, ' ').replace(/\..+/, '')

		}
		if (!registerData.pat_id || !req.query.password) {
			return res.status(400).send(
				"You must send the username and the password")
		}
		AuthSelf.AuthModel.registerPatient(registerData).then(function(id) {
			console.log(id)
			let token = AuthSelf.createToken(registerData)
			res.status(201).send({
				id_token: token
			});
		}).catch(function(e) {
			console.error(e)
		});
	}

	DuplicationCheck(req, res) {
		let AuthSelf = this
		if (req.query.phonenum == '') {
			res.status(201).send({
				status: true
			});
		}
		let checkData = {
			pat_id: req.query.phonenum
		}
		AuthSelf.AuthModel.CheckDuplicationId(checkData).then(function(params) {
			if (params.length != 0) {
				return res.status(201).send({
					status: false
				})
			} else {
				res.status(201).send({
					status: true
				});
			}

		})
	}

	forgetPassword(req, res) {
		let AuthSelf = this
		if (req.query.pat_id == '' || req.query.password == '') {
			res.status(201).json(false);
		}

		let query = {
			pat_id: req.query.pat_id
		}
		let update = {
			pat_passwd: md5(req.query.password)
		}
		AuthSelf.AuthModel.changePass(query, update)
			.then(function(params) {
				if (params == 1) {
					res.status(201).json({
						status: true
					});
				} else {
					res.status(201).json({
						status: false
					});
				}

			})
			.catch((err) => {

			})
	}

	SendSMS(request, response) {
		let phonenum = request.query.phonenum
		let url = config.smsUri
		let smsContent = config.sms_content
		smsContent += this.GetRandom(100000, 999999)
		url += '&m=' + phonenum + '&c=' + smsContent;
		console.log(encodeURI(url));
		(async () => {
			try {
				const response = await got(url);
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		})();


	}

	GetRandom(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}
}
