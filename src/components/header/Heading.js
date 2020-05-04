import React from "react";
import Particles from "./Particles";

const Heading = () => {
  return (
    <div className="heading__container">
      <Particles />
      <div className="heading__glitch">
        <div className="heading__image"></div>
        <div className="heading__image"></div>
        <div className="heading__image"></div>
        <div className="heading__image"></div>
        <div className="heading__image"></div>
      </div>
      <h1 className="heading__title">
        <span className="heading__title--main">Cesar Jimenez</span>
        <span className="heading__title--sub">
          Front-end UI | Web Developer
        </span>
      </h1>
    </div>
  );
};

export default Heading;
