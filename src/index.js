import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import {Router, useRouterHistory} from "react-router";
import {createHistory} from "history";
import routes from "./routes";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const browserHistory = useRouterHistory(createHistory) ({
  basename: Basename
});

render (
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById("app")
);