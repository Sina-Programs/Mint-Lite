import React from "react";

function Table({ transactions }) {
  return (
    <div className="txn">
      <table className="table is-striped is-fullwidth">
        <thead className="tr">
          <th className="td">Date</th>
          <th className="td">Description</th>
          <th className="td">Amount</th>
          <th className="td">Type</th>
        </thead>
        {transactions.map((transaction) => {
          return (
            <tr className="tr" key={transaction.id}>
              <td className="td">{transaction.txn_date}</td>
              <td className="td">{transaction.txn_description}</td>
              <td className="td">{transaction.txn_amount}</td>
              <td className="td">{transaction.txn_type}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
