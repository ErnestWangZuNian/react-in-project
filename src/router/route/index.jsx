import React, { Component } from "react";
import { HashRouter, Route, Link, NavLink } from "react-router-dom";
import Bundle from "@/component/bundle";
const About = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/about/index.jsx")} />
);
const Inbox = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/inbox/index.jsx")} />
);
const App = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/app/index.jsx")} />
);
let router = (
  <HashRouter>
    <div>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <NavLink
            to="/about"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <Link to="/inbox">Inbox</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route exact path="/inbox" component={Inbox} />
    </div>
  </HashRouter>
);
export default router;
