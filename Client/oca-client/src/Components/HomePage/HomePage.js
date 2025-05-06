import React, { useState } from "react";
import LogoutButton from "../Logout/LogoutButton";
import "./HomePage.css";
import PakistanMap from "../PakMap/PakisthanInteractive/PakisthanMap";
import PakistanMapComponent from "../PakMap/NonInteractiveMap/PakMap";

function HomePage() {
  const [selectedMap, setSelectedMap] = useState("interactive");

  return (
    <>
      <div className="homepage-container">
        <LogoutButton />

        <div className="slider-buttons">
          <button
            className={`btn ${selectedMap === "interactive" ? "active" : ""}`}
            onClick={() => setSelectedMap("interactive")}
          >
            Interactive Map
          </button>
          <button
            className={`btn ${
              selectedMap === "noninteractive" ? "active" : ""
            }`}
            onClick={() => setSelectedMap("noninteractive")}
          >
            Static Map
          </button>
        </div>

        <div className="map-container">
          {selectedMap === "noninteractive" && <PakistanMapComponent />}
          {selectedMap === "interactive" && <PakistanMap />}
        </div>
      </div>
    </>
  );
}

export default HomePage;
