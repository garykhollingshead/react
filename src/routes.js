import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/app";
import HomePage from "./components/home/homePage";
import AboutPage from "./components/about/aboutPage";

export default (
  <Route path="/rad2" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/rad2/about" component={AboutPage}/>
  </Route>
);