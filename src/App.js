import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import Destination from "./routes/Destination";
import Crew from "./routes/Crew";
import Technology from "./routes/Technology";
import Planet from "./components/Planet";
import CrewCast from "./components/CrewCast";
import TechList from "./components/TechList";
import Data from "./starter-code/data.json";
import { useLocation } from "react-router-dom";

// import "./index.css";

function App() {
  const path = useLocation().pathname;
  const location = path.split("/")[2];
  const destinationList = Data.destinations;
  const crewList = Data.crew;
  const techList = Data.technology;

  return (
    <div className={"body " + location}>
      <Nav />
      <Routes>
        <Route path="Space2/" element={<Home />} />
        <Route path="Space2/destination" element={<Destination />}>
          <Route
            index
            element={
              <Planet
                name={destinationList[0].name}
                description={destinationList[0].description}
                distance={destinationList[0].distance}
                travel={destinationList[0].travel}
              />
            }
          />
          <Route
            path={destinationList[0].name}
            element={
              <Planet
                name={destinationList[0].name}
                description={destinationList[0].description}
                distance={destinationList[0].distance}
                travel={destinationList[0].travel}
              />
            }
          />
          <Route
            path={destinationList[1].name}
            element={
              <Planet
                name={destinationList[1].name}
                description={destinationList[1].description}
                distance={destinationList[1].distance}
                travel={destinationList[1].travel}
              />
            }
          />
          <Route
            path={destinationList[2].name}
            element={
              <Planet
                name={destinationList[2].name}
                description={destinationList[2].description}
                distance={destinationList[2].distance}
                travel={destinationList[2].travel}
              />
            }
          />
          <Route
            path={destinationList[3].name}
            element={
              <Planet
                name={destinationList[3].name}
                description={destinationList[3].description}
                distance={destinationList[3].distance}
                travel={destinationList[3].travel}
              />
            }
          />
        </Route>
        <Route path="Space2/crew" element={<Crew />}>
          <Route
            index
            element={
              <CrewCast
                name={crewList[0].name}
                role={crewList[0].role}
                bio={crewList[0].bio}
              />
            }
          />
          <Route
            path={crewList[0].role}
            element={
              <CrewCast
                name={crewList[0].name}
                role={crewList[0].role}
                bio={crewList[0].bio}
              />
            }
          />
          <Route
            path={crewList[1].role.split(" ")[1]}
            element={
              <CrewCast
                name={crewList[1].name}
                role={crewList[1].role}
                bio={crewList[1].bio}
              />
            }
          />
          <Route
            path={crewList[2].role}
            element={
              <CrewCast
                name={crewList[2].name}
                role={crewList[2].role}
                bio={crewList[2].bio}
              />
            }
          />
          <Route
            path={crewList[3].role.split(" ")[1]}
            element={
              <CrewCast
                name={crewList[3].name}
                role={crewList[3].role}
                bio={crewList[3].bio}
              />
            }
          />
        </Route>
        <Route path="Space2/technology" element={<Technology />}>
          <Route
            index
            element={
              <TechList
                name={techList[0].name}
                description={techList[0].description}
              />
            }
          />
          <Route
            path={techList[0].name.split(" ")[1]}
            element={
              <TechList
                name={techList[0].name}
                description={techList[0].description}
              />
            }
          />{" "}
          <Route
            path={techList[1].name}
            element={
              <TechList
                name={techList[1].name}
                description={techList[1].description}
              />
            }
          />
          <Route
            path={techList[2].name.split(" ")[1]}
            element={
              <TechList
                name={techList[2].name}
                description={techList[2].description}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
