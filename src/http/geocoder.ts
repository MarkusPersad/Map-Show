import { TIANDITU } from "../assets/default.json";
import { GlobalHttp } from "./HttpClient";

export const geocoder = async (keyWord: string): Promise<[number, number]> => {
  try {
    let requestUrl =
      TIANDITU.API +
      TIANDITU.GEOCODER +
      `?ds={"keyWord":"${keyWord}"}&tk=${TIANDITU.SERVERTOKEN}`;
    let response = await GlobalHttp.request({
      url: requestUrl,
      method: "GET",
      outurl: true,
    });
    return [
      parseFloat(response.location.lon as string),
      parseFloat(response.location.lat as string),
    ];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
