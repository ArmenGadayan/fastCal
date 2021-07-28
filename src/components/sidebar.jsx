import React, { Component } from "react";
import { useState } from "react";
import { NavItem } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import SidebarContent from "./sidebarContent";
import { Icon, IconSize } from "@blueprintjs/core";

const Sidebar = ({ foodList, onDeleteItem, onAddItem }) => {
  const [show, setShow] = useState("");
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const options = {
    scroll: false,
    backdrop: true,
  };

  return (
    <React.Fragment>
      <button variant="primary" onClick={toggleShow} className="menuButton">
        <Icon icon="menu" />
      </button>{" "}
      <Offcanvas
        show={show}
        onHide={handleClose}
        scroll={true}
        backdrop={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Food List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SidebarContent
            foodList={foodList}
            onDeleteItem={onDeleteItem}
            onAddItem={onAddItem}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
};

export default Sidebar;
