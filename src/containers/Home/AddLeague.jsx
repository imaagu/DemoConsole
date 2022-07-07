import React, { Component } from 'react';
import { CCard, CCardBody } from '@coreui/react';
import Loader from './../../Components/loader.jsx';
import { connect } from 'react-redux';
import Form from './components/form.jsx';

import { addNewLeague, getOptions } from '../../actions/index.js';

class AddLeague extends Component {
  state = {
    gameOption: [],
    data: {
      external_id: '',
      is_playable: false,
      league_name: '',
      description: '',
      game: 0,
    },
    isloading: false,
  };

  async componentDidMount() {
    const { user, getOptions } = this.props;
    const options = await getOptions(user);
    this.setState({ gameOption: [...this.state.gameOption, ...options] });
  }

  handleSubmit = async (item) => {
    const { user } = this.props;
    this.setState({ isloading: !this.state.isloading });
    await this.props.addNewLeague(item, user, this.props.history);
    this.setState({ isloading: !this.state.isloading });
  };
  render() {
    const { data, isloading, gameOption } = this.state;

    return (
      <div className="c-body">
        {isloading ? (
          <div className="text-center my-3">
            <Loader />
          </div>
        ) : (
          <CCardBody>
            <CCard>
              <CCardBody>
                <div className="row">
                  <div className="col-12 ">
                    <h3 className="text-center">Create League</h3>
                  </div>
                  <Form
                    data={data}
                    onSubmit={this.handleSubmit}
                    gameOption={gameOption}
                  />
                </div>
              </CCardBody>
            </CCard>
          </CCardBody>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  const { user } = authUser;

  return {
    user,
  };
};

export default connect(mapStateToProps, {
  addNewLeague,
  getOptions,
})(AddLeague);
