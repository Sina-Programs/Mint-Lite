import React from "react";
import Table from "./Table.jsx";
import Pie from "./Pie.jsx";
import axios from "axios";
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
    const data = generateData(4);
    console.log(data);

    return (
      <div>
        <div>
          <svg width="500" height="500">
            <Pie data={data} x={250} y={250} />
          </svg>
        </div>
        <span role="img" aria-label="money-pie">
          💵 🥧 💵
        </span>
        {/* <Table /> */}
        "hello world!"
      </div>
    );
  }
}

export default App;
