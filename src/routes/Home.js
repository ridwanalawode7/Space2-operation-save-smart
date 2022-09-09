import React from "react";
import "./homeStyles.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="content">
        <h3 className="question">SO, YOU WANT TO TRAVEL TO</h3>
        <h1 className="space">SPACE</h1>
        <p className="text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={() => navigate("destination")}>
          EXPLORE
        </button>
      </div>
    </div>
  );
}
