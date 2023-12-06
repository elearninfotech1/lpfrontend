import React from "react";
import { NavLink } from "react-router-dom";
import headerstyles from "./header.module.css";
const Header = () => {
  return (
    <header className={headerstyles.header}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addstudent">
                  Add Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/studentoperation">
                  Delete/Edit Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/employeedata">
                  Employee Data
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addemployee">
                  Add Employee
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/employeeopeartions">
                  Employee Operations
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
