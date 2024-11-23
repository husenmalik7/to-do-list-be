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

	postChecklist: (req, res) => {
		const { name } = req.body;
		const body = { name };

		model
			.postChecklist(body)
			.then((response) => {
				form.success(res, body);
			})
			.catch((error) => {
				console.log(error);
			});
	},

	deleteChecklist: (req, res) => {
		const id = req.params.id;

		model
			.deleteChecklist(id)
			.then(() => {
				form.success(res, id);
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
