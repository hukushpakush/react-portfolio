import React from "react";
import "../css/Home.css";
import me from "../images/me.png";

export default function Home() {
  return (
    <div className="home">
      
      <h2>Hi! I am Sharmin Tamanna</h2>
      <img src={me}alt ="picture of me"></img>
      <h2></h2>
    </div>
  );
}