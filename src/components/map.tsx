import React, { useEffect, useState } from "react";
import { LatLng } from "leaflet";
import { MarkerMemo, MarkerProps } from "./marker/marker";
import OpenWeather from "../apis/openWeather";
import { OpenWeatherDTO } from "../apis/dto/openWeatherDTO";
import { CloudsMap } from "./maps/cloudsMap";
import { TerrainMap } from "./maps/terrainMap";
import { useMapEvents } from "react-leaflet";

const Map = () => {
  const [markersData, setMarkersData] = useState<MarkerProps[]>([]);

  useEffect(() => {
    createMarker(new LatLng(10, 10));
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

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <TerrainMap></TerrainMap>
      <CloudsMap></CloudsMap>
      {markersData.map(markerData => (
        <MarkerMemo
          key={markerData.position.lat + ";" + markerData.position.lng}
          position={markerData.position}
          city={markerData.city}
          weather={markerData.weather}
          iconName={markerData.iconName}
        ></MarkerMemo>
      ))}
    </React.Fragment>
  );

  async function createMarker(latLng: LatLng) {
    const weatherData = await OpenWeather.getWeatherAtCoordinates(latLng);
    if (weatherData) setMarkersData([...markersData, mapResponse(weatherData)]);
  }
};

function mapResponse(data: OpenWeatherDTO): MarkerProps {
  return {
    city: data.name,
    position: new LatLng(data.coord.lat, data.coord.lon),
    iconName: data.weather[0].description.replace(" ", "_"),
    weather: {
      description: data.weather[0].description,
      pressure: data.main.pressure,
      temperature: Math.round((data.main.temp - 273) * 10) / 10,
      windSpeed: data.wind.speed,
    },
  };
}

export default Map;
