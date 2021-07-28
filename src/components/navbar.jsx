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
        <div className="navbar-brand">
          Total Calories{" "}
          <span className="badge rounded-pill bg-secondary">{cals}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

//href="#"
