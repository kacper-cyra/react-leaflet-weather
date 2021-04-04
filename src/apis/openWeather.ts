import { LatLng } from "leaflet";
import { isFetchError, handleFetchError, handleGenericError } from "./errorHandling";

export default class OpenWeather {
  static getWeatherAtCoordinates = async ({ lat, lng }: LatLng) => {
    try {
      // eslint-disable-next-line no-undef
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${process.env.REACT_APP_API_WEATHER}`);
      return await response.json();
    } catch (error: unknown) {
      if (isFetchError(error)) {
        handleFetchError(error);
      } else {
        handleGenericError(error);
      }
    }
  };
}
