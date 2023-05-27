const { Home } = require("../../../../database");

module.exports = async (_req, res, next) => {
	try {
		const home = await Home.findOne();

		res.status(200).json({
			success: true,
			data: home || {
				title: "Hello World",
				subtitle: "I am a dummy shit",
				description: "Place data bro!!",
			},
			message: `Get Data Successfully!!`,
		});
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
