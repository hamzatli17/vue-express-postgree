module.exports = {
    put: {
        tags: ["Inscription-resource"],
        description: "Get Inscription",
        operationId: "getInscription",
        security: [
            {
                ApiKeyAuth: [],
            },
        ],
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "Get a done inscription",
            },
        ],
        responses: {
            201: {
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
