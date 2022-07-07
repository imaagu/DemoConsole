import React, { Component } from "react";
import { connect } from 'react-redux';

/**
 * CSS
 */
import './login.css';

/**
 * Form
 */
import LoginForm from './loginForm.jsx';

/**
 * Loader
 */
import Loader from '../../Components/loader.jsx';

/**
 *  Redux Actions
 */
import { signinUser } from '../../actions/index.js';

/**
 * Class
 */
class Login extends Component {
  onSubmit = (value) => {
    this.props.signinUser(value, this.props.history);
  };

  render() {
    const { loading } = this.props;
    return (
      <>
        <div className="limiter">
          <div className="container-login100">
            {loading === true ? (
              <Loader />
            ) : (
              <div className="wrap-login100">
                <LoginForm onSubmit={this.onSubmit} />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

/*
 * Map State to props
 */
const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default connect(mapStateToProps, { signinUser })(Login);
