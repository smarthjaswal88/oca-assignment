import React from "react";
import LogoutButton from "../Logout/LogoutButton";
import "./HomePage.css";
import PakistanMap from "../PakMap/PakisthanMap";

function HomePage() {
  return (
    <>
      <div className="homepage-container">
        <LogoutButton />
        <PakistanMap />
      </div>
    </>
  );
}

export default HomePage;
