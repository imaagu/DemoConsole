/**
 * Auth User Reducers
 */
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
} from "../actions/types.js";

/**
 * initial auth user
 */
const INIT_STATE = {
  isUserlogin: false,
  user: localStorage.getItem("token"),
  loading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true };

    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case LOGIN_USER_FAILURE:
      return { ...state, loading: false };

    case LOGOUT_USER:
      return { ...state, user: null };

    default:
      return { ...state };
  }
};
