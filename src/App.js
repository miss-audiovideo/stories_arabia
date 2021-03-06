import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
// import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Service from "./Components/Service";

import VideoProdServices from "./Components/VideoProdServices";
import VideoGallery from "./Components/VideoGallery";
import Projects from "./Components/Projects";
// import Featured from "./Components/Featured";
import FeaturedServices from "./Components/FeaturedServices";
import Blog from "./Components/Blog";
import Gallery from "./Components/Gallery";
import ContactHeader from "./Components/ContactHeader";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
// import NavMenu from "./Components/NavMenu";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <Navbar /> */}

            <header>
              <Navbar />
              {/* https://youtu.be/At4B7A4GOPg */}
              {/* <NavMenu /> */}
              <Main />
            </header>
            <Service />
            
            <VideoProdServices />
            <VideoGallery />
            <Projects />
            {/* <Featured /> */}
            <FeaturedServices />
            <Blog />

            <Gallery />
          </Route>
          <Route exact path="/products">
            <Navbar />
          </Route>
          <Route exact path="/about">
            <Navbar />
          </Route>
          <Route exact path="/contact">
            <header>
              <Navbar />
              <ContactHeader />
            </header>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
