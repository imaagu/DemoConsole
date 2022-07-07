import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Helmet } from 'react-helmet';
import { CCardBody, CCard } from '@coreui/react';
import { _Header, _game_option, _playable_option } from './constant';

/**
 * Filter Module
 */
import FilterModule from './components/FilterModule.jsx';
//import ShowLeagueData from "./showLeagueData.jsx";
import ShowTable from '../../Components/showTable.jsx';

import MakeQuery from '../../Components/callUrl.js';

/**
 * CSS
 */
//import "../../css/table.css";

// redux action
import {
  selectedLeagueId,
  getLagueData,
  changeLeaguePlayable,
  getOptions,
} from '../../actions/index.js';

class LeagueMainPage extends Component {
  state = {
    editData: {},
    gameOption: [..._game_option],
    query: '',
    filter: {
      search: '',
      id: '',
      external_id: '',
      created_date_time: '',
      created_date_time__lte: '',
      created_date_time__gte: '',
      is_playable: '',
      game: '',
      ordering: '',
      page: 1,
    },
  };
  /*
   *Handle Changed in Filter Option
   */

  handleFilterSet = (filter) => {
    this.setState({
      filter,
      query: MakeQuery.callUrl('', filter),
    });
  };

  handleOrder_Change = (ordering) => {
    let { filter } = this.state;
    filter.ordering = ordering;
    this.setState({
      filter,
      query: MakeQuery.callUrl('', filter),
    });
  };

  handleReset = () => {
    let { filter } = this.state;
    for (const key in filter) {
      filter[key] = '';
    }
    this.setState({
      filter,
      query: MakeQuery.callUrl('', filter),
    });
  };

  handleSelectedLeague = (id) => {
    let { selectedLeagueId, history } = this.props;

    selectedLeagueId(+id);
    history.push('/match');
  };

  handlePageChange = (val) => {
    let { filter } = this.state;
    filter.page = +filter.page + val;

    this.setState({
      filter,
      query: MakeQuery.callUrl('', filter),
    });
  };

  async componentDidMount() {
    const { user } = this.props;
    const { query } = this.state;
    const option = await this.props.getOptions(user);
    this.props.getLagueData(query, user); /// Fetch League Data
    this.setState({ gameOption: [...this.state.gameOption, ...option] });
    this.props.selectedLeagueId(-1);
  }

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const currentQuery = this.state.query;

    if (prevQuery !== currentQuery) {
      const { user } = this.props;
      this.props.getLagueData(currentQuery, user); /// Fetch League Data
    }
  }

  handleplayCHeckbox = (index) => {
    let { data_ } = this.props;

    data_.results[index].is_playable = !data_.results[index].is_playable;
    this.props.changeLeaguePlayable(data_);
    this.setState({ editData: data_.results[index] });
  };

  handleSave = () => {
    const data = this.state.editData;
    console.log(data);
  };

  handleAddLeague = () => {
    this.props.history.push({
      pathname: '/create-league',
    });
  };

  render() {
    const { gameOption, filter } = this.state;
    const { data_, loader_, data_availabe_ } = this.props;

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>League | GamyFi</title>
        </Helmet>

        <div className="c-body">
          <CCardBody>
            <FilterModule
              league_game_option={gameOption}
              filter={filter}
              onFilter={this.handleFilterSet}
              league_playable_option={_playable_option}
              onReset={this.handleReset}
            />

            <CCard>
              <CCardBody>
                <div className="row text-right px-4 my-2">
                  <div className="col-12">
                    <button
                      type="button"
                      onClick={this.handleAddLeague}
                      className="btn btn-md btn-secondary"
                    >
                      Add League
                    </button>
                  </div>
                </div>
                <ShowTable
                  table_header={_Header}
                  onOrder_Change={this.handleOrder_Change} //ordering changed function
                  data={data_} //Array of league data
                  loader={loader_}
                  data_availabe={data_availabe_}
                  page={filter.page}
                  order={filter.ordering}
                  onPageChange={this.handlePageChange}
                  handleId={this.handleSelectedLeague}
                  handlePlayableOptionChange={this.handleplayCHeckbox}
                  onSave={this.handleSave}
                  gameTypeOption={gameOption}
                />
              </CCardBody>
            </CCard>
          </CCardBody>
        </div>
      </>
    );
  }
}

// map state to props
const mapStateToProps = ({ authUser, commonReducer }) => {
  const { user } = authUser;

  const { query_, data_, loader_, data_availabe_ } = commonReducer;

  return {
    user,
    query_,
    data_,
    loader_,
    data_availabe_,
  };
};
export default connect(mapStateToProps, {
  getLagueData,

  changeLeaguePlayable,
  getOptions,
  selectedLeagueId,
})(LeagueMainPage);
