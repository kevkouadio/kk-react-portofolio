import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to={process.env.PUBLIC_URL + "/"} className={process.env.PUBLIC_URL + location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
      </li>
      <li className="nav-item">
        <Link
          to={process.env.PUBLIC_URL + "/portofolio"}
          className={process.env.PUBLIC_URL + location.pathname === "/portofolio" ? "nav-link active" : "nav-link"}
        >
          Portofolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={process.env.PUBLIC_URL + "/contact"}
          className={process.env.PUBLIC_URL + location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://kevkouadio.github.io/kk-portofolio/Kouassi-Kevin-Kouadio_Resume.pdf" target="blank">Resume</a>
      </li>
    </ul>
    </div>
    </nav>
  );
}

export default Navbar;
