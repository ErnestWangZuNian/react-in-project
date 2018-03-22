import React from "react";
import ReactDOM from "react-dom";
import Api from "./api/index";
console.log(Api);
import Router from "./router/route/index.jsx";
global.Api = Api;
global.React = React;

ReactDOM.render(Router, document.getElementById("app"));
