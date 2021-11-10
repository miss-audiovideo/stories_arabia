import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/products">
          </Route>
          <Route exact path="/about">
          </Route>
          <Route exact path="/contact">
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
