import React from "react";
//import FooterItems from "../../FooterItems.json";
import "./style.css";

function Footer(props) {
  
  return (
        <div class="card">
          <a href={props.link}><img src={props.picture} className="footer__social-image" alt={props.name} /></a>
        </div>
  );
}

export default Footer;
