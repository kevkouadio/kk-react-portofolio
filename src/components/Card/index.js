import React from "react";
//import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Card(props) {
  return (
    <div className="card" id="pCard" style={{width: 18+"rem" }}>
      <h5 className="card-title">{props.name}</h5>
        <img src={props.picture} className="card-img-top" alt={props.name}/>
        <div className="card-body">
            <p className="card-text">{props.description}</p>
        </div>
        <div class="card-body">
            <a href={props.link} className="card-link" target="blank">Deployed Website</a>
            <a href={props.repo} className="card-link" target="blank">Github App Repo</a>
        </div>
    </div>
  );
}

export default Card;