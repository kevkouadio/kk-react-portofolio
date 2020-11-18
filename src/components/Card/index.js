import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Card(props) {
  return (
    <div className="card" style={{width: 18+"rem" }}>
        <img src={props.picture} className="card-img-top" alt={props.name}/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
        </div>
        <div class="card-body">
            <Link to={props.link} className="card-link">Deployed Website</Link>
            <Link to={props.repo} className="card-link">Github App Repo</Link>
        </div>
    </div>
  );
}

export default Card;