import React, { useState } from "react";
import { VectorMap } from "react-jvectormap";
import "./PakMap.css";

const PakistanMapComponent = () => {
  const mapData = {
    PK: 100,
  };

  const handleRegionClick = (e, code) => {
    if (code === "PK") {
      console.log("Pakistan selected");
    }
  };

  const handleRegionTipShow = (e, el, code) => {
    el.html(`Country: ${el.html()}`);
  };

  return (
    <div className="map-box">
      <h2>Pakistan Map</h2>

      <div style={{ width: "800px", height: "550px" }}>
        <VectorMap
          map={"asia_mill"}
          backgroundColor="#f5f5f5"
          containerStyle={{
            width: "100%",
            height: "100%",
          }}
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#2938bc",
            },
            selectedHover: {},
          }}
          regionsSelectable={true}
          series={{
            regions: [
              {
                values: mapData,
                scale: ["#DCDCDC", "#1B4969"],
                normalizeFunction: "polynomial",
              },
            ],
          }}
          onRegionTipShow={(e, el, code) => {
            el.html(`Country: ${el.html()}`);
          }}
          onRegionClick={handleRegionClick}
          focusOn={{
            region: "PK",
            animate: true,
          }}
          selectedRegions={["PK"]}
        />
      </div>
    </div>
  );
};

export default PakistanMapComponent;
