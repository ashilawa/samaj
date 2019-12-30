import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./component/LandingPage";
import Contact from "./component/contact/contact";
import Trust from "./component/Trust/trust";
//import About from "./component/about/About";
import "./App.css";
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    {/* <Route exact path="/about" component={About} /> */}
    <Route exact path="/trust" component={Trust} />
    <Route exact path="/contact" component={Contact} />
    {/* <Route exact path="/events" component={Events} /> */}
  </Switch>
);
export default Main;
