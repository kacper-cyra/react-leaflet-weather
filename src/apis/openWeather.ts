import { LatLng } from "leaflet";
import { handleFetchError } from "./errorHandling";
import { OpenWeatherDTO } from "./dto/openWeatherDTO";

export default class OpenWeather {
  static getWeatherAtCoordinates = async ({ lat, lng }: LatLng) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${process.env.REACT_APP_API_WEATHER}`);
      OpenWeather.checkResponseStatus(response);
      const result = await response.json();
      return result as OpenWeatherDTO;
    } catch (error: unknown) {
      handleFetchError(error);
    }
  };

  static checkResponseStatus(response: Response) {
    console.log(response);
    if (!response.ok) throw new Error(response.statusText);
  }
}
