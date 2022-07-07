import { Component } from "react";
import { connect } from "react-redux";

/**
 * Redux Action
 */
import { logOutUser } from "../actions/index";

class LoginOut extends Component {
  componentDidMount() {
    this.props.logOutUser(this.props.history);
  }

  render() {
    return 0;
  }
}

const mapStateToProps = ({ authUser }) => {
  const { user } = authUser;
  return { user };
};

export default connect(mapStateToProps, { logOutUser })(LoginOut);
