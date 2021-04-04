import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
//import OpenWeather from "../apis/openWeather";
import { LatLng } from "leaflet";
import { LocationMarkerMemo } from "./marker/locationMarker";

const Map = ({ apiKey }: MapsProps) => {
  //const [markers, setMarkers] = useState([]);
  const [position] = useState(new LatLng(0, 0));

  const style = {
    height: `${window.innerHeight}px`,
    width: `${window.innerWidth}px`,
  };

  return (
    <MapContainer style={style} center={position} zoom={6}>
      <LocationMarkerMemo></LocationMarkerMemo>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <TileLayer url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${apiKey}`} />
    </MapContainer>
  );
};

interface MapsProps {
  apiKey: string | undefined;
}

export default Map;
