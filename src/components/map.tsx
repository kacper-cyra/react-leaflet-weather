import React, { useEffect, useState } from "react";
import { LatLng } from "leaflet";
import { MarkerMemo, MarkerProps } from "./marker/marker";
import OpenWeather from "../apis/openWeather";
import { OpenWeatherDTO } from "../apis/dto/openWeatherDTO";
import { CloudsMap } from "./maps/cloudsMap";
import { TerrainMap } from "./maps/terrainMap";
import { LayersControl, useMapEvents } from "react-leaflet";
import { ICONS, mapIdToIcon } from "./marker/icons";

const Map = () => {
  const [markersData, setMarkersData] = useState<MarkerProps[]>([]);

  useEffect(() => {
    events.locate();
  }, []);

  const events = useMapEvents({
    locationfound(e) {
      createMarker(e.latlng);
      events.flyTo(e.latlng, events.getZoom());
    },

    click(e) {
      createMarker(e.latlng);
    },
  });

  return (
    <LayersControl>
      <LayersControl.Overlay name="clouds">
        <CloudsMap></CloudsMap>
      </LayersControl.Overlay>
      <TerrainMap></TerrainMap>
      {markersData.map(markerData => (
        <MarkerMemo
          key={markerData.position.lat + ";" + markerData.position.lng}
          position={markerData.position}
          city={markerData.city}
          weather={markerData.weather}
          iconName={markerData.iconName}
        ></MarkerMemo>
      ))}
    </LayersControl>
  );

  async function createMarker(latLng: LatLng) {
    const weatherData = await OpenWeather.getWeatherAtCoordinates(latLng);
    if (weatherData) setMarkersData([...markersData, mapResponseData(weatherData)]);
  }
};

function mapResponseData(data: OpenWeatherDTO): MarkerProps {
  const convertedDescription = data.weather[0].description.replace(" ", "_");
  return {
    city: data.name,
    position: new LatLng(data.coord.lat, data.coord.lon),
    iconName: ICONS.includes(convertedDescription) ? convertedDescription : mapIdToIcon(data.weather[0].id),
    weather: {
      id: data.weather[0].id,
      description: data.weather[0].description,
      pressure: data.main.pressure,
      temperature: Math.round((data.main.temp - 273) * 10) / 10,
      windSpeed: data.wind.speed,
    },
  };
}

export default Map;
