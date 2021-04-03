import { LatLng } from "leaflet";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = ({ apiKey }: MapsProps) => {
  const position = new LatLng(52.069, 19.48);

  const style = {
    height: `${window.innerHeight}px`,
    width: `${window.innerWidth}px`,
  };

  return (
    <MapContainer style={style} center={position} zoom={6}>
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
