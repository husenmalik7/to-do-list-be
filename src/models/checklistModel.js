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

	postChecklist: (body) => {
		return new Promise((resolve, reject) => {
			db.query(
				'INSERT INTO checklists (name, checklistCompletionStatus) VALUES ($1, false)',
				[body.name],
				(error, result) => {
					if (!error) {
						resolve(result);
					} else {
						reject(error);
					}
				}
			);
		});
	},

	deleteChecklist: (id) => {
		return new Promise((resolve, reject) => {
			db.query(
				'DELETE FROM checklists WHERE id = ($1)',
				[id],
				(error, result) => {
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
