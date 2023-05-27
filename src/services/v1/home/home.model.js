module.exports = (sequelize, Sequelize) => {
	const Home = sequelize.define("home", {
		title: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		subtitle: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		description: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	});

	return Home;
};
