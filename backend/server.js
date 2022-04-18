const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const swaggerUI = require("swagger-ui-express");
const docs = require("./docs");
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./app/models");
db.sequelize.sync();
app.use(require("./app/routes/index"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to test application." });
});

const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});