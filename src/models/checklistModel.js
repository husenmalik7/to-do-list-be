const db = require('../configs/database');

module.exports = {
	getAllChecklist: () => {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM checklists', (error, result) => {
				if (!error) {
					resolve(result);
				} else {
					reject(error);
				}
			});
		});
	},
};
