const model = require('../models/userModel');
const form = require('../helper/form');
const jwt = require('jsonwebtoken');

module.exports = {
	registerUser: function (req, res) {
		const { username, password, email } = req.body;
		const body = { username, password, email };

		model
			.checkIsUserRegistered(body.username)
			.then((response) => {
				if (response.length === 0) {
					model
						.registerUser(body)
						.then(() => {
							form.success(res, body);
						})
						.catch((error) => {
							form.failed(res, error);
							console.log(error);
						});
				} else {
					form.violate(res, 'username tersebut telah terdaftar');
				}
			})
			.catch((error) => {
				console.log(error);
			});
	},

	loginUser: function (req, res) {
		const { username, password } = req.body;
		const body = { username, password };

		model
			.checkIsUserRegistered(body.username)
			.then((response) => {
				if (response.length === 0) {
					res.json({ message: 'username tidak ditemukan' });
				} else {
					const username = response[0].username;
					const password = response[0].password;

					const isPasswordTrue = body.password.localeCompare(password);

					if (isPasswordTrue === 0) {
						const token = jwt.sign(
							{ username: username, password: password },
							process.env.JWT_PRIVATE_KEY,
							{ expiresIn: '24h' },
							(_, token) => {
								form.success(res, {token});
							}
						);
					} else {
						res.json({ message: 'password is not correct' });
					}
				}
			})
			.catch((error) => {
				console.log(error);
			});
	},

	getUserById: (req, res) => {
		const id = req.params.id;

		model
			.getUserById(id)
			.then((response) => {
				if (response.length) {
					res.status(200).json({ status: 200, response });
				} else {
					res.status(400).json({ status: 400, message: 'error fetch data' });
				}
			})
			.catch((error) => {
				console.log(error);
				res.status(400).json({ status: 400, message: 'error fetch data' });
			});
	},
};