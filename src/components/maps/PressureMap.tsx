import React from "react";
import { TileLayer } from "react-leaflet";

export function PressureMap() {
  return <TileLayer url={`https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${process.env.REACT_APP_API_WEATHER}`} />;
}
