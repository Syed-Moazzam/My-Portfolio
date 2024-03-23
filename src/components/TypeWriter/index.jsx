import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Experienced Full Stack Developer",
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