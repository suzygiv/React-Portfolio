
import React from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';

function Card(props) {
  return (
    <div className="card">
        <div className="card-header">
          {props.title}
        </div>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
          <Button variant="dark" href={props.Deployed}>Visit App</Button> &nbsp;&nbsp;&nbsp; 
          </li>
          <li>     
          <Button variant="dark" href={props.Github}>Visit Github</Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;