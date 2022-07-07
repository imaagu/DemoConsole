import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";

/**
 * CSS
 */
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-notifications/lib/notifications.css";
//import "font-awesome/css/font-awesome.min.css";

/*
* Save a reference to the root element for reuse

*/
const rootEl = document.getElementById("root");

let render = () => {
  // Dynamically import our main App component, and render it
  const MainApp = require("./App").default;
  ReactDOM.render(<MainApp />, rootEl);
};

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(<NextApp />, rootEl);
  });
}

render();
