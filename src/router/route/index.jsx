import React, { Component } from "react";
import { HashRouter, Route, Link, NavLink } from "react-router-dom";
import Bundle from "../bundle/index.jsx";
import loadAbout from "bundle-loader?lazy!../../pages/about/index.jsx";
import loadInbox from "bundle-loader?lazy!../../pages/inbox/index.jsx";
import loadApp from "bundle-loader?lazy!../../pages/app/index.jsx";
const About = () => <Bundle load={loadAbout}>{About => <About />}</Bundle>;
const Inbox = () => <Bundle load={loadInbox}>{Inbox => <Inbox />}</Bundle>;
const App = () => <Bundle load={loadApp}>{App => <App />}</Bundle>;
// const App = <App load={loadApp}>{App => <App />}</App>;
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
