import React, { useState } from "react";
import "./Navstyle.css";
import logo from "../starter-code/assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

// burger images
import hamburger from "../starter-code/assets/shared/icon-hamburger.svg";
import close from "../starter-code/assets/shared/icon-close.svg";

export default function Nav() {
  const width = window.innerWidth;
  const [burger, setBurger] = useState(true);
  const handleClick = () => {
    setBurger(!burger);
  };
  const styleNav = ({ isActive }) => {
    if (width > 765) {
      return {
        color: isActive ? "white" : "#ffffff80",
        borderBottom: isActive ? "3px solid white" : "0",
      };
    } else if (width > 1220) {
      return {
        color: "white",
      };
    }
    return {
      color: isActive ? "white" : "#ffffff80",
    };
  };
  const closeNav = () => {
    setBurger(!burger);
  };
  // console.log(width);

  return (
    <nav className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="burger" onClick={handleClick}>
        {burger ? (
          <img src={hamburger} alt="menu-open" />
        ) : (
          <img src={close} alt="menu-close" />
        )}
      </div>
      <div className="line"></div>
      <ul className={burger ? "sidebar" : "sidebar active"}>
        <li onClick={closeNav}>
          <NavLink to="/" className="link" style={styleNav}>
            <span className="nav-numbers">00</span>HOME
          </NavLink>
        </li>
        <li onClick={closeNav}>
          <NavLink to="destination" className="link" style={styleNav}>
            <span className="nav-numbers">01</span>DESTINATION
          </NavLink>
        </li>
        <li onClick={closeNav}>
          <NavLink to="crew" className="link" style={styleNav}>
            <span className="nav-numbers">02</span>CREW
          </NavLink>
        </li>
        <li onClick={closeNav}>
          <NavLink to="technology" className="link" style={styleNav}>
            <span className="nav-numbers">03</span>TECHNOLOGY
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </nav>
  );
}
