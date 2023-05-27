const { adminAuthorized } = require("../../../authentication");
const paginationPostMiddleware = require("../../../utilities/pagination/pagination.post.middleware");
const paginationPreMiddleware = require("../../../utilities/pagination/pagination.pre.middleware");

module.exports = {
	login: require("./controller/login"),
	validate: [adminAuthorized, require("./controller/validate")],
	register: require("./controller/register"),
	updateProfile: [adminAuthorized, require("./controller/updateProfile")],
	getAllAdmin: [
		paginationPreMiddleware,
		require("./controller/findAllAdmin"),
		paginationPostMiddleware,
	],
};
