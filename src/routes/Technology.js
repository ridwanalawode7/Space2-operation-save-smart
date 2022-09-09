import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import TechImg from "../starter-code/assets/technology/image-launch-vehicle-landscape.jpg";
// import portraitTechImg from "../starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
import CapsuleImg from "../starter-code/assets/technology/image-space-capsule-landscape.jpg";
import SpaceportImg from "../starter-code/assets/technology/image-spaceport-landscape.jpg";
import "./technologyStyles.css";

// portraits
import portraitTechImg from "../starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
import portraitCapsuleImg from "../starter-code/assets/technology/image-space-capsule-portrait.jpg";
import portraitSpaceportImg from "../starter-code/assets/technology/image-spaceport-portrait.jpg";

export default function Technology() {
  const navLink = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "white" : "inherit",
      color: isActive ? "black" : "white",
    };
  };
  const [techImg, setTechImg] = useState(
    window.innerWidth ? portraitTechImg : TechImg
  );
  console.log(window.innerWidth);
  // useEffect(() => {
  //   window.localStorage.setItem("some-lists", JSON.stringify(techImg));
  //   console.log(techImg);
  // });

  // useEffect(() => {
  //   const data = window.localStorage.getItem("some-lists");
  //   if (data) {
  //     setTechImg(JSON.parse(data));
  //   }
  // }, []);

  return (
    <div className="technology">
      <h2 className="tech-head">
        {" "}
        <span className="tech-no">03</span> SPACE LAUNCH 101
      </h2>
      <div>
        <div className="split">
          <div className="tech-img-container">
            <img src={techImg} alt="technical equipment" className="tech-img" />
          </div>
          <div className="technav-outlet">
            <ul className="tech-nav">
              <li>
                <NavLink
                  to=""
                  onClick={() =>
                    window.innerWidth > 1200
                      ? setTechImg(portraitTechImg)
                      : setTechImg(TechImg)
                  }
                  style={navLink}
                  className="tech-link"
                  end="true"
                >
                  1
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="spaceport"
                  style={navLink}
                  onClick={() =>
                    window.innerWidth > 1200
                      ? setTechImg(portraitCapsuleImg)
                      : setTechImg(CapsuleImg)
                  }
                  className="tech-link"
                >
                  2
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="capsule"
                  style={navLink}
                  onClick={() =>
                    window.innerWidth > 1200
                      ? setTechImg(portraitSpaceportImg)
                      : setTechImg(SpaceportImg)
                  }
                  className="tech-link"
                >
                  3
                </NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
