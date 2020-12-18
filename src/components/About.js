import React from "react";
import "../css/About.css";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="about">
        <p>
          I'm a senior at Lehman College, majoring in computer
          science. I am the chair of Women in Computer Science club 
          at Lehman college. Last summer, I completed an internship 
          at HBO as an information security officer. This summer and 
          fall, I worked at Target as an software engineer intern. Besides this,
          I like to read a lot, mostly fiction. Currently, I am reading Omerta by Mario Puzo.
        </p>
        <a href="https://linkedin.com/in/sharmint">To learn more about me, check out my linkedin</a>
       <p><a href="https://drive.google.com/file/d/1TVS2GYEDh4W-WDqnj6Au3z4Ul3vH6lQf/view?usp=sharing">Resume</a></p>
        
      </div>
    </div>
  );
}
