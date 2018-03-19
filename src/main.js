import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Router from "./router/route/index.jsx";

ReactDOM.render(Router, document.getElementById("app"));

// if (module.hot) {
//   module.hot.accept('./App', () => render(App))
// }
