const sequelize = require("sequelize");

// create "budget" database in terminal mysql shell

const db = new sequelize("budgets", "root", "", {
  dialect: "mysql",
});

const Transactions = db.define("transactions", {
  txn_date: { type: sequelize.STRING },
  txn_description: { type: sequelize.STRING },
  txn_amount: { type: sequelize.FLOAT },
  txn_type: { type: sequelize.STRING },
  category: { type: sequelize.STRING },
  account_name: { type: sequelize.STRING },
  createdAt: { type: sequelize.DATE, allowNull: true },
  updatedAt: { type: sequelize.DATE, allowNull: true },
});

Transactions.sync();

module.exports.Transactions = Transactions;
