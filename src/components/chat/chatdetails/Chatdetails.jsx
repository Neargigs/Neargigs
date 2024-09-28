import React, { useState } from "react";
import logo from "../../../assets/address.jpg";
import "../chat.css";

const Chatdetails = () => {
  const [progress, setProgress] = useState(0); // 0 = Offer, 1 = Confirmation, 2 = In-progress, 3 = Completed

  const handleProgressClick = (stage) => {
    if (stage <= progress) {
      setProgress(stage);
    }
  };

  return (
    <>
      <div className="col-lg-8">
        <div className="row">
          {/* Sender Info */}
          <div className="sender-preview">
            <img src={logo} alt="profile" className="sender-image" />
            <div className="sender-details">
              <span className="sender-name">John Doe</span>
              <span className="sender-rating">⭐⭐⭐⭐⭐</span>
              <div className="sender-job">Web Developer</div>
            </div>
            <button className="more-details-btn">More Details</button>
          </div>

          {/* Payment Progress */}
          <div className="progress-bar">
            {[
              "Offer",
              "Confirmation & Deposit",
              "In-progress",
              "Completed",
            ].map((stage, index) => (
              <div
                key={index}
                className={`progress-step ${progress >= index ? "active" : ""}`}
                onClick={() => handleProgressClick(index)}
              >
                {stage}
              </div>
            ))}
          </div>

          {/* Chat Section */}
          <div className="chat-section">
            <div className="chat-nav">
              <button>Thread</button>
              <button>Files</button>
              <button>Images</button>
              <button>Links</button>
            </div>
            <div className="chat-messages">
              {/* Received message */}
              <div className="message received">
                <img src={logo} alt="profile" className="message-image" />
                <div className="message-content">
                  <p>Can you please share the latest design?</p>
                  <span className="message-time">11:30 AM</span>
                </div>
              </div>

              {/* Sent message */}
              <div className="message sent">
                <div className="message-content">
                  <p>Sure! Here it is...</p>
                  <span className="message-time">11:32 AM</span>
                </div>
                <img src={logo} alt="profile" className="message-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="card info-card revenue-card">
          <div className="offer-details">
            <div>Location: Lagos, Nigeria</div>
            <div>Time Left: 2 Days</div>
            <div>Price: $1500</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatdetails;
