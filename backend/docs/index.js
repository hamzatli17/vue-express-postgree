const basicInfo = require("./basicInfo");
const servers = require("./servers");
const components = require("./components");
const tags = require("./tags");
const security = require("./security");
const routes = require("./routes");

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...security,
    ...routes,
};
