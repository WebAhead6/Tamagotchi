import React from "react";
import "./App.css";
const UserName = ({ name, handleName, handleClick }) => (
  <div className="header">
    <input
      className="userInput"
      type="text"
      name="username"
      value={name}
      onChange={handleName}
    />
    <div>
      <button className="EnterBtn" onClick={handleClick}>
        Enter
      </button>
    </div>
  </div>
);

export default UserName;
