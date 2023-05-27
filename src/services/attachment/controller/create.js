module.exports = async (req, res, next) => {
	// Get Values

	/* req.file example 
	
	{
		  "fieldname": "File",
		  "originalname": "Screenshot 2023-05-24 044454.png",
		  "encoding": "7bit",
		  "mimetype": "image/png",
		  "destination": "./storage/attachments",
		  "filename": "06e5b978_08ad_4fed_aa26_126211c5138e1685217734264Screenshot_2023_05_24_044454.png",
		  "path": "storage\\attachments\\06e5b978_08ad_4fed_aa26_126211c5138e1685217734264Screenshot_2023_05_24_044454.png",
		  "size": 817187
		}, */

	try {
		res.status(201).json({
			success: true,
			data: req.file || "No Files",
			message: `Attachments uploaded successfully`,
		});
		// On Error
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
