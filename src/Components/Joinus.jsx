import React from "react";
import "../assets/Joinus.css";
import vid1 from "../assets/joinus.mp4";

export default function Joinus() {
  return (
    <div className="joinus-container">
      <video
        className="joinus-video"
        src={vid1}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="joinus-overlay-bg"></div>
      <div className="joinus-overlay">
        <p>Your next starts right here</p>
        <button className="joinus-btn">JOIN US</button>
      </div>
    </div>
  );
}
