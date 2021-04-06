import React, { useState } from "react";
import { MapContainer } from "react-leaflet";
import { LatLng } from "leaflet";
import style from "./mapWrapper.module.scss";
import Map from "./map";

export function MapWrapper() {
  const [position] = useState(new LatLng(52, 19));

  return (
    <MapContainer className={style.mapWrapper} center={position} zoom={6}>
      <Map></Map>
    </MapContainer>
  );
}
