import http from "./httpService";
import { ApiUrl, league } from "../config.json";

export function getLeague(query, user) {
  let url = ApiUrl + league + query;
  let data = http.get(url, {
    headers: {
      Authorization: "Token " + user,
    },
  });

  return data;
}

export function getGameOption(user) {
  let url = ApiUrl + "fantasy/games/";
  let data = http.get(url, {
    headers: {
      Authorization: "Token " + user,
    },
  });

  return data;
}

export async function addNewLeague(data, user) {
  const url = ApiUrl + league;
  return await http.post(
    url,
    {
      external_id: data.external_id,
      is_playable: data.is_playable,
      league_name: data.league_name,
      description: data.description,
      game: data.game,
    },
    {
      headers: {
        Authorization: "Token " + user,
      },
    }
  );
}

export default {
  getLeague,
  getGameOption,
  addNewLeague,
};
