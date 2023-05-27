const Sequelize = require("sequelize");
const { DB } = require("./configuration");

const Connection = new Sequelize(DB);

const db = {
	Sequelize,
	Connection,
};

// Import Database to a base exports
// db.Users = require("./services/v1/users/users.model")(Connection, Sequelize);
db.Admin = require("./services/v1/admin/admin.model")(Connection, Sequelize);
db.Home = require("./services/v1/home/home.model")(Connection, Sequelize);
db.Banner = require("./services/v1/home/banner.model")(Connection, Sequelize);
db.Gallery = require("./services/v1/gallery/gallery.model")(
	Connection,
	Sequelize
);

module.exports = db;
