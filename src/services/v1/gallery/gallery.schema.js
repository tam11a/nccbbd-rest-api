const { adminAuthorized } = require("../../../authentication");
const paginationPostMiddleware = require("../../../utilities/pagination/pagination.post.middleware");
const { upload } = require("../../../utilities/upload/upload.pre.middleware");

module.exports = {
	getBanners: [
		require("./controller/getBannerImages"),
		paginationPostMiddleware,
	],
	uploadBanner: [
		adminAuthorized,
		upload.single("File"),
		require("./controller/uploadBannerImage"),
	],
	deleteBanner: [adminAuthorized, require("./controller/deleteBannerImage")],
};
