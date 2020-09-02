import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faPizzaSlice,
  faAppleAlt,
  faCannabis,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const randomNumResult = () => {
  return Math.floor(Math.random() * 10);
};
const Button = ({ setNumber, number }) => (
  <div className="buttons_container">
    <button
      className="button"
      onClick={() => {
        if (number <= 5) {
          setNumber((number) => number + 2);
        }
      }}
    >
      {" "}
      <FontAwesomeIcon icon={faCoffee} />
    </button>
    <button
      className="button"
      onDoubleClick={() => {
        if (number <= 5) {
          setNumber((number) => number + 1);
        }
      }}
    >
      <FontAwesomeIcon icon={faPizzaSlice} />
    </button>
    <button
      className="button"
      onClick={() => {
        if (number <= 5) {
          setNumber((number) => number + 1);
        }
      }}
    >
      <FontAwesomeIcon icon={faAppleAlt} />
    </button>
    <button
      className="button"
      onClick={() => {
        if (number <= 5) {
          setNumber((number) =>
            randomNumResult() > 3 ? number + 1 : number - 2
          );
        }
      }}
    >
      <FontAwesomeIcon icon={faCannabis} />
    </button>
  </div>
);

export default Button;
