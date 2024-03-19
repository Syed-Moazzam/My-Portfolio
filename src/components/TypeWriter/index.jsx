import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Experienced Web And Mobile App Developer",
          "Effective Problem Solver"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default TypeWriter;