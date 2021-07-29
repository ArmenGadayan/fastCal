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
        <span>
          <button className="resetButton m-2" onClick={() => onReset()}>
            Reset
          </button>
          <span className="navbar-brand">
            Total Calories{" "}
            <span className="badge rounded-pill bg-secondary">{cals}</span>
          </span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;

//href="#"
