module.exports = {
    post: {
        tags: ["User-resource"],
        description: "Get User",
        operationId: "getUser",
        security: [
            {
              
            },
        ],
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas",
                },
                required: true,
                description: "Get a done User",
            },
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
