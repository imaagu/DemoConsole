import { NotificationManager } from "react-notifications";

/**
 * Auth API
 */
import Auth from "../services/authApi.js";

/**
 * Redux Action for Login/Logout
 */

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
} from "../actions/types.js";

/**
 * Login
 * @param {username , password} user
 * @param {push} history
 */
export const signinUser = (user, history) => async (dispatch) => {
  dispatch({ type: LOGIN_USER });
  Auth.login(user.username, user.password)
    .then(({ data }) => {
      if (data?.Result === 'Logged In!') {
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: 'success',
        });
        localStorage.setItem('token', 'success');
        NotificationManager.success(data?.Result);
        history.push('/home');
      } else {
        dispatch({ type: LOGIN_USER_FAILURE });
        NotificationManager.error(data?.Result);
      }
    })
    .catch((e) => {
      console.log('Login Failed');
      dispatch({ type: LOGIN_USER_FAILURE });
      NotificationManager.error(e?.message);
    });
};

/**
 * Logout
 * @param {push} history
 */
export const logOutUser = (history) => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
  localStorage.removeItem('token');
  history.push('/login');
  NotificationManager.success('User Logout Successfully!');
};
