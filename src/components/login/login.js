import React from "react";
import { Redirect, Link } from "react-router-dom";
import * as authenticationService from "../../services/authentication";
import AuthContext from "../../contexts/AuthContext";
import "./login.scss";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginform: {
        username: "",
        password: "",
      },
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

  login = (e, updateLoggedIn) => {
    e.preventDefault();
    authenticationService.login(this.state.loginform).then(
      (res) => {
        console.log(res);
        updateLoggedIn();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => (
          <div className="login-form d-flex justify-content-center text-center">
            {context.isLoggedIn && <Redirect to="todos" />}
            <form className="card">
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
              <button
                onClick={(e) => this.login(e, context.updateLoggedIn)}
                className="btn btn-primary"
              >
                Login
              </button>
              <p style={{marginTop:20+'px'}}>If you don't have an account go 
              <Link
                to="/register"
                className="nav-link"
              >
                Register
              </Link></p>
            </form>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}
