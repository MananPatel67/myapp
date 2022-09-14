import React from "react";
import { Link } from "react-router-dom";
import TaskManager from "../Images/TaskManager.jpg";
import { NavItem } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ml-auto">
      <a className="navbar-brand" href="#">
        <img src={TaskManager} width="100" height="50"></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todo">
              To-Do
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/topay">
              To-Pay
            </Link>
          </li>
          

          
          {/* <NavItem eventKey={1} href="#">Hello</NavItem> */}
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li> */}
        </ul>
        <button className="btn sign-up-btn" style={{marginLeft:"auto", marginRight:"10px"}} type="button">
            Sign up
          </button>
      </div>
    </nav>
  );
};
export default Navbar;
