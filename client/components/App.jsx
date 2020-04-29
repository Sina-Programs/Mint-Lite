import React from "react";
import Table from "./Table.jsx";
import Display from "./Display.jsx";
import axios from "axios";
import AddTxnForm from "./addTxnForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
    this.getTransactions = this.getTransactions.bind(this);
    this.addTransaction = this.addTransaction.bind(this);
  }

  componentDidMount() {
    this.getTransactions();
  }

  getTransactions() {
    axios
      .get("/api/transactions")
      .then((data) => {
        this.setState({
          transactions: data.data,
        });
      })
      .catch((err) => {
        console.log("transaction get error:", err);
      });
  }

  addTransaction(Txn) {
    axios
      .post("/api/transactions", Txn)
      .then(() => {
        this.getTransactions();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="app">

        <AddTxnForm addTransaction={this.addTransaction} />
        <br />
        <Display transactions={this.state.transactions} />
        <br />
        <Table transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
