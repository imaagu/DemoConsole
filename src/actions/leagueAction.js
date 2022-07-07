import { NotificationManager } from "react-notifications";
/**
 * League Redux Action
 */
import {
  SET_DATA,
  REQUEST_DATA,
  TOGGLE_DATA,
  GET_DATA_FAIL,
  SELECTED_LEAGUE_ID_TO_MATCH,
} from "../actions/types.js";

/**
 * League Api
 */
import LeagueApi from "../services/leagueService.js";

/**
 * Fetch League Data from Server
 * @param query
 * @param user
 *
 */
export const getLagueData = (query, user) => async (dispatch) => {
  dispatch({ type: REQUEST_DATA });

  try {
    let { data, status } = await LeagueApi.getLeague(query, user);

    if (status === 200) {
      dispatch({ type: SET_DATA, payload: data });
    } else {
    }
  } catch (e) {
    console.error("error-------->Can't Fetch League ");

    dispatch({ type: GET_DATA_FAIL });
  }
};

/**
 * Fetch Game Option
 * @param  user
 */
export const getOptions = (user) => async (dispatch) => {
  try {
    let { data } = await LeagueApi.getGameOption(user);
    const option = data.results.map((item) => ({
      id: item.id,
      value: item.id,
      name: item.name,
    }));
    return option;
  } catch (e) {
    console.error("error-----------Can't Game Options----League");
    return [];
  }
};

/**
 * Toggale League Is_Plabale
 * @param {*} data
 */
export const changeLeaguePlayable = (data) => (dispatch) => {
  dispatch({ type: TOGGLE_DATA, payload: data });
};

export const selectedLeagueId = (id) => (dispatch) => {
  dispatch({ type: SELECTED_LEAGUE_ID_TO_MATCH, payload: id });
};

export const addNewLeague = (item, user, history) => async (dispatch) => {
  try {
    let { data } = await LeagueApi.addNewLeague(item, user);
    history.push("/league");
    NotificationManager.success("Added Successfully!");
  } catch (e) {
    console.log(e.message);
    console.error("error----------->Can't Add new League");
    history.push("/create-league");
    NotificationManager.error("Error!");
  }
};
