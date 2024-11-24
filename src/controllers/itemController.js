const model = require('../models/itemModel');
const form = require('../helper/form');

module.exports = {
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
