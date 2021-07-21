import React, { Component } from "react";

const NavBar = ({ cals }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Total Calories{" "}
          <span className="badge rounded-pill bg-secondary">{cals}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
