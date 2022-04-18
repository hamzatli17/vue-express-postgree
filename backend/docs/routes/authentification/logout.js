module.exports = {
     
        post: {
            tags: ['Authentication-resource'],
            description: 'LogOut',
            operationId: 'LogOut',
            security: [
                {
                    cookieAuth: [],
                },
            ],
            responses: {
                200: {},
            },
        },
    };
    
    


