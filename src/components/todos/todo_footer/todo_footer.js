import React from "react";

import "./todo_footer.scss";

class TodoFooter extends React.Component {
  render() {
    let clearButton;
    let completedItems = this.props.todos.filter((todo) => todo.completed)
      .length;
    if (completedItems > 0) {
      clearButton = (
        <a
          className="clear"
          href="/"
          onClick={(event) => {
            event.preventDefault();
            this.props.clearCompleted();
          }}
        >
          Clear Completed
        </a>
      );
    } else {
      clearButton = "";
    }
    return (
      <div className="filter container">
        <p>{this.props.todos.length - completedItems} items left</p>
        <a
          className={`filter-button ${
            this.props.filter === "all" ? "active" : ""
          }`}
          href="/"
          onClick={(event) => {
            event.preventDefault();
            this.props.changeFilter("all");
          }}
        >
          All
        </a>
        <a
          className={`filter-button ${
            this.props.filter === "active" ? "active" : ""
          }`}
          href="/"
          onClick={(event) => {
            event.preventDefault();
            this.props.changeFilter("active");
          }}
        >
          Active
        </a>
        <a
          className={`filter-button ${
            this.props.filter === "completed" ? "active" : ""
          }`}
          href="/"
          onClick={(event) => {
            event.preventDefault();
            this.props.changeFilter("completed");
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
