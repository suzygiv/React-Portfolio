import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./about";
import ContactMe from "./contact";
import Portfolio from "./portfolio";
import Nav from "./nav";
import Footer from "./footer";
import Wrapper from "./wrapper";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contactme" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;