import React from "react";

function Table({ transactions }) {
  return (
    <div>
      <div className="columns is-centered">
        <div className="column is-three-quarters">
          <table className="table is-striped is-bordered is-fullwidth">
            <tr>
              <th className="td" style={{ width: "25%", textAlign: "center" }}>
                Date
              </th>
              <th className="td" style={{ width: "25%", textAlign: "center" }}>
                Description
              </th>
              <th className="td" style={{ width: "25%", textAlign: "center" }}>
                Amount
              </th>
              <th className="td" style={{ width: "25%", textAlign: "center" }}>
                Type
              </th>
            </tr>
          </table>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-three-quarters" id="tableDiv">
          <table className="table is-striped is-fullwidth">
            {transactions.map((transaction) => {
              return (
                <tr className="tr" key={transaction.id}>
                  <td
                    className="td"
                    style={{ width: "25%", textAlign: "center" }}
                  >
                    {transaction.txn_date}
                  </td>
                  <td
                    className="td"
                    style={{ width: "25%", textAlign: "center" }}
                  >
                    {transaction.txn_description}
                  </td>
                  <td
                    className="td"
                    style={{ width: "25%", textAlign: "center" }}
                  >
                    {transaction.txn_amount}
                  </td>
                  <td
                    className="td"
                    style={{ width: "25%", textAlign: "center" }}
                  >
                    {transaction.txn_type}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
