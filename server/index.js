const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database/database");
const models = require("./models");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/api/transactions", (req, res) => {
  models
    .getTransactions()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("error getting transaction data:", err);
      res.sendStatus(400);
    });
});

app.post("/api/transactions", (req, res) => {
  console.log("POST REQUEST", req.body);
  models
    .addTransaction(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// app.get("/api/chartData", (req, res) => {
//   models
//     .getChartData()
//     .then((data) => res.send(data))
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(400);
//     });
// });

// app.get("/api/dates", (req, res) => {
//   models
//     .getDates()
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       console.log("error getting dates data:", err);
//     });
// });

// app.get("/api/categories", (req, res) => {
//   models
//     .getCategories()
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       console.log("error getting categories data:", err);
//     });
// });
