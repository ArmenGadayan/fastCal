import React, { Component } from "react";
import { Icon, IconSize } from "@blueprintjs/core";
import deleteIcon from "../icons/delete.svg";
import addIcon from "../icons/add.svg";

const SidebarContent = ({ foodList, onDeleteItem, onAddItem }) => {
  return (
    <div>
      {foodList.map((item) => {
        return (
          <div className="sideBarLine">
            <span className="badge rounded-pill bg-dark m-2">
              {item.quantity}{" "}
            </span>
            {item.name}{" "}
            <span className="sideBarCal">| {item.calories} cals</span>
            <input
              className="quantityBox1"
              type="image"
              src={deleteIcon}
              onClick={() => onDeleteItem(item)}
            />
            <input
              className="quantityBox2"
              type="image"
              src={addIcon}
              onClick={() => onAddItem(item.name, item.calories)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SidebarContent;
