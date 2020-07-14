import React from "react";
import ReactDOM from "react-dom";
import AddTodo from "../add_todo/add_todo";
import TodoList from "../todo_list/todo_list";
import Container from "react-bootstrap/Container";
import { Redirect } from "react-router-dom";
import { Card } from "react-bootstrap";
import * as _ from "lodash-es";
import "./todo.css";

import * as authenticationService from "../../../services/authentication.services";
import * as todosServices from "../../../services/todos.services";



class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      filteredTodos: [],
      filterType: "all",
      itemsLeft: 0,
      completedItems: 0,
      redirect : !authenticationService.check_login()?'login':null,
    };
  }

  componentDidMount() {
    todosServices.showAllTodos().then(
      (res) => {
        let data = res.data;
        if (res.success) {
          data.map((todo) => {
            todo.created_at = new Date(todo.created_at);
          });
          const newTodos = _.orderBy(data, ["created_at"], ["desc"]);
          this.setState({ todos: newTodos });
          this.setState({ filteredTodos: newTodos });
          this.setState({
            itemsLeft: _.filter(newTodos, { completed: false }).length,
          });
          this.setState({
            completedItems: newTodos.length - this.state.itemsLeft,
          });
          console.log(newTodos);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addTodo = (todo) => {
    todosServices.addTodo(todo).then(
      (res) => {
        let data = res.data;
        const newTodos =
          this.state.todos.length > 0 ? [...this.state.todos] : [];
        newTodos.unshift(data);
        this.setState({ todos: newTodos });
        this.filterTodos(this.state.filterType);
        this.setState({
          itemsLeft: _.filter(newTodos, { completed: false }).length,
        });
        console.log("added");
      },
      (error) => {
        console.log(error);
      }
    );
  };
  deleteTodo = (todo_id) => {
    todosServices.deleteTodo(todo_id).then(
      (res) => {
        const todo_idx = _.findIndex(this.state.todos, { id: todo_id });
        const newTodos = [...this.state.todos];
        newTodos.splice(todo_idx, 1);
        this.setState({ todos: newTodos });
        this.filterTodos(this.state.filterType);
        this.setState({
          itemsLeft: _.filter(newTodos, { completed: false }).length,
        });
        this.setState({
          completedItems: newTodos.length - this.state.itemsLeft,
        });
        console.log("deleted");
      },
      (error) => {
        console.log(error);
      }
    );
  };
  toggleTodo = (todo_id, completed) => {
    todosServices.updateTodo(todo_id, { completed: completed }).then(
      (res) => {
        let data = res.data;
        const todo_idx = _.findIndex(this.state.todos, { id: todo_id });
        const newTodos =
          this.state.todos.length > 0 ? [...this.state.todos] : [];
        newTodos[todo_idx] = data;
        this.setState({ todos: newTodos });
        this.filterTodos(this.state.filterType);
        this.setState({
          itemsLeft: _.filter(newTodos, { completed: false }).length,
        });
        this.setState({
          completedItems: newTodos.length - this.state.itemsLeft,
        });
        console.log("toggled");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  /*type : all, completed, active */
  filterTodos = (type, e = null) => {
    if (e) e.preventDefault();
    if (type == "all") {
      this.setState({ filteredTodos: this.state.todos });
    } else if (type == "completed") {
      const filteredTodos = _.orderBy(
        _.filter(this.state.todos, { completed: true }),
        ["created_at"],
        ["desc"]
      );
      console.log(filteredTodos);
      this.setState({ filteredTodos: filteredTodos });
    } else if (type == "active") {
      const filteredTodos = _.orderBy(
        _.filter(this.state.todos, { completed: false }),
        ["created_at"],
        ["desc"]
      );
      console.log(filteredTodos);
      this.setState({ filteredTodos: filteredTodos });
    }
    this.setState({ filterType: type });
  };

  toggleAll = (e) => {
    e.preventDefault();
  };

  clearCompleted = (e) => {
    e.preventDefault();
    const completedTodos = _.filter(this.state.todos, { completed: true });
    completedTodos.forEach((todo) => {
      this.deleteTodo(todo.id);
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
  }
    return (
      <Container>
        <h1 className="page-title">TODOS</h1>
        <div className="full-height d-flex justify-content-center">
          <Card>
            <AddTodo addTodo={this.addTodo} />
            <TodoList
              deleteTodo={this.deleteTodo}
              toggleTodo={this.toggleTodo}
              filterTodos={this.filterTodos}
              clearCompleted={this.clearCompleted}
              itemsLeft={this.state.itemsLeft}
              completedItems={this.state.completedItems}
              todos={this.state.filteredTodos}
            />
          </Card>
        </div>
      </Container>
    );
  }
}

export default Todo;
