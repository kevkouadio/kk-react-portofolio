import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <div id="homeContainer" >
      <div className="header__text">
       
          <img id="intro-img" src="https://kevkouadio.github.io/kk-portofolio/images/IMG-1808.jpg" alt="Kouassi Kevin"/>
       
        <div id="textDiv">
        <h1 className="heading-primary">
          <span>Kouassi Kevin Kouadio</span>
        </h1>
        <p>Full Stack Web Developer based in East Orange, New Jersey. I am currently looking for new opportunities.</p>
        <Link to="/contact" className="btn btn-primary">Contact Me</Link>
        </div>
      </div>
    </div>
   
  );
}

export default Home;
