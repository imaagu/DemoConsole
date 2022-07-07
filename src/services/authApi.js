import http from "./httpService";
import { ApiUrl, userlogin } from "../config.json";

/**
 * Login
 */
export async function login(UserName, Password) {
  let url = ApiUrl + userlogin;
  const res = await http.post(url, {
    UserName,
    Password,
  });

  return res;
}

export default {
  login,
};
