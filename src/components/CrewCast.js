import React from "react";
import "./CrewCastStyle.css";

export default function CrewCast(props) {
  return (
    <div className="outlet">
      <h2 className="role">{props.role}</h2>
      <h1 className="name">{props.name}</h1>
      <p className={"bio " + props.role}>{props.bio}</p>
    </div>
  );
}
