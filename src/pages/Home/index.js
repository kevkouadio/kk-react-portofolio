import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="header__text-box row">
      <div className="header__text">
        <div id="imgDiv"> 
          <img id="intro-img"src="./images/IMG-1808.jpg"/>
        </div>
        <div id="textDiv">
        <h1 className="heading-primary">
          <span>Kouassi Kevin Kouadio</span>
        </h1>
        <p>Full Stack Web Developer based in East Orange, New Jersey. I am currently looking for new opportunities.</p>
        <Link to="/contact" className="btn btn--pink">Contact Me</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
