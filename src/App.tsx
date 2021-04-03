import React from "react";
import "./App.css";
import Map from "./components/map";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="App">
      <Map apiKey={process.env.REACT_APP_API_WEATHER}></Map>
    </div>
  );
}

export default App;
