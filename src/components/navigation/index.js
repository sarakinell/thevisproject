import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "../../assets/images/logovisualisering.png";

class Navigation extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="title-wrapper">
          <Link className="logo-navigation" to="/">
            <img src={logo} className="title-element" alt="logo" />
          </Link>
        </div>
        <div className="navigation-wrapper">
          <Link className="navigation-element" to="/">
            Home
          </Link>
          <Link className="navigation-element" to="/blog">
            Blog
          </Link>
          <Link className="navigation-element" to="/about">
            About
          </Link>
        </div>
      </header>
    );
  }
}
export default Navigation;
