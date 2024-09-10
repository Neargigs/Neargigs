import React, { useState } from "react";
import { Link } from "react-router-dom";

const Participants = () => {
  return (
    <div className="col-lg-12">
      <h1 className="card-title">PARTICIPANTS</h1>
      <div style={{ overflowX: "auto" }} className="col-12">
        <table className="responsive-table">
          <thead>
            <tr className="table-header">
              <th className="col col-1">Seria</th>
              <th className="col col-2 text-center">Name</th>
              <th className="col col-3">Passed</th>
              <th className="col col-3">Failed</th>
              <th className="col col-5">Points</th>
              <th className="col col-6">Grade</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

const Fulltimeprofile = () => {
  const [showParticipants, setShowParticipants] = useState([]);

  const handleShowParticipants = (index) => {
    setShowParticipants((prev) => {
      const newParticipants = [...prev];
      newParticipants[index] = !newParticipants[index];
      return newParticipants;
    });
  };

  const quizzes = [
    "Meta Quest Presence Platform quiz 2024",
    "IBM Quest Presence Platform quiz 2024",
  ];

  return (
    <div
      style={{
        color: "white",
        backgroundColor: "transparent",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Hosted Quizzes</h2>
      {quizzes.map((quiz, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <div className="d-flex justify-content-between align-items-center">
            {/* First word with icon */}
            <div>
              <h4 style={{ color: "#b1bad3" }}>
                {" "}
                <i
                  className="bi bi-arrow-right"
                  style={{ color: "#b1bad3", marginRight: "10px" }}
                ></i>
                {quiz}
              </h4>
            </div>
            {/* Second word */}
            <div>
              <button
                onClick={() => handleShowParticipants(index)}
                id="followbtn"
              >
                Participants
              </button>
              <Link to="/quizinfo">
                <button id="followbtn">Winners</button>
              </Link>
            </div>
          </div>

          {showParticipants[index] && <Participants />}
        </div>
      ))}
    </div>
  );
};

export default Fulltimeprofile;
