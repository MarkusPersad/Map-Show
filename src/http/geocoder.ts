import { fetch } from "@tauri-apps/plugin-http";

import { GAODEMAP, GAODEMAPTOKEN } from "../assets/default.json";

export const getLocation = async () => {
  let response = await fetch(GAODEMAP + "/ip?key=" + GAODEMAPTOKEN, {
    method: "GET",
  });
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    return data;
  } else {
    return null;
  }
};
