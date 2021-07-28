import React, { Component } from "react";
import { Icon, IconSize } from "@blueprintjs/core";
import deleteIcon from "../icons/delete.svg";
import addIcon from "../icons/add.svg";

const SidebarContent = ({ foodList, onDeleteItem, onAddItem }) => {
    return (
        <div>
            {foodList.map((item) => {
                return (
                    <div className="sideBarLine qty">
                        <span
                            className="minus bg-dark"
                            onClick={() => onAddItem(item.name, item.calories)}
                        >
                            +
                        </span>
                        <span className="badge rounded-pill bg-secondary m-2">
                            {item.quantity}{" "}
                        </span>
                        <span
                            className="minus bg-dark"
                            onClick={() => onDeleteItem(item)}
                        >
                            -
                        </span>

                        <span className="sideBarCal m-2">
                            {item.name} | {item.calories} cals
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default SidebarContent;
