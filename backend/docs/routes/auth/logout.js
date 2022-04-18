module.exports = {
    post: {
        tags: ["User-resource"],
        description: "Get Users",
        operationId: "getUsers",
        security: [
            {
                ApiKeyAuth: [],
            },
        ],
        parameters: [
         
        ],
        responses: {
            201: {
                content: {
                    "application/json": {
                        schema: {
                            items: { $ref: "#/components/schemas/User" },
                        },
                    },
                },
            },
            401: {},
            403: {},
            404: {},
            500: {},
        },
    },
};
