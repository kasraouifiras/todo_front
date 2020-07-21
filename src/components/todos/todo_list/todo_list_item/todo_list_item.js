import React from "react";
import FormCheck from "react-bootstrap/FormCheck";

import "./todo_list_item.scss";
class TodoListItem extends React.Component {


  onBackgroundChange = (e, id) => {
    e.persist()
    this.props.updateTodo(id, { color: e.target.value }, 'color')
  };

  onToggleTodo = (id, completed) => {
    this.props.updateTodo(id, { completed: completed }, 'toggle')
  };

  onPinTodo = (id, pinned) => {
    this.props.updateTodo(id, { pinned: pinned }, 'pin')
  };

  render() {
    return (
      <div
        className="todo_list_item"
        style={{ backgroundColor: this.props.todo.color }}
      >
        <FormCheck
          className="todo_content"
          onChange={(e) =>{
            this.onToggleTodo(this.props.todo.id, e.target.checked)
          }}
          type="checkbox"
          defaultChecked={this.props.todo.completed}
        ></FormCheck>
        <p className={`todo_content ${this.props.todo.completed ? "completed" : ""}`}>{this.props.todo.name}</p>
        <div className="todo_content todo_buttons">
          <input type="color" onBlur={(e) => this.onBackgroundChange(e, this.props.todo.id)} defaultValue={this.props.todo.color} />
          <button
            className=""
            onClick={() => this.onPinTodo(this.props.todo.id, !this.props.todo.pinned)}
          >
            <i className="fas fa-thumbtack"></i>
          </button>
          <button className="" onClick={() => this.props.deleteTodo(this.props.todo.id)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default TodoListItem;
