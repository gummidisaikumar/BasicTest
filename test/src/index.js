import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from "./serviceWorker";
import App from "./imports/UI/Layout/App";
import './imports/UI/Stylesheet/app.scss';

ReactDOM.render(
      <App/>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
