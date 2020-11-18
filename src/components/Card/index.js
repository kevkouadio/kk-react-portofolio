import React from "react";
import { Link } from "react-router-dom";
//import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Card() {
  return (
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="card-body">
            <Link to="#" class="card-link">Card link</Link>
            <Link to="#" class="card-link">Another link</Link>
        </div>
    </div>
  );
}

export default Card;