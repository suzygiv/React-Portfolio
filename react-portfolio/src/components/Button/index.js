import React from "react";
import Col from "../Col/index";
import Row from "../Row/index";
import { Link } from "react-router-dom";

function Button() {
    return(
    <div>
        <Row>
            <Col class="col=md-12">
                <Link to="/contact">
                    <button className="btn btn">CONTACT</button>
                </Link> 

            </Col>
        </Row>
    </div>
    );
}


export default Button; 