const db = require("../database/database.js");
const util = require("util");
const sequelize = require("sequelize");

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

// const getChartData = () => {
//   return db.Transactions.findAll({
//     attributes: [
//       "category",
//       [
//         sequelize.fn("SUM", sequelize.col("txn_amount")),
//         "get_total_spend_by_category",
//       ],
//     ],
//     group: ["category"],
//   })
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// };

// test
// console.log(getChartData());

module.exports = { getTransactions, addTransaction };
