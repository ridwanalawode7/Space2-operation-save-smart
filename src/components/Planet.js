import React from "react";
import "./PlanetStyle.css";
export default function Planet(props) {
  return (
    <div className="planet-content">
      <h1 className="planet-name">{props.name}</h1>
      <p className="planet-description"> {props.description}</p>
      <div className="travel-box">
        <p>
          AVG. DISTANCE
          <span className="travel-value">{props.distance} </span>
        </p>
        <p>
          EST. TRAVEL TIME
          <span className="travel-value">{props.travel} </span>
        </p>
      </div>
    </div>
  );
}
