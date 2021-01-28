import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';


function Nav() {

    return (<>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" id="navbar">
        <Navbar.Brand href="#home" id="name">SUZANNE GIVNISH</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" id="navbarNav">
                <Link className="nav-link navRight"to="/">ABOUT <span className="sr-only">(current)</span></Link>
                <Link className="nav-link navRight" to="/portfolio">PORTFOLIO</Link>
                <Link className="nav-link navRight" to="/contact">CONTACT</Link>
            </Navbar.Collapse>
    </Navbar>
    </>
    )
}

export default Nav;