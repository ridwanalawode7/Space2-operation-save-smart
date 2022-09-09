import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./CrewStyles.css";
import CommanderImg from "../starter-code/assets/crew/image-douglas-hurley.png";
import SpecialistImg from "../starter-code/assets/crew/image-mark-shuttleworth.png";
import PilotImg from "../starter-code/assets/crew/image-victor-glover.png";
import EngineerImg from "../starter-code/assets/crew/image-anousheh-ansari.png";

export default function Crew() {
  const [crewImg, setCrew] = useState(CommanderImg);
  const styleNav = ({ isActive }) => {
    return {
      opacity: isActive ? 1 : 0.17,
    };
  };
  // const size = window.innerWidth;
  // console.log(size);
  return (
    <div className="crew">
      <h2 className="crew-head">
        {" "}
        <span className="crew-no">02</span> MEET YOUR CREW
      </h2>
      <div className="outlet-container">
        <div className="img-nd-text">
          <div className="crew-img-container">
            <img src={crewImg} alt="crew cast" className="crew-img" />
          </div>
        </div>
        <div className="nav-outlet">
          <ul className="crew-nav">
            <li>
              <NavLink
                style={styleNav}
                to=""
                onClick={() => setCrew(CommanderImg)}
                className="crew-circle"
                end="true"
              ></NavLink>
            </li>
            <li>
              <NavLink
                style={styleNav}
                to="specialist"
                onClick={() => setCrew(SpecialistImg)}
                className="crew-circle"
              ></NavLink>
            </li>
            <li>
              <NavLink
                style={styleNav}
                to="pilot"
                onClick={() => setCrew(PilotImg)}
                className="crew-circle"
              ></NavLink>
            </li>
            <li>
              <NavLink
                style={styleNav}
                to="engineer"
                onClick={() => setCrew(EngineerImg)}
                className="crew-circle"
              ></NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
      {/* {size > 765 && <Outlet />} */}
      {/* {size < 765 && <Outlet />} */}
    </div>
  );
}
