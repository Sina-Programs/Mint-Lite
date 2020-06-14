import React from 'react';
import Table from './Table.jsx';
import Display from './Display.jsx';
import axios from 'axios';
import AddTxnForm from './addTxnForm.jsx';

// PieChart Dependencies
import Pie from './Pie.jsx';
import * as d3 from 'd3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      data: [],
    };
    this.getTransactions = this.getTransactions.bind(this);
    this.addTransaction = this.addTransaction.bind(this);
    this.chartData = this.chartData.bind(this);
  }

  componentDidMount() {
    this.getTransactions();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.transactions !== this.state.transactions) {
      this.chartData();
    }
  }

  getTransactions() {
    axios
      .get('/api/transactions')
      .then((data) => {
        this.setState({
          transactions: data.data,
        });
      })
      .catch((err) => {
        console.log('transaction get error:', err);
      });
  }

  addTransaction(Txn) {
    axios
      .post('/api/transactions', Txn)
      .then(() => {
        this.getTransactions();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  chartData() {
    let pieDataModel = {};
    this.state.transactions.forEach((transaction) => {
      var category = transaction.category;
      if (!pieDataModel[category] && transaction.txn_type === 'debit') {
        pieDataModel[category] = transaction.txn_amount;
      } else if (pieDataModel[category] && transaction.txn_type === 'debit') {
        pieDataModel[category] += transaction.txn_amount;
      }
    });
    let array = [];
    let i = 0;
    for (var key in pieDataModel) {
      var obj = {
        value: pieDataModel[key],
        name: key,
        index: i,
      };
      i++;
      array.push(obj);
      if (i > 11) {
        break;
      }
    }
    this.setState(
      {
        data: array,
      },
      () => console.log(this.state.data)
    );
  }

  render() {
    return (
      <div className='app'>
        <div className='columns is-centered'>
          <div
            className='column is-half'
            style={{ margin: 'auto', paddingLeft: '12%' }}
          >
            <svg width='500' height='500'>
              <Pie data={this.state.data} x={250} y={250} />
            </svg>
          </div>
        </div>
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

// DATA GENERATOR FN
// function generateData(level) {
//   const N = d3.randomUniform(1, 10)();
//   let word = "";
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (var i = 0; i < characters.length; i++) {
//     word += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return d3.range(N).map((i) => ({
//     id: `${level}-${i}`,
//     name: word,
//     level: level,
//     index: i,
//     value: Math.abs(d3.randomNormal()()),
//     children: level > 0 ? generateData(level - 1) : [],
//   }));
// }

// console.log()

// getPieChartData() {
//   axios
//     .get("/api/chartData")
//     .then((data) =>
//       this.setState({
//         PieChartData: data.data,
//       })
//     )
//     .catch((err) => console.error(err));
// }
