import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * Redux Action
 */
import { setSlider } from "../actions/index.js";

/**
 * coreui components
 */
//import CIcon from "@coreui/icons-react";
import {
  CHeader,
  CToggler,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
} from "@coreui/react";

/**
 * class
 */
class TheHeader extends Component {
  toggleSidebar = () => {
    let { sidebarShow } = this.props;
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    this.props.setSlider(val);
  };

  toggleSidebarMobile = () => {
    let { sidebarShow } = this.props;
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    this.props.setSlider(val);
  };

  render() {
    // let { sidebarShow, user } = this.props;
    return (
      <CHeader>
        <CToggler
          inHeader
          className="ml-md-3 d-lg-none"
          onClick={this.toggleSidebarMobile}
        />
        <CToggler
          inHeader
          className="ml-3 d-md-down-none"
          onClick={this.toggleSidebar}
        />

        <CHeaderNav className="ml-auto">
          <CHeaderNavItem
            className="px-3 "
            style={{ fontWeight: "700", fontSize: "18px" }}
          >
            <CHeaderNavLink to="/logout">Logout</CHeaderNavLink>
          </CHeaderNavItem>
        </CHeaderNav>
      </CHeader>
    );
  }
}

// map state to props
const mapStateToProps = ({ slider, authUser }) => {
  let sidebarShow = slider.sidebarShow;
  let user = authUser.user;

  return { sidebarShow, user };
};

export default connect(mapStateToProps, { setSlider })(TheHeader);
