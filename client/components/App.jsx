import React from "react";
import Table from "./Table.jsx";
import Display from "./Display.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
    this.getTransactions = this.getTransactions.bind(this);
  }

  componentDidMount() {
    this.getTransactions();
  }

  getTransactions() {
    return axios
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

  render() {
    return (
      <div className="app">
        <Display transactions={this.state.transactions} />
        <Table transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
