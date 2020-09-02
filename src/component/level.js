import React from "react";
import "./App.css";

const Level = ({ number }) => {
  const array = [];

  for (let i = 0; i < number; i++) {
    array.push("❤️");
  }

  return <div className="level">{array}</div>;
};
export default Level;
