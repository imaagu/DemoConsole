/**
 * App.jsx Routes
 */

import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { NotificationContainer } from 'react-notifications';

/**
 * Header & Slider
 */
import TheHeader from './TheHeader';
import TheSidebar from './TheSidebar.jsx';

/**
 * Prtected Route
 */
import ProtectedRoute from '../Components/protectedRoute.jsx';

/**
 * Module
 */
const AppLogIn = React.lazy(() => import('./LoginPage/login.jsx'));
const LogOut = React.lazy(() => import('./logoutPage.jsx'));
const Home = React.lazy(() => import('./Home'));
//const Match = React.lazy(() => import("./Match/index.jsx"));
//const MatchDetail = React.lazy(() => import("./Match/matchDetails.jsx"));
//const Pool = React.lazy(() => import("./Pool/index.jsx"));
//const PoolDetail = React.lazy(() => import("./Pool/poolDetail.jsx"));
//const CreatePool = React.lazy(() => import("./Pool/createPool.jsx"));
//const CreateLeague = React.lazy(() => import("./League/AddLeague.jsx"));
//const CreateMatch = React.lazy(() => import("./Match/AddMatch.jsx"));
/**
 * App
 */
const App = ({ location, user }) => {
  if (location.pathname === '/') {
    if (user === null) {
      return <Redirect to={'/login'} />;
    } else {
      return <Redirect to={'/league'} />; ///home
    }
  } else {
    return (
      <>
        {/*  <ProtectedRoute authUser={user} component={League} path="/league" /> */}
        <NotificationContainer />
        <div className="c-app c-default-layout">
          {user !== null && (
            <TheSidebar path={location.pathname + location.hash} />
          )}
          <div className="c-wrapper">
            {user !== null && <TheHeader />}
            <React.Fragment>
              <ProtectedRoute authUser={user} component={Home} path="/home" />
              <Route exact path="/login" component={AppLogIn} />
              <Route exact path="/logout" component={LogOut} />
            </React.Fragment>
          </div>
        </div>
      </>
    );
  }
};

const mapStateToProps = ({ authUser }) => {
  const { user } = authUser;
  return { user };
};

export default connect(mapStateToProps)(App);
