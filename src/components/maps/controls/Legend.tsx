import React from "react";
import { MAP_TYPES, POSITION_CLASSES } from "../types";
import "./LineScale.css";

const VALUES: Record<string, number[]> = {
  TEMPERATURE: [-40, -20, 0, 20, 40],
  PRESSURE: [950, 980, 1010, 1040, 1070],
  WIND_SPEED: [0, 2, 3, 6, 12, 25, 50, 100],
  CLOUDS: [0, 25, 50, 75, 100],
};

const DESCRIPTIONS: Record<string, string> = {
  TEMPERATURE: "Temperature, °C",
  PRESSURE: "Pressure, hPa",
  WIND_SPEED: "Wind speed, m/s",
  CLOUDS: "Clouds, %",
};

export interface LineScaleProps {
  position: POSITION_CLASSES;
  type: MAP_TYPES;
}

export function Legend({ position, type = MAP_TYPES.NONE }: LineScaleProps) {
  return (
    <div className={`${position} ${type} lineLegend`}>
      <div>{DESCRIPTIONS[type]}</div>
      <div className="lineLegend__scale">
        <div className="lineLegend__scale__values">{type ? VALUES[type].map(val => <div key={val}>{val}</div>) : ""}</div>
        <div className="lineLegend__scale__gradient"></div>
      </div>
    </div>
  );
}
