import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import "./Destination.css";
import moonImg from "../starter-code/assets/destination/image-moon.png";
import marsImg from "../starter-code/assets/destination/image-mars.png";
import europaImg from "../starter-code/assets/destination/image-europa.png";
import titanImg from "../starter-code/assets/destination/image-titan.png";
// import Planet from "../components/Planet";

export default function Destination() {
  const path = useLocation().pathname;
  const location = path.split("destination")[1];
  let planetImg;
  if (location === "") {
    planetImg = moonImg;
  } else if (location === "/moon") {
    planetImg = moonImg;
  }
  if (location === "/mars") {
    planetImg = marsImg;
  }
  if (location === "/europa") {
    planetImg = europaImg;
  }
  if (location === "/titan") {
    planetImg = titanImg;
  }
  function planetNavCheck({ isActive }) {
    return {
      borderBottom: isActive ? "3px solid white" : "none",
      color: isActive ? "white" : "#D0D6F9",
    };
  }

  return (
    <div className="destination">
      <h2 className="destination-head">
        {" "}
        <span className="planet-no">01</span> PICK YOUR DESTINATION
      </h2>
      <div className="img-nd-combo">
        <div className="planet-img">
          <img src={planetImg} alt="planet-img" />
        </div>
        <div className="nav-nd-outlet">
          <nav className="planet-nav">
            <li>
              <NavLink
                to=""
                style={planetNavCheck}
                className="planet-link"
                end={true}
              >
                Moon
              </NavLink>
            </li>
            <li>
              <NavLink to="mars" style={planetNavCheck} className="planet-link">
                Mars
              </NavLink>
            </li>
            <li>
              <NavLink
                to="europa"
                style={planetNavCheck}
                className="planet-link"
              >
                Europa
              </NavLink>
            </li>
            <li>
              <NavLink
                to="titan"
                style={planetNavCheck}
                className="planet-link"
              >
                Titan
              </NavLink>
            </li>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
