import React from "react";
import ReactDOM from "react-dom";
import FormCheck from 'react-bootstrap/FormCheck';
import Button from 'react-bootstrap/Button';
import "./todo_list_item.css";
class TodoListItem extends React.Component {
  render() {
    return (
      <div className="todo_list_item">
          <FormCheck className="todo_content" onChange={(e)=>this.props.toggleTodo(this.props.todo.id,e.target.checked)} type="checkbox" checked={this.props.todo.completed} ></FormCheck>
          <p className={`todo_content ${this.props.todo.completed?"completed":""}`}>{this.props.todo.name}</p>
        <button className="delete_button todo_content" onClick={()=>this.props.deleteTodo(this.props.todo.id)}>X</button>
      </div>
    );
  }
}

export default TodoListItem;
