import React from "react";
//import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { MAP_TYPES, POSITION_CLASSES } from "../types";

// enum linearGradient {
//   TEMPERATURE = "(to right, rgb(159, 85, 181) 0%, rgb(44, 106, 187) 8.75%, rgb(82, 139, 213) 12.5%, rgb(103, 163, 222) 18.75%, rgb(142, 202, 240) 25%, rgb(155, 213, 244) 31.25%, rgb(172, 225, 253) 37.5%, rgb(194, 234, 255) 43.75%, rgb(255, 255, 208) 50%, rgb(254, 248, 174) 56.25%, rgb(254, 232, 146) 62.5%, rgb(254, 226, 112) 68.75%, rgb(253, 212, 97) 75%, rgb(244, 168, 94) 82.5%, rgb(244, 129, 89) 87.5%, rgb(244, 104, 89) 93.75%, rgb(244, 76, 73) 100%)",
//   PRESSURE = "(to right, rgb(159, 85, 181) 0%, rgb(44, 106, 187) 8.75%, rgb(82, 139, 213) 12.5%, rgb(103, 163, 222) 18.75%, rgb(142, 202, 240) 25%, rgb(155, 213, 244) 31.25%, rgb(172, 225, 253) 37.5%, rgb(194, 234, 255) 43.75%, rgb(255, 255, 208) 50%, rgb(254, 248, 174) 56.25%, rgb(254, 232, 146) 62.5%, rgb(254, 226, 112) 68.75%, rgb(253, 212, 97) 75%, rgb(244, 168, 94) 82.5%, rgb(244, 129, 89) 87.5%, rgb(244, 104, 89) 93.75%, rgb(244, 76, 73) 100%)",
// }

const VALUES = {
  TEMPERATURE: [-40, -20, 0, 20, 40],
  PRESSURE: [5],
};

export interface LineScaleProps {
  position: POSITION_CLASSES;
  type: MAP_TYPES;
}

export function LineScale({ position, type }: LineScaleProps) {
  return (
    <div className={`${position} ${type}`}>
      <div>
        {VALUES[type].map(val => (
          <div key={val}>{val}</div>
        ))}
      </div>
      {/* <div style={{ linerGradient: linearGradient[type] }}></div> */}
    </div>
  );

  //   const parentMap = useMap();
  //   const mapZoom = zoom || 0;
  //   const positionClass = (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;

  //   // Memoize the minimap so it's not affected by position changes
  //   const minimap = useMemo(
  //     () => (
  //       <MapContainer
  //         style={{ height: 80, width: 80 }}
  //         center={parentMap.getCenter()}
  //         zoom={mapZoom}
  //         dragging={false}
  //         doubleClickZoom={false}
  //         scrollWheelZoom={false}
  //         attributionControl={false}
  //         zoomControl={false}
  //       >
  //         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  //         <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
  //       </MapContainer>
  //     ),
  //     []
  //   );

  //   return (
  //     <div className={positionClass}>
  //       <div className="leaflet-control leaflet-bar">{minimap}</div>
  //     </div>
  //   );
}
