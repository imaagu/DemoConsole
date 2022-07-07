/**
 * Redux App Settings Actions
 */
import { set } from "./types";

/**
 * Redux Action To Emit Collapse Sidebar
 * @param {*boolean} isCollapsed
 */
export const setSlider = (sidebarShow) => (dispatch) => {
  dispatch({
    type: set,
    payload: sidebarShow,
  });
};
