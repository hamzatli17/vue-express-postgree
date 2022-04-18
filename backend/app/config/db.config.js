
const { Pool } = require("pg");
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "qqqq",
    DB: "Elitebook",
    dialect: "postgres",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    },


  
}

      console.log("Connexion réussie à la base de données");

