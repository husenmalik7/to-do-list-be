const db = require('../configs/database');

module.exports = {
	changeItemStatus: (itemId) => {
		return new Promise((resolve, reject) => {
			db.query(
				'UPDATE items SET item_completion_status = NOT item_completion_status WHERE id = ($1)',
				[itemId],
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

	deleteItem: (body) => {
		return new Promise((resolve, reject) => {
			db.query(
				'DELETE FROM items WHERE  checklist_id = ($1) and id = ($2)',
				[body.checklistId, body.itemId],
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

	getItemById: (body) => {
		return new Promise((resolve, reject) => {
			db.query(
				'SELECT * FROM items WHERE checklist_id = ($1) and id = ($2)',
				[body.checklistId, body.itemId],
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
