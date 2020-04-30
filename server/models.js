const db = require("../database/database.js");
const util = require("util");

const getTransactions = () => {
  return db.Transactions.findAll({
    order: [["id", "DESC"]],
  });
};

const addTransaction = (Txn) => {
  return db.Transactions.create({
    txn_date: Txn.date,
    txn_description: Txn.description,
    txn_amount: Txn.amount,
    txn_type: Txn.txn_type,
    category: Txn.category,
  });
};
module.exports = { getTransactions, addTransaction };
