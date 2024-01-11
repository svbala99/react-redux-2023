import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "../../data/appConstant";
import "./index.scss";
import RouteList from "../../router";

function NavBar() {
  return (
    <>
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-section">
          <div className="navbar-logo">
            <h1>T Suresh</h1>
          </div>
          <div className="navbar-menu">
            <ul>
              <li>
                <Link to="/dashboard">{Menu.HOME}</Link>
              </li>
              <li>
                <Link to="/calender">{Menu.CALENDER}</Link>
              </li>
              <li>
                <Link to="/">{Menu.TODO}</Link>
              </li>
              <li>
                <Link to="/">{Menu.RAILWAY}</Link>
              </li>
              <li>
                <Link to="/">{Menu.CONTACT}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
}

export default NavBar;
