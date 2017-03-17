import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import {Router, useRouterHistory} from "react-router";
import {createHistory} from "history";
import {Provider} from "react-redux";
import routes from "./routes";
import configureStore from "./store/configureStore";
import * as urls from "./apis/urls";
import "./assets/styles/main.scss";

const browserHistory = useRouterHistory(createHistory)({
  basename: urls.Basename
});

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById("app")
);