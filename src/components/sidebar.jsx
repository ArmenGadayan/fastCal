import React, { Component } from "react";
import { useState } from "react";
import { NavItem } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

const Sidebar = ({ foodList }) => {
    const [show, setShow] = useState("");
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    const options = {
        scroll: false,
        backdrop: true,
    };

    return (
        <React.Fragment>
            <button variant="primary" onClick={toggleShow} className="me-2">
                sidebar
            </button>
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
                    {foodList.map((item) => {
                        return (
                            <div>
                                {item.name} {item.calories}
                            </div>
                        );
                    })}
                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    );
};

export default Sidebar;
