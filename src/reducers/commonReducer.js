/**
 * Auth User Reducers
 */
import {
  SET_DATA,
  REQUEST_DATA,
  TOGGLE_DATA,
  GET_DATA_FAIL,
  SET_SELECTED_DATA,
  GET_SELECTED_DATA_FAIL,
  REMOVE_SELECTED_DATA,
  SELECTED_LEAGUE_ID_TO_MATCH,
} from "../actions/types.js";

/**
 * initial auth user
 */

const INIT_STATE = {
  data_availabe_: false,
  selected_data_available_: false,
  data_: null,
  selected_data_: null,
  loader_: false,
  query_: "",
  selected_league_id: -1,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        loader_: false,
        data_availabe_: true,
        data_: action.payload,
      };
    case REQUEST_DATA:
      return { ...state, loader_: true };
    case GET_DATA_FAIL:
      return {
        ...state,
        data_: null,
        loader_: false,
        data_availabe_: false,
      };

    case TOGGLE_DATA:
      return {
        ...state,

        data_: action.payload,
      };
    case SET_SELECTED_DATA:
      return {
        ...state,
        loader_: false,
        selected_data_available_: true,
        selected_data_: action.payload,
      };

    case GET_SELECTED_DATA_FAIL:
      return {
        ...state,
        selected_data_: null,
        loader_: false,
        selected_data_available_: false,
      };

    case REMOVE_SELECTED_DATA:
      return {
        ...state,
        selected_data_: null,
        selected_data_available_: false,
      };
    case SELECTED_LEAGUE_ID_TO_MATCH:
      return {
        ...state,
        selected_league_id: action.payload,
      };

    default:
      return { ...state };
  }
};
