module.exports = {
	success: (res, data) => {
		res
			.status(200)
			.json({
				statusCode: 2000,
				message: 'Proses save berhasil',
				errorMessage: null,
				appears: data.length,
				data,
			});
	},

	failed: (res, error) => {
		res.status(400).json({ status: 400, message: error });
	},

	violate: (res, message) => {
		res.status(400).json({ status: 400, message });
	},
};
