const model = require('../models/itemModel');
const form = require('../helper/form');

module.exports = {
	changeItemStatus: (req, res) => {
		const checklistId = req.params.checklistId;
		const itemId = req.params.itemId;
		const body = { checklistId, itemId };

		model
			.getItemById(body)
			.then((response) => {
				if (response.rows.length !== 0) {
					model
						.changeItemStatus(itemId)
						.then(() => {
							form.success(res, body);
						})
						.catch((error) => {
							form.failed(res, error);
							console.log(error);
						});
				} else {
					form.violate(res, 'data tidak ditemukan');
				}
			})
			.catch((error) => {
				console.log(error);
			});
	},

	deleteItem: (req, res) => {
		const checklistId = req.params.checklistId;
		const itemId = req.params.itemId;
		const body = { checklistId, itemId };

		model
			.deleteItem(body)
			.then(() => {
				form.success(res, body);
			})
			.catch((error) => {
				console.log(error);
			});
	},

	getItemById: (req, res) => {
		const checklistId = req.params.checklistId;
		const itemId = req.params.itemId;
		const body = { checklistId, itemId };

		model
			.getItemById(body)
			.then((response) => {
				if (response.rows.length !== 0) {
					const data = {
						id: response.rows[0].id,
						name: response.rows[0].name,
						itemCompletionStatus: response.rows[0].item_completion_status,
					};

					form.success(res, data);
				} else {
					form.violate(res, 'tidak ada data');
				}
			})
			.catch((error) => {
				console.log(error);
			});
	},

	getAllItem: (req, res) => {
		const checklistId = req.params.checklistId;

		model
			.getAllItem(checklistId)
			.then((response) => {
				let data = [];
				for (let i = 0; i < response.rows.length; i++) {
					const body = {
						id: response.rows[i].id,
						checklistId: response.rows[i].checklist_id,
						name: response.rows[i].name,
						itemCompletionStatus: response.rows[i].item_completion_status,
					};

					data.push(body);
				}

				form.success(res, data);
			})
			.catch((error) => {
				console.log(error);
			});
	},

	postItem: (req, res) => {
		const { itemName } = req.body;
		const checklistId = req.params.checklistId;
		const body = { itemName, checklistId };

		model
			.postItem(body)
			.then((response) => {
				form.success(res, body);
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
