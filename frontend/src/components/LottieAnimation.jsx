import React from "react";
import Lottie from "lottie-react";
import "./LottieAnimation.css";

const LottieAnimation = ({ animationData, style }) => {
  return (
    <div className="lottie-container" style={style}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
