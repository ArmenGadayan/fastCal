import React, { Component } from "react";
import { Icon, IconSize } from "@blueprintjs/core";
import deleteIcon from "../icons/delete.svg";
import addIcon from "../icons/add.svg";

const SidebarContent = ({ foodList, onDeleteItem }) => {
  return (
    <div>
      {foodList.map((item) => {
        return (
          <div>
            {item.name} {item.calories}
            <button className="m-2" onClick={() => onDeleteItem(item)}>
              {" "}
              delete
              <img src={deleteIcon} alt="my image" />
            </button>
            <button onClick={() => onDeleteItem(item)}>
              {" "}
              add
              <img src={addIcon} alt="my image" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarContent;
