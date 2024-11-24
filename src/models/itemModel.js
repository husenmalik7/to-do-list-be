const db = require('../configs/database');

module.exports = {
	getAllItem: (checklistId) => {
		return new Promise((resolve, reject) => {
			db.query(
				'SELECT * FROM items WHERE checklist_id = ($1)',
				[checklistId],
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

	postItem: (body) => {
		return new Promise((resolve, reject) => {
			db.query(
				'INSERT INTO items (name, checklist_id, item_Completion_Status) VALUES ($1, $2, false)',
				[body.itemName, body.checklistId],
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
