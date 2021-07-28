import React, { Component } from "react";
import Sidebar from "./sidebar";

const NavBar = ({ cals, foodList, onDeleteItem, onAddItem, onReset }) => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Sidebar
          foodList={foodList}
          onDeleteItem={onDeleteItem}
          onAddItem={onAddItem}
        />
        <button className="resetButton" onClick={() => onReset()}>
          Reset
        </button>
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
