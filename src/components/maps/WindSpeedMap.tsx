import React from "react";
import { TileLayer } from "react-leaflet";

export function WindSpeedMap() {
  return <TileLayer url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${process.env.REACT_APP_API_WEATHER}`} />;
}
