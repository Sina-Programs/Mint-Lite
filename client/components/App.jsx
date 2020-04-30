import React from "react";
import Table from "./Table.jsx";
import Display from "./Display.jsx";
import axios from "axios";
import AddTxnForm from "./addTxnForm.jsx";

// PieChart Dependencies
import Pie from "./Pie.jsx";
import * as d3 from "d3";

//DATA GENERATOR FN
function generateData(level) {
  const N = d3.randomUniform(1, 10)();
  let word = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < characters.length; i++) {
    word += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return d3.range(N).map((i) => ({
    id: `${level}-${i}`,
    name: word,
    level: level,
    index: i,
    value: Math.abs(d3.randomNormal()()),
    children: level > 0 ? generateData(level - 1) : [],
  }));
}

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
    const data = generateData(4);
    console.log(data);

    return (
      <div className="app">
        <svg width="500" height="500">
          <Pie data={data} x={250} y={250} />
        </svg>
        <br />
        <Display transactions={this.state.transactions} />
        <br />
        <AddTxnForm addTransaction={this.addTransaction} />
        <br />
        <Table transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
