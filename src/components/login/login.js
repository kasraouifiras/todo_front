import React from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";
import * as authenticationService from "../../services/authentication.services";

import "./login.scss";

export default class Login extends React.Component {
  
  constructor() {
    super();
    this.state = {
      loginform: {
        username: "",
        password: "",
      },
      redirect : authenticationService.check_login()?'todos':null
    };
  }

  onEmailChange(e) {
    this.setState({
      loginform: {
        username: e.target.value,
        password: this.state.loginform.password,
      },
    });
  }

  onPasswordChange(e) {
    this.setState({
      loginform: {
        username: this.state.loginform.username,
        password: e.target.value,
      },
    });
  }

  login = (e) => {
    e.preventDefault();
    authenticationService.login(this.state.loginform).then(
      (res) => {
        console.log(res);
        this.props.login()
        this.setState({redirect:'/todos'})
      },
      (error) => {
        console.log(error);
      }
    );
  }
  

  render() {
    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="login-form d-flex justify-content-center text-center">
        <form>
          <h1>Login to the TODOS app</h1>
          <h4>Fill in the form to login</h4>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={(e) => this.onEmailChange(e)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => this.onPasswordChange(e)}
            />
          </div>
          <button onClick={(e) => this.login(e)} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}