module.exports = {
    get: {
        tags: ["User-resource"],
        description: "Get Users",
        operationId: "getUsers",
        security: [
            {
                ApiKeyAuth: [],
            },
        ],
        parameters: [
            {
                name: "offset",
                in: "query",
                type: "integer",
                required: false,
                description:
                    "The number of users to skip before starting to collect the result set",
            },
            {
                name: "limit",
                in: "query",
                type: "integer",
                required: false,
                description: "The numbers of users to return",
            },
        ],
        responses: {
            200: {
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
