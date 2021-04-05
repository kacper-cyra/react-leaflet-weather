import { Icon, LatLng } from "leaflet";
import React, { memo } from "react";
import { Popup, Marker } from "react-leaflet";
import styles from "./marker.module.scss";
import { ICON_SIZE } from "./markerSizes";

export function MapMarker({ city, position, weather, iconName }: MarkerProps) {
  return (
    <React.Fragment>
      <Marker
        position={position}
        icon={
          iconName
            ? new Icon({
                iconUrl: `${process.env.PUBLIC_URL}/img/${iconName}.png`,
                iconSize: [Math.round(ICON_SIZE[iconName][0] / 2), Math.round(ICON_SIZE[iconName][1] / 2)],
              })
            : new Icon({ iconUrl: `${process.env.PUBLIC_URL}img/marker.svg`, iconSize: [38, 105] })
        }
      >
        <Popup data-author="Icon vector created by titusurya - www.freepik.com">
          <span className={styles.cityName}>{city !== "" ? city : "longitude: " + position.lng + ", latitude: " + position.lat}</span>
          <br />
          {weather.description ? "Description: " + weather.description : ""}
          <br />
          {weather.pressure ? "Pressure: " + weather.pressure + "hPa" : ""}
          <br />
          {weather.temperature ? "Temperature: " + weather.temperature + String.fromCharCode(176) + "C" : ""}
          <br />
          {weather.windSpeed ? "Wind speed: " + weather.windSpeed + "km/h" : ""}
          <br />
        </Popup>
      </Marker>
    </React.Fragment>
  );
}

export interface MarkerProps {
  city: string;
  position: LatLng;
  iconName?: string;
  weather: {
    description: string;
    pressure: number;
    temperature: number;
    windSpeed: number;
  };
}

export const MarkerMemo = memo(MapMarker);
