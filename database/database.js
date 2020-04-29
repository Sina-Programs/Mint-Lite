const sequelize = require("sequelize");

// create "budget"

const db = new sequelize("budgets", "root", "mySQLDBMS", {
  dialect: "mysql",
});

const Transactions = db.define("transactions", {
  date: { type: sequelize.STRING },
  description: { type: sequelize.STRING },
  amount: { type: sequelize.FLOAT },
  category: { type: sequelize.STRING },
  account_name: { type: sequelize.STRING },
});

const Accounts = db.define("accounts", {
    account_name: { type: sequelize.STRING },
    transaction_type: { type: sequelize.STRING },
})

Transactions.sync();
Accounts.sync();

module.exports.Transactions = Transactions;
module.exports.Accounts = Accounts;