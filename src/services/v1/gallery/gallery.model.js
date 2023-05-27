module.exports = (sequelize, Sequelize) => {
	const Gallery = sequelize.define("gallery", {
		filename: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	});

	return Gallery;
};
