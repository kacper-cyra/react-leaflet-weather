import { LatLng } from "leaflet";
import React, { memo, useEffect, useState } from "react";
import { Popup, Marker, useMapEvents } from "react-leaflet";

export const LocationMarker = () => {
  const [position, setPosition] = useState(new LatLng(0, 0));
  const events = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      events.flyTo(e.latlng, events.getZoom());
    },
  });

  useEffect(() => {
    events.locate();
  }, []);

  return position.lat === 0 && position.lng === 0 ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export const LocationMarkerMemo = memo(LocationMarker);
