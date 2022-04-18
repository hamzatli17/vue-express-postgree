const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  dialect: dbConfig.dialect,
  operatorsAliases: false,
 
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.inscriptions = require("./inscriptions.js")(sequelize, Sequelize);
db.User = require("./user.js")(sequelize, Sequelize);

module.exports = db;