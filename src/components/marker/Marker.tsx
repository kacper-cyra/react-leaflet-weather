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
            : new Icon({ iconUrl: `${process.env.PUBLIC_URL}img/marker.png`, iconSize: [40, 45] })
        }
      >
        <Popup data-author="Icon vector created by titusurya - www.freepik.com">
          <div className={styles.marker__popup__content}>
            <span className={styles.cityName}>{city !== "" ? city : "longitude: " + position.lng + ", latitude: " + position.lat}</span>
            <span>{weather.description ? "Description: " + weather.description : ""}</span>
            <span>{weather.pressure ? "Pressure: " + weather.pressure + "hPa" : ""}</span>
            <span>{weather.temperature ? "Temperature: " + weather.temperature + String.fromCharCode(176) + "C" : ""}</span>
            <span>{weather.windSpeed ? "Wind speed: " + weather.windSpeed + "km/h" : ""}</span>
          </div>
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
    id: number;
    description: string;
    pressure: number;
    temperature: number;
    windSpeed: number;
  };
}

export const MarkerMemo = memo(MapMarker);
