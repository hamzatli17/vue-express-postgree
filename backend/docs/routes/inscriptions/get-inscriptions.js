module.exports = {
    get: {
        tags: ["Inscription-resource"],
        description: "Get Inscriptions",
        operationId: "getInscriptions",
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
                    "The number of Inscriptions to skip before starting to collect the result set",
            },
            {
                name: "limit",
                in: "query",
                type: "integer",
                required: false,
                description: "The numbers of Inscriptions to return",
            },
        ],
        responses: {
            200: {
                content: {
                    "application/json": {
                        schema: {
                            items: { $ref: "#/components/schemas/Inscription" },
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
