import React, { Component } from 'react';

/**
 * coreui components
 */
import { CCard, CCardBody } from '@coreui/react';

class Filter extends Component {
  state = {
    filter_paramters: this.props.filter,
  };

  componentDidMount() {
    var created_date_time_var = document.getElementById('created_date_time');
    var created_date_time__lte_var = document.getElementById(
      'created_date_time__lte'
    );
    var created_date_time__gte_var = document.getElementById(
      'created_date_time__gte'
    );

    created_date_time_var.onfocus = function (event) {
      this.type = 'datetime-local';
      this.focus();
    };
    created_date_time_var.onblur = function (event) {
      this.type = 'text';
      this.blur();
    };

    created_date_time__lte_var.onfocus = function (event) {
      this.type = 'datetime-local';
      this.focus();
    };
    created_date_time__lte_var.onblur = function (event) {
      this.type = 'text';
      this.blur();
    };
    created_date_time__gte_var.onfocus = function (event) {
      this.type = 'datetime-local';
      this.focus();
    };
    created_date_time__gte_var.onblur = function (event) {
      this.type = 'text';
      this.blur();
    };
  }

  handleChange = (e) => {
    const { currentTarget: input } = e;
    let filter_paramters = this.state.filter_paramters;
    if (input.name === 'id' || input.name === 'external_id') {
      if (+input.value >= 0) {
        filter_paramters[input.name] = input.value;

        this.setState({ filter_paramters });
      }
    } else {
      filter_paramters[input.name] = input.value;
      this.setState({ filter_paramters });
    }
  };

  handleSubmit = () => {
    let filter_paramters = this.state.filter_paramters;
    filter_paramters.id = +filter_paramters.id;
    filter_paramters.external_id = +filter_paramters.external_id;
    filter_paramters.game = +filter_paramters.game;
    filter_paramters.is_playable =
      //  filter_paramters.is_playable === "true" ? true : false;
      this.props.onFilter(filter_paramters);
  };

  handleReset = () => {
    this.props.onReset();
  };

  render() {
    const { filter_paramters } = this.state;
    const { league_game_option, league_playable_option } = this.props;

    return (
      <CCard>
        <CCardBody></CCardBody>
        <CCardBody>
          <div className="row">
            <div className="col-12">
              <form>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group text-center mb-3">
                      <input
                        name="search"
                        type="text"
                        value={filter_paramters.search}
                        placeholder="Search"
                        onChange={this.handleChange}
                        className={'form-control'}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group text-center mb-3">
                      <input
                        name="id"
                        type="number"
                        value={filter_paramters.id}
                        placeholder="Id"
                        onChange={this.handleChange}
                        className={'form-control'}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group text-center mb-3">
                      <input
                        name="external_id"
                        type="number"
                        value={filter_paramters.external_id}
                        placeholder="External Id"
                        onChange={this.handleChange}
                        className={'form-control'}
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-group text-center mb-3">
                      <input
                        value={filter_paramters.created_date_time__lte}
                        name="created_date_time__lte"
                        type="text"
                        id="created_date_time__lte"
                        placeholder="D&T LTE"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Enter Date & Time(less than or equal to)"
                        onChange={this.handleChange}
                        className={'form-control login-form-box-field'}
                        step="1"
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-group text-center mb-3">
                      <input
                        value={filter_paramters.created_date_time}
                        name="created_date_time"
                        type="text"
                        id="created_date_time"
                        placeholder="D&T"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Enter Date & Time"
                        onChange={this.handleChange}
                        className={'form-control login-form-box-field'}
                        step="1"
                      />
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="form-group text-center mb-3">
                      <input
                        value={filter_paramters.created_date_time__gte}
                        name="created_date_time__gte"
                        type="text"
                        id="created_date_time__gte"
                        placeholder="D&T GTE"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Enter Date & Time(greater than or equal to)"
                        onChange={this.handleChange}
                        className={'form-control login-form-box-field'}
                        step="1"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group ">
                      <select
                        name="is_playable"
                        value={filter_paramters.is_playable}
                        className={'form-control'}
                        onChange={this.handleChange}
                        id="is_playable"
                      >
                        {league_playable_option.map((item) => (
                          <option key={item.id} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group ">
                      <select
                        name="game"
                        onChange={this.handleChange}
                        value={filter_paramters.game}
                        className={'form-control'}
                        id="game"
                      >
                        {league_game_option.map((item) => (
                          <option key={item.id} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-6">
                    <button
                      type="button"
                      onClick={this.handleReset}
                      className="btn text-white btn-warning mt-2 mb-2"
                    >
                      Reset
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      onClick={this.handleSubmit}
                      className="btn btn-danger text-white mt-2 mb-2 "
                    >
                      Go &nbsp;
                      <i className="fa fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </CCardBody>
      </CCard>
    );
  }
}

export default Filter;
