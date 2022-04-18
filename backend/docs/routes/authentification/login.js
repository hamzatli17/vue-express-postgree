module.exports = {
    post: {
        tags: ['Authentication-resource'],
        description: 'User signIn',
        operationId: 'User signIn',
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/SignInInput',
                    },
                },
            },
        },
        responses: {
            201: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Account',
                        },
                    },
                },
            },
            400: {},
            404: {},
            406: {},
            500: {},
        },
    },

};
