module.exports = {
    components: {
        schemas: {
           
          
            User: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        description: "User's identification number",
                        example: "1",
                    },
                   user_id: {
                        type: "string",
                        description: "User's first_name",
                        example: "1",
                    },
                    password: {
                        type: "string",
                        description: "User's first_name",
                        example: "shihasdia",
                    },
                  
                },
            },
          
           
       
            Error: {
                type: "object",
                properties: {
                    internal_code: {
                        type: "number",
                    },
                },
            },
        },
        securitySchemes: {
            ApiKeyAuth: {
                type: "apiKey",
                in: "header",
                name: "jwt-token",
            },
        },
    },
};
