import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";
import Row from "./components/Row/index";
import Font from "./components/Icon/index";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(
  fab,
  faGithub,
  faLinkedin,
  faFacebook
);

function App() {
  return (
    <Router>
      <div>
      <Row/>
        <Nav />
        <Wrapper>
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={About} />
        </Wrapper>
        <Footer />
        <Font />
      </div>
    </Router>
  );
}

export default App;