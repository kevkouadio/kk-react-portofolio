import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";
import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/portofolio" component={Portofolio} />
          
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
