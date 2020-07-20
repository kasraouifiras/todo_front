import React from "react";
import { Link } from "react-router-dom";

import './home.scss'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center home-title">Welcome to the TODOS App</h1>
        <div>
          <p className="text-center app-description">
            This App is made for the testing of reactjs as a frontend with<br/>
            Symfony 5 as backend with lexik jwt authentication and MongoDb for database storage
          </p>
          { !this.props.loggedIn &&(
          <div className="text-center">
            <p>A registration is necessary for the usage of this App</p>
            <div className="buttons">
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
            </div>
          </div>)}
        </div>
      </div>
    );
  }
}
