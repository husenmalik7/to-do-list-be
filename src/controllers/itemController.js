const model = require('../models/itemModel');
const form = require('../helper/form');

module.exports = {
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
