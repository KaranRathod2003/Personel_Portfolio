import React from "react";
import "./About.css";
import Icons from "../components/Icons";
import LottieAnimation from "../components/LottieAnimation";
import codingAnimation from '../assets/codingAnimation.json'
import my_cv from '../assets/my_cv.pdf';

const About = () => {
  return (
    <>
      <div className="about">
        {/* Left Section */}
        <div className="left">
          <h2>About Me</h2>
          <p>
            I am a final-year engineering student passionate about software
            development. I have completed an internship where I honed my skills
            in React, Python, and API integrations. My project portfolio
            includes a Face Recognition Attendance System, an AI-based Virtual
            Assistant, and more.
          </p>
          <p>
            I am driven by curiosity and a desire to solve real-world problems
            through technology. I enjoy contributing to open-source projects
            and learning cutting-edge tools.
          </p>
          <div className="btn-icons">
            <Icons />
          </div>
          <button className="cv-btn"><a href="../assets/my_cv.pdf" download={my_cv}>Download CV</a></button>
        </div>

        {/* Right Section */}
        <div className="right">
          {/* Animation/Graphics */}
          <div className="animation-box">
            {/* <div className="coding-animation"></div>
             */}
              <LottieAnimation animationData={codingAnimation} style={{ width: "95%", height: "95%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
