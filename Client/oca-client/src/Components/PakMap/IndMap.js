import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { inMill } from "@react-jvectormap/india";

const IndiaMap = () => {
  console.log(inMill, "inMill");
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <VectorMap
        map={inMill}
        backgroundColor="#f4f4f4"
        regionStyle={{
          initial: {
            fill: "#d3d3d3",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeOpacity: 1,
          },
          hover: {
            fill: "#1e90ff", // Highlight color on hover
            fillOpacity: 1,
          },
          selected: {
            fill: "#ff5722", // Color when clicked
          },
        }}
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
        onRegionTipShow={(e, el, code) => {
          el.html(`${el.html()}`); // Displays state name on hover
        }}
      />
    </div>
  );
};

export default IndiaMap;
