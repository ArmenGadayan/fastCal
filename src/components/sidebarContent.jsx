import React, { Component } from "react";
import { Icon, IconSize } from "@blueprintjs/core";
import deleteIcon from "../icons/delete.svg";
import addIcon from "../icons/add.svg";

const SidebarContent = ({ foodList, onDeleteItem, onAddItem }) => {
  return (
    <div>
      {foodList.map((item) => {
        return (
          <div>
            <span>
              {item.quantity} {item.name} {item.calories}
              <input
                className="quantityBox"
                type="image"
                src={deleteIcon}
                onClick={() => onDeleteItem(item)}
              />
              <input
                className="quantityBox"
                type="image"
                src={addIcon}
                onClick={() => onAddItem(item.name, item.calories)}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarContent;
