import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/app";
import HomePage from "./components/home/homePage";
import ProgramPage from "./components/program/programPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/programs" component={ProgramPage}/>
  </Route>
);