import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, authUser, ...rest }) => {
  return (
    <Route
      exact
      {...rest}
      render={(props) =>
        authUser !== null ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
