import React from "react";
import "./Shape.css";

const Shape = props => (
  <div className="shape">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.incScore(props.id)} />
    </div>
    </div>
);

export default Shape;
