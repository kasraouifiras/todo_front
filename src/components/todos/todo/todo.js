import React from "react";

import AddTodo from "../../../containers/AddTodo";
import FiltredTodoList from '../../../containers/FiltredTodoList';
import Footer from "../../../containers/Footer";

import Container from "react-bootstrap/Container";
import { Redirect } from "react-router-dom";
import { Card } from "react-bootstrap";
import * as _ from "lodash-es";
import "./todo.css";


import * as authenticationService from "../../../services/authentication";
import * as todosServices from "../../../services/todos";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      filteredTodos: [],
      filterType: "all",
      itemsLeft: 0,
      completedItems: 0,
      redirect: !authenticationService.check_login() ? "login" : null,
    };
  }

  clearCompleted = (e) => {
    e.preventDefault();
    const completedTodos = _.filter(this.state.todos, { completed: true });
    completedTodos.forEach((todo) => {
      this.deleteTodo(todo.id);
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <Container>
        <h1 className="page-title">TODOS</h1>
        <div className="full-height d-flex justify-content-center">
          <Card>
            <AddTodo />
            <FiltredTodoList/>   
            <Footer />
          </Card>
        </div>
      </Container>
    );
  }
}

export default Todo;
