import React from "react";
import { Redirect } from "react-router-dom";
import * as authenticationService from "../../services/authentication";
import AuthContext from "../../contexts/AuthContext";
import "./register.scss";

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      registerform: {
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        c_password: "",
      },
      success: false,
    };
  }

  onEmailChange(e) {
    this.setState({
      registerform: {
        email: e.target.value,
        first_name: this.state.registerform.first_name,
        last_name: this.state.registerform.last_name,
        password: this.state.registerform.password,
        c_password: this.state.registerform.c_password,
      },
    });
  }

  onFirstNameChange(e) {
    this.setState({
      registerform: {
        email: this.state.registerform.email,
        first_name: e.target.value,
        last_name: this.state.registerform.last_name,
        password: this.state.registerform.password,
        c_password: this.state.registerform.c_password,
      },
    });
  }

  onLastNameChange(e) {
    this.setState({
      registerform: {
        email: this.state.registerform.email,
        first_name: this.state.registerform.first_name,
        last_name: e.target.value,
        password: this.state.registerform.password,
        c_password: this.state.registerform.c_password,
      },
    });
  }
  onPasswordChange(e) {
    this.setState({
      registerform: {
        email: this.state.registerform.email,
        first_name: this.state.registerform.first_name,
        last_name: this.state.registerform.last_name,
        password: this.state.registerform.password,
        c_password: this.state.registerform.c_password,
      },
    });
  }

  onConfirmPasswordChange(e) {
    this.setState({
      registerform: {
        email: this.state.registerform.email,
        first_name: this.state.registerform.first_name,
        last_name: this.state.registerform.last_name,
        password: this.state.registerform.password,
        c_password: e.target.value,
      },
    });
  }

  register(e) {
    e.preventDefault();
    authenticationService.register(this.state.registerform).then(
      (res) => {
        console.log(res);
        this.setState({ success: true });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  render() {
    if (this.state.success) {
      return <Redirect to="login" />;
    }
    return (
      <AuthContext>
        {(context) => (
          <div className="register-form d-flex justify-content-center text-center">
            {context.isLoggedIn && <Redirect to="todos" />}
            <form>
              <h1>Registration for the TODOS app</h1>
              <h4>Fill in the form to register</h4>
              <div className="row">
                <div className="form-group col-12">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    onChange={(e) => this.onEmailChange(e)}
                  />
                </div>

                <div className="form-group col-6">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    onChange={(e) => this.onFirstNameChange(e)}
                  />
                </div>

                <div className="form-group col-6">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    onChange={(e) => this.onLastNameChange(e)}
                  />
                </div>

                <div className="form-group col-6">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={(e) => this.onPasswordChange(e)}
                  />
                </div>

                <div className="form-group col-6">
                  <label htmlFor="cpassword">Password Confirmation</label>
                  <input
                    type="password"
                    className="form-control"
                    id="cpassword"
                    onChange={(e) => this.onConfirmPasswordChange(e)}
                  />
                </div>
              </div>

              <button
                onClick={(e) => this.register(e)}
                className="btn btn-primary"
              >
                Register
              </button>
            </form>
          </div>
        )}
      </AuthContext>
    );
  }
}
