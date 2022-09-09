import React from "react";
import "./TechList.css";

export default function techList(props) {
  return (
    <div className="tech-list">
      <h2 className="techlist-head">THE TERMINOLOGY</h2>
      <h1 className="techlist-name">{props.name}</h1>
      <p className="techlist-description">{props.description}</p>
    </div>
  );
}
