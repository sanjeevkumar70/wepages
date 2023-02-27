import React from "react";
import { convertTimeToDecimal } from "./constants";
// import { convertTimeToDecimal } from "./constants";

const startTime = 9;
const endTime = 18;

const userStartTime = 12;
const userEndTime = 16;

const minHeight = 60;
const SingleUser = (props) => {
  const { name, eventEndTime, eventStartTime } = props;
  const modifiedEventEndTime = convertTimeToDecimal(eventEndTime);
  const modifiedEventStartTime = convertTimeToDecimal(eventStartTime);
  console.log(
    "eeee",
    { modifiedEventEndTime, modifiedEventStartTime, minHeight },
    (modifiedEventEndTime - modifiedEventStartTime) * minHeight
  );
  return (
    <div
      style={{
        borderStyle: "solid",
        borderLeftColor: "green",
        height: (endTime - startTime) * minHeight,
        width: "100%",
        borderWidth: 0,
        borderLeftWidth: 10,
        position: "relative",
      }}
    >
      <div
        style={{
          borderStyle: "solid",
          borderLeftColor: "red",
          width: "100%",
          height: (modifiedEventEndTime - modifiedEventStartTime) * minHeight,
          borderWidth: 0,
          borderLeftWidth: 5,
          position: "absolute",
          left: 0,
          background:" aquamarine",
          top: (modifiedEventStartTime - startTime) * minHeight,
        }}
      ></div>
    </div>
  );
};

export default SingleUser;