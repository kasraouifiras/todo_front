import React from "react";

import AddTodo from "../../../containers/AddTodo";
import FiltredTodoList from "../../../containers/FiltredTodoList";
import Footer from "../../../containers/Footer";

import { Redirect } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";

import "./todo.css";
class Todo extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => (
          <div className="container">
            {!context.isLoggedIn && <Redirect to="login" />}
            <h1 className="page-title">TODOS</h1>
            <div className="full-height d-flex justify-content-center">
              <div className="card">
                <AddTodo />
                <FiltredTodoList />
                <Footer />
              </div>
            </div>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Todo;
