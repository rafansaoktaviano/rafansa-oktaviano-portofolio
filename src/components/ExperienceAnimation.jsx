import React from "react";
import animation from "../assets/animation-expe.webm";

const ExperienceAnimation = () => {
  return (
    <video
      src={animation}
      autoPlay
      loop
      muted
      playsInline
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default ExperienceAnimation;
