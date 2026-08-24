import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Backend-focused Software Engineer",
          "Senior Software Engineer",
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