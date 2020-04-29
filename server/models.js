const db = require("../database/database.js")

const models = {
    getTransacations: () => {
        db.Transactions.findAll()
    }
}

module.exports = models;