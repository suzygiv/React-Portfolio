import React from "react";
import { Link } from "react-router-dom";


function Nav() {

    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <Link className="navbar-brand" to="/">SUZANNE GIVNISH</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav right hide-on-med-and-down">
                <li className="nav-item">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-link navRight"to="/">ABOUT <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link navRight" to="/portfolio">PORTFOLIO</Link>
                    <Link className="nav-link navRight" to="/contact">CONTACT</Link>
                </div>
                </li>
            </ul>
        </div>
        </nav>
    </>
    )
}

export default Nav;