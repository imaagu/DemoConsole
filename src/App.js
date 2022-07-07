/**
 * Main App
 */
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/scss/style.scss";
import Loader from "./Components/loader.jsx";

/**
 * store
 */
import { configureStore } from "./store.js";

// Containers

const MainApp = React.lazy(() => import("./containers/app"));

const App = () => {
  return (
    <Provider store={configureStore()}>
      <Router>
        <React.Suspense
          fallback={
            <div
              style={{
                justifyContent: "center",
                textAlign: "center",
                marginTop: "10%",
              }}
            >
              <Loader />
            </div>
          }
        >
          <Switch>
            <Route path="/" component={MainApp} />
          </Switch>
        </React.Suspense>
      </Router>
    </Provider>
  );
};

export default App;
