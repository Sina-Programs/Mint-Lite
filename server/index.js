const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database/database");
const models = require("./models");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "../dist/"));

app.get("/api/transactions", (req, res) => {
  models
    .getAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("error getting transaction data:", err);
    });
});

app.get("/api/dates", (req, res) => {
  models
    .getDates()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("error getting dates data:", err);
    });
});

app.get("/api/categories", (req, res) => {
  models
    .getCategories()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("error getting categories data:", err);
    });
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
