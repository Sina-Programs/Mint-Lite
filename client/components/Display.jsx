import React from "react";
import numeral from "numeral";
import ReactDOM from "react-dom";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalIn: 0,
      totalOut: 0,
      Net: 0,
    };
    this.getTotals = this.getTotals.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.transactions !== this.props.transactions) {
      this.getTotals(this.props.transactions);
    }
  }

  getTotals(transactions) {
    var earned = 0;
    var spent = 0;
    var net = 0;
    transactions.forEach((transaction) => {
      if (transaction.txn_type === "debit") {
        spent += transaction.txn_amount;
        net -= transaction.txn_amount;
      } else {
        earned += transaction.txn_amount;
        net += transaction.txn_amount;
      }
    });

    this.setState({
      totalIn: numeral(Math.round(100 * earned) / 100).format(0, 0),
      totalOut: numeral(Math.round(100 * spent) / 100).format(0, 0),
      Net: numeral(Math.round(100 * net) / 100).format(0, 0),
    });
  }

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-four-fifths">
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Money In</p>
                <p className="title has-text-success">${this.state.totalIn}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Money Out</p>
                <p className="title has-text-danger	">${this.state.totalOut}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              {this.state.Net < 0 ? (
                <div>
                  <p className="heading">Total</p>
                  <p className="title has-text-success">${this.state.Net}</p>
                </div>
              ) : (
                <div>
                  <p className="heading">Total</p>
                  <p className="title has-text-danger">${this.state.Net}</p>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Display;
