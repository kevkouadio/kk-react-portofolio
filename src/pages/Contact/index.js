import React from "react";
import "./style.css"


function Contact() {
    return (
        
<div className="card" id="contact-card">
    <div className="card-header">
        <h3>My Contacts</h3>
    </div>
    <div className="card-body">
        <div>  
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><i class="fa fa-phone" aria-hidden="true"></i> Phone: +1 862-339-8389</li>
                <li className="list-group-item"><i class="fa fa-github" aria-hidden="true"></i> GitHub: <a href="https://github.com/kevkouadio/" target="blank">https://github.com/kevkouadio/</a></li>
                <li className="list-group-item"><i class="fa fa-linkedin" aria-hidden="true"></i> Linkdin: <a href="https://www.linkedin.com/in/kouassi-kevin-kouadio-b731a071/" target="blank">Kouassi Kevin KOUADIO</a></li>
                <li className="list-group-item"><i class="fa fa-envelope" aria-hidden="true"></i> Email: kevkouadio@gmail.com</li>
            </ul>
        </div>  
        <form action="mailto:kevkouadio@gmail.com" method="get" enctype="text/plain" >
            <input className="btn btn-primary" type="submit" name="submit" value="Click here to send me an Email"/>
        </form>
    </div>
</div>
       
    )
}

export default Contact;