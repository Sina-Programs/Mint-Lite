const db = require("../database/database.js");
const util = require("util");

const getTransactions = () => {
  return db.Transactions.findAll();
};
module.exports = { getTransactions };
