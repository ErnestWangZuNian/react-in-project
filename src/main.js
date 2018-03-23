import React from "react";
import ReactDOM from "react-dom";
import Api from "./api/index";
import Router from "./router/route/index.jsx";
import "antd-mobile/dist/antd-mobile.css";
import flexible from "./utils/flexible";
flexible(window);
global.Api = Api;
global.React = React;

ReactDOM.render(Router, document.getElementById("app"));
