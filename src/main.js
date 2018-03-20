import React, { Component } from "react";
import ReactDOM from "react-dom";
import Api from "./api/index";
import Router from "./router/route/index.jsx";
global.Api = new Api();
ReactDOM.render(Router, document.getElementById("app"));
