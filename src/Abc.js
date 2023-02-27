import React from "react";

const startTime = 9;
const endTime = 18;

const userStartTime = 12;
const userEndTime = 16;

const secHeight = 1;
const Abc = () => {
  return (
    <div
      style={{
        borderStyle: "solid",
        borderLeftColor: "green",
        height: (endTime - startTime) * 60 * secHeight,
        width: 20,
        borderWidth: 0,
        borderLeftWidth: 10,
        position: "relative",
      }}
    >
      <div
        style={{
          borderStyle: "solid",
          borderLeftColor: "red",
          width: 20,
          height: (userEndTime - userStartTime) * 60 * secHeight,
          borderWidth: 0,
          borderLeftWidth: 10,
          position: "absolute",
          left: 0,
          top: (userStartTime - startTime) * 60 * secHeight,
        }}
      ></div>
    </div>
  );
};

export default Abc;