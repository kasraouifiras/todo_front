import React from "react";
import ReactDOM from "react-dom";

import "./todo_footer.scss";
class TodoFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: "all",
    };
  }

  render() {
    let clearButton;
    if (this.props.completedItems > 0) {
      clearButton = (
        <a
          className="clear"
          href="#"
          onClick={(event) => this.props.clearCompleted(event)}
        >
          Clear Completed
        </a>
      );
    } else {
      clearButton = "";
    }
    return (
      <div className="filter">
        <p>{this.props.itemsLeft} items left</p>
        <a
          className={`filter-button ${
            this.state.filterType == "all" ? "active" : ""
          }`}
          href="#"
          onClick={(event) => {
            this.setState({ filterType: "all" });
            this.props.filterTodos("all", event);
          }}
        >
          All
        </a>
        <a
          className={`filter-button ${
            this.state.filterType == "active" ? "active" : ""
          }`}
          href="#"
          onClick={(event) => {
            this.setState({ filterType: "active" });
            this.props.filterTodos("active", event);
          }}
        >
          Active
        </a>
        <a
          className={`filter-button ${
            this.state.filterType == "completed" ? "active" : ""
          }`}
          href="#"
          onClick={(event) => {
            this.setState({ filterType: "completed" });
            this.props.filterTodos("completed", event);
          }}
        >
          Completed
        </a>
        {clearButton}
      </div>
    );
  }
}

export default TodoFooter;
