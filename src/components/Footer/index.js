import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <footer role="contentinfo" className="footer">
      <div className="row">
        <ul className="footer__social-links">
          <li className="footer__social-link-item">
            <Link to={"https://twitter.com/KevinKouadio30"} title="Link to Twitter Profile"><img src={"./images/twitter.svg"} class="footer__social-image" alt="Twitter" /></Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
