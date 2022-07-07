import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/**
 * Images
 */
import Logo from "../assets/images/logo45x40.png"; //logo

/**
 * CSS
 */
import "../css/sidebar.css";
import { CSidebar } from '@coreui/react';


/**
 * Redux Action
 */
import { setSlider } from "../actions/index.js";

class TheSidebar extends Component {
  render() {
    let { sidebarShow: show, path } = this.props;
    return (
      <CSidebar show={show} onShowChange={(val) => this.props.setSlider(val)}>
        <ul className="c-sidebar-nav">
          <li
            className={
              path === '/home'
                ? ' c-sidebar-nav-item link-active'
                : 'c-sidebar-nav-item '
            }
          >
            <Link className="c-sidebar-nav-link" to="/league">
              Home
            </Link>
          </li>
        </ul>
      </CSidebar>
    );
  }
}

// map state to props
const mapStateToProps = ({ slider }) => {
  const { sidebarShow } = slider;
  return { sidebarShow };
};

export default connect(mapStateToProps, { setSlider })(React.memo(TheSidebar));
