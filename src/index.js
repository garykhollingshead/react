import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import {Router, useRouterHistory} from "react-router";
import {createHistory} from "history";
import {Provider} from "react-redux";
import routes from "./routes";
import configureStore from "./store/configureStore";
import {getPrograms} from "./actions/programActions";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const browserHistory = useRouterHistory(createHistory)({
  basename: Basename
});

const store = configureStore();
store.dispatch(getPrograms(""));

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById("app")
);