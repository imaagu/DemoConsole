/**
 * App Reducers
 */
import { combineReducers } from "redux";

import authUserReducer from "./AuthUserReducer.js";
import sliderReducer from "./slideReducer.js";
import commonReducer from './commonReducer';

const reducers = combineReducers({
  authUser: authUserReducer,
  slider: sliderReducer,
  commonReducer: commonReducer,
});

export default reducers;
