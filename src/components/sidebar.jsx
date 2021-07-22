import React, { Component } from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const Sidebar = () => {
    const [show, setShow] = useState("");
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <React.Fragment>
            <button variant="primary" onClick={toggleShow} className="me-2">
                sidebar
            </button>
            <Offcanvas
                show={show}
                onHide={handleClose}
                scroll="true"
                backdrop="false"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    );
};

export default Sidebar;
