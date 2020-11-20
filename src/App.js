import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container"
import "./App.css";
import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
         <Container>
          <Route exact path="/" component={Home} />
          <Route exact path="/portofolio" component={Portofolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
         </Container>    
        </Wrapper>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
