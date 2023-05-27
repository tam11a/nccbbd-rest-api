const express = require("express");
const router = express.Router();
const schema = require("./home.schema");

router.get(
	"/",
	schema.getData
	/* 	
        #swagger.description = 'Get Home Page Data' 

        #swagger.responses[200] = {
            description: "Successful",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

router.post(
	"/",
	schema.updateOrCreate
	/* 	
        #swagger.description = 'Update or Create Home Data' 

        #swagger.security = [{
            "bearerAuth": []
        }]

        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        "required": ["title", "subtitle", "description"], 
                        "properties": { 
                            "title": { 
                                "type": "string", 
                                "minLength": 1, 
                                "example": "বাংলাদেশ জাতীয় কারুশিল্প পরিষদ" 
                            },
                            "subtitle": { 
                                "type": "string", 
                                "minLength": 1, 
                                "example": "National Crafts Council Of Bangladesh (NCCB)" 
                            },
                            "description": { 
                                "type": "string", 
                                "minLength": 1, 
                                "example": "Bangladesh Jatiya Karushilpa Parishad, National Crafts Council of Bangladesh (NCCB), 
set up in 1985, is the apex body of individuals and organisations engaged in the field of craft research and development. It is registered under Societies Registration Act, 1860 and is the National Entity Member of the World Crafts Council - WCC and WCC Asia Pacific Region." 
                            },
                        } 
                    },
                }
            }
        }

        #swagger.responses[200] = {
            description: "Update Successful",
        }   
        #swagger.responses[400] = {
            description: "Invalid Request",
        }   
        #swagger.responses[401] = {
            description: "Invalid Credentials",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

router.get(
	"/banner",
	schema.getBanners
	/* 	
        #swagger.description = 'Get Banner Images' 

        #swagger.responses[200] = {
            description: "Successful",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

router.post(
	"/banner",
	schema.uploadBanner
	/* 
        #swagger.description = 'Upload Banner' 

        #swagger.security = [{
            "bearerAuth": []
        }]

        #swagger.consumes = ['multipart/form-data']  
        
        #swagger.requestBody = {
            content: {
                "multipart/form-data": {
                    schema: {
                        required: ["File"],
                        properties: {
                            File: {
                                type: "string",
                                format: "binary"
                            }
                        }
                    }
                }
            }
        }

        #swagger.responses[201] = {
            description: "Successful",
        }   
        #swagger.responses[400] = {
            description: "Invalid Request",
        }   
        #swagger.responses[401] = {
            description: "Unauthenticated",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

router.delete(
	"/banner/:id",
	schema.deleteBanner
	/* 
        #swagger.description = 'delete banner image' 

        #swagger.security = [{
            "bearerAuth": []
        }]

        #swagger.responses[200] = {
            description: "Successful",
        }   
        #swagger.responses[400] = {
            description: "Invalid Request",
        }   
        #swagger.responses[401] = {
            description: "Unauthenticated",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

module.exports = router;
