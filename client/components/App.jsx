import React from "react";
import Table from "./Table.jsx";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.getTransactions = this.getTransactions.bind(this);
  }

  componentDidMount() {
    this.getTransactions();
  }

  getTransactions() {
    return axios
      .get("/api/transactions")
      .then((data) => {
        console.log("transaction data", data);
      })
      .catch((err) => {
        console.log("transaction get error:", err);
      });
  }

  render() {
    return (
      <div>
        {/* <Table /> */}
        "hello world!"
      </div>
    );
  }
}

export default App;
