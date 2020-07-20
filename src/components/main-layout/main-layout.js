import React from "react";
import { Link } from "react-router-dom";


import "./main-layout.scss";

export default class MainLayout extends React.Component {



  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              TODOS
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                {this.props.loggedIn && (
                  <li className="nav-item">
                    <Link to="/todos" className="nav-link">
                      Todos
                    </Link>
                  </li>
                )}
                {this.props.loggedIn && (
                  <li className="nav-item">
                    <Link onClick={()=>this.props.logout()} to="" className="nav-link">
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </header>
        <div className="container main-wrapper">{this.props.children}</div>
      </div>
    );
  }
}
