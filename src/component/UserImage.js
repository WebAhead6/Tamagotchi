import React from "react";
import "./App.css";

const userImage = ({ imgeSrc, name, number, setNumber }) => (
  <div>
    {name ? (
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
          </div>
        )}
      </output>
    ) : (
      ""
    )}
  </div>
);

export default userImage;
