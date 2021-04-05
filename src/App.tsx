import React from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapWrapper } from "./components/mapWrapper";

function App() {
  return (
    <div className="App">
      <MapWrapper></MapWrapper>
    </div>
  );
}

export default App;
