import { fetch } from "@tauri-apps/plugin-http";

import { TIANDITU } from "../assets/default.json";

export const geocoder = async (keyWord: string): Promise<[number, number]> => {
  let requestUrl =
    TIANDITU.API +
    TIANDITU.GEOCODER +
    `?ds={"keyWord":${keyWord}}&tk=${TIANDITU.TOKEN}`;
  try {
    let response = await fetch(requestUrl, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        "Content-Type": "application/json",
      },
    });
    console.log(response.status);
    let data = await response.json();
    return [
      parseFloat(data.location.lon as string),
      parseFloat(data.location.lat as string),
    ];
  } catch (error) {
    console.error(error);
    return [0, 0];
  }
};
