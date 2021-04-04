import React, { useState } from "react";

export function Markers() {
  const [markers, setMarkers] = useState([]);

  setMarkers([]);

  return <React.Fragment>{markers.map(marker => marker)}</React.Fragment>;
}
