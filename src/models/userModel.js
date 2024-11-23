const db = require('../configs/database');

module.exports = {
	registerUser: function (body) {
		return new Promise(function (resolve, reject) {
			db.query(
				'INSERT INTO users (username, password, email) VALUES ($1, $2, $3)',
				[body.username, body.password, body.email],
				function (error) {
					if (!error) {
						resolve(resolve);
					} else {
						reject(error);
					}
				}
			);
		});
	},

	checkIsUserRegistered: (username) => {
		return new Promise((resolve, reject) => {
			db.query(
				'SELECT * FROM users WHERE username = ($1)',
				[username],
				function (error, result) {
					if (!error) {
						resolve(result);
					} else {
						reject(error);
					}
				}
			);
		});
	},
};
