import React, { Component } from "react";
import Sidebar from "./sidebar";

const NavBar = ({ cals, foodList, onDeleteItem, onAddItem }) => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Sidebar
          foodList={foodList}
          onDeleteItem={onDeleteItem}
          onAddItem={onAddItem}
        />
        <a className="navbar-brand" href="#">
          Total Calories{" "}
          <span className="badge rounded-pill bg-secondary">{cals}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
