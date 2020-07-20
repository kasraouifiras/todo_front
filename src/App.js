import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as authenticationService from "./services/authentication";

import MainLayout from "./components/main-layout/main-layout";
import Home from "./components/home/home";
import Todo from "./components/todos/todo/todo";
import Login from "./components/login/login";
import Register from "./components/register/register";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }

  login = () => {
    this.setState({ loggedIn: true });
  }

  logout = () => {
    authenticationService.logout();
    this.setState({ loggedIn: false });
  }
  render() {
    this.state.loggedIn = authenticationService.check_login()
    return (
      <Router>
        <MainLayout logout={this.logout} loggedIn={this.state.loggedIn}>
          <Switch>
            <Route path="/login">
              <Login login={this.login}/>
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/todos">
              <Todo />
            </Route>
            <Route  path="/">
              <Home loggedIn={this.state.loggedIn}  />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    );
  }
}
