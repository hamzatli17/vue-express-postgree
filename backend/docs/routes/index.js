

const user = require("./user");
const authentification  = require("./authentification");
const inscriptions  = require("./inscriptions");

module.exports = {
    paths: {
        ...authentification,
        ...inscriptions,
        ...user,
    },
};
