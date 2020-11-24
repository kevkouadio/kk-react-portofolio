import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container"
import "./App.css";
import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";
import Contact from "./pages/Contact";
import FooterList from "./components/FooterList";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
         <Container>
         <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + "/portofolio"} component={Portofolio} />
          <Route exact path={process.env.PUBLIC_URL + "/contact"} component={Contact} /> 
         </Container>    
        </Wrapper>
      </div>
      <footer>
      <div id="fRow" className="row">
        <FooterList />
        <p id="fText">Kouassi K. Kouadio 2020 <i className="fa fa-copyright" aria-hidden="true"></i></p>
      </div> 
      </footer>
    </Router>
  );
}

export default App;
