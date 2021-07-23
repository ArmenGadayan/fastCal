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
                        {item.quantity} {item.name} {item.calories}
                        <input
                            type="image"
                            src={deleteIcon}
                            width="5%"
                            height="5%"
                            onClick={() => onDeleteItem(item)}
                        />
                        <input
                            type="image"
                            src={addIcon}
                            width="5%"
                            height="5%"
                            onClick={() => onAddItem(item.name, item.calories)}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default SidebarContent;
