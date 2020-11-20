import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer role="contentinfo" className="footer">
      
        <ul className="footer__social-links">
          <li className="footer__social-link-item">
            <a href={"https://twitter.com/KevinKouadio30"} title="Link to Twitter Profile"><img src={"./images/twitter.svg"} class="footer__social-image" alt="Twitter" /></a>
          </li>
        </ul>
      
    </footer>
  );
}

export default Footer;
