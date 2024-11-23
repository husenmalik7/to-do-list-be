const model = require('../models/checklistModel');
const form = require('../helper/form');

module.exports = {
	getAllChecklist: (req, res) => {
		model
			.getAllChecklist()
			.then((response) => {
				let data = [];
				for (let i = 0; i < response.rows.length; i++) {
					const body = {
						id: response.rows[i].id,
						name: response.rows[i].name,
						items: response.rows[i].items,
						checklistCompletionStatus:
							response.rows[i].checklistcompletionstatus,
					};

					data.push(body);
				}

				form.success(res, data);
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
