import React, { useRef } from "react";
import Lottie from "lottie-react";
import "./ProCard.css";

const ProCard = ({ name, description, lottieAnimation, video }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to the beginning
    }
  };

  return (
    <div className="card">
      <div className="grid">
        <div className="box1">{name}</div>
        <div className="box2">{description}</div>
        <div
          className="box3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Lottie animation as the placeholder */}
          <Lottie
            animationData={lottieAnimation}
            className="lottie-animation"
            loop
          />
          <video
            ref={videoRef}
            src={video}
            className="video"
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
};

export default ProCard;

