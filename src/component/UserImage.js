import React from "react";
import "./App.css";

const userImage = ({
  imgeSrc,
  name,
  number,
  setNumber,
  setHideUserInput,
  setUserData,
  setName,
}) => (
  <div>
    {imgeSrc ? (
      <output>
        {number > 0 ? (
          <img className="userImage" src={imgeSrc} />
        ) : (
          <div>
            <img className="gameOverImage" src="/giphy.gif" />
            <div>
              <button
                className="btn-tryAgain"
                onClick={() => {
                  setNumber(5);
                }}
              >
                try again
              </button>
            </div>
            <div>
              <button
                className="Change-user"
                onClick={() => {
                  setHideUserInput(false);
                  setName("");
                  setUserData({});
                }}
              >
                Change user
              </button>
            </div>
          </div>
        )}
      </output>
    ) : (
      ""
    )}
  </div>
);

export default userImage;
