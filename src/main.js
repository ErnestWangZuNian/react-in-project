import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { HashRouter, Route, Link, NavLink } from "react-router-dom";
import About from "./About.jsx";
import Inbox from "./Inbox.jsx";
import App from "./App.jsx";

const render = App => {
  ReactDOM.render(
    <HashRouter>
      <div>
        <ul>
          <li>
            <Link to="/home">App</Link>
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
        <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} />
      </div>
    </HashRouter>,
    document.getElementById("app")
  );
};

render(App);

// if (module.hot) {
//   module.hot.accept('./App', () => render(App))
// }
