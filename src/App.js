import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";

import MainLayout from "./components/main-layout/main-layout";
import Home from "./components/home/home";
import Todo from "./components/todos/todo/todo";
import Login from "./components/login/login";
import Register from "./components/register/register";
export default class App extends React.Component {

  
  render() {
    return (
      <Router>
        <AuthProvider>
          <MainLayout>
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/todos">
                <Todo />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </MainLayout>
        </AuthProvider>
      </Router>
    );
  }
}
