import { Cartesian3 } from "cesium";
import { invoke  } from "@tauri-apps/api/core"
export const getCurrentLocation = (defineLocation: [number, number, number]): Promise<Cartesian3> => {
  return new Promise<Cartesian3>((resolve, reject)=> {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              (position) => {
                  resolve(Cartesian3.fromDegrees(
                    position.coords.longitude,
                    position.coords.latitude,
                    defineLocation[2]
                  ));
              },
              (error) => {
                  console.log(error);
                  reject(error);
              }
          );
      }
  })
}
export const get_location = async (height:number):Promise<Cartesian3> =>{
    try {
            let str = await invoke("get_location") as string
            let coords = str.split(',').map(str => parseFloat(str))
            return Cartesian3.fromDegrees(coords[1],coords[0],height)
    } catch (error) {
            console.log(error)
            return Cartesian3.fromDegrees(0,0,height)
    }

}