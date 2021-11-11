import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
          <header>
          <Navbar />
            <Main />
            </header>
          </Route>
          <Route exact path="/products">
          <Navbar />
          </Route>
          <Route exact path="/about">
          <Navbar />
          </Route>
          <Route exact path="/contact">
          <Navbar />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
