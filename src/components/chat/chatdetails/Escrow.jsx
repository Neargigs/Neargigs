import React, { useState } from "react";
import "../chat.css";

const Escrow = () => {
  const [buttonStates, setButtonStates] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (index) => {
    const updatedStates = [...buttonStates];
    if (!updatedStates[index] && (index === 0 || updatedStates[index - 1])) {
      updatedStates[index] = true;
      setButtonStates(updatedStates);
    }
  };

  // Calculate rope progress based on active buttons
  const ropeProgress = buttonStates.filter((state) => state).length;

  return (
    <div className="progress-container">
      {/* Rope element */}
      <div
        className="progress-rope"
        style={{
          width: `calc((100% / 3) * ${ropeProgress})`, // Adjust width based on the progress
        }}
      ></div>

      <button
        className={`progress-btn ${buttonStates[0] ? "active" : ""} ${
          !buttonStates[0] ? "highlight" : ""
        }`}
        onClick={() => handleClick(0)}
      >
        Offer
      </button>

      <button
        className={`progress-btn ${buttonStates[1] ? "active" : ""} ${
          !buttonStates[1] && buttonStates[0] ? "highlight" : ""
        }`}
        onClick={() => handleClick(1)}
        disabled={!buttonStates[0]}
      >
        Deposit
      </button>

      <button
        className={`progress-btn ${buttonStates[2] ? "active" : ""} ${
          !buttonStates[2] && buttonStates[1] ? "highlight" : ""
        }`}
        onClick={() => handleClick(2)}
        disabled={!buttonStates[1]}
      >
        In-Progress
      </button>

      <button
        className={`progress-btn arrow-btn ${buttonStates[3] ? "active" : ""} ${
          !buttonStates[3] && buttonStates[2] ? "highlight" : ""
        }`}
        onClick={() => handleClick(3)}
        disabled={!buttonStates[2]}
      >
        Completed
      </button>
    </div>
  );
};

export default Escrow;