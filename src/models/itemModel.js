const db = require('../configs/database');

module.exports = {
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
