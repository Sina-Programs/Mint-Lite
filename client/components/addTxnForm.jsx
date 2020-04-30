import React from "react";

class AddTxnForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.currentDate(),
      description: "",
      amount: null,
      category: "",
      txn_type: "",
    };

    this.currentDate = this.currentDate.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  currentDate() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    return date;
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleAmountChange(event) {
    this.setState({ amount: event.target.value });
  }

  handleTypeChange(event) {
    this.setState({ txn_type: event.target.value });
  }

  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }

  render() {
    return (
      <form>
        <div className="level">
          <div className="level-item">
            <input
              type="text"
              className="input inputSpace"
              placeholder="Description..."
              style={{ margin: "10px" }}
              onChange={this.handleDescriptionChange}
            />
          </div>
          <div className="level-item">
            <input
              type="number"
              className="input inputSpace"
              placeholder="Amount..."
              style={{ margin: "10px" }}
              onChange={this.handleAmountChange}
            />
          </div>
          <div className="level-item">
            <input
              type="text"
              className="input inputSpace"
              placeholder="Category..."
              style={{ margin: "10px" }}
              onChange={this.handleCategoryChange}
            />
          </div>
          <div className="level-item">
            <input
              type="text"
              className="input inputSpace"
              placeholder="Txn_type..."
              style={{ margin: "10px" }}
              onChange={this.handleTypeChange}
            />
            <button
              type="Submit"
              className="button"
              style={{ margin: "10px" }}
              onClick={(event) => {
                event.preventDefault();
                this.props.addTransaction(this.state);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddTxnForm;
