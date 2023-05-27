const { Home } = require("../../../../database");

module.exports = async (req, res, next) => {
	try {
		const home = await Home.findByPk(1);

		if (home) {
			const { title, subtitle, description } = req.body;
			home.update({ title, subtitle, description });
		} else
			await Home.create(
				{ ...req.body },
				{
					fields: ["title", "subtitle", "description"],
				}
			);

		res.status(200).json({
			success: true,
			message: "Data updated successfully!",
		});
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
