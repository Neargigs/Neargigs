import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/address.jpg";
import near from "../../assets/img/nearlogo.jpg";
import neargig from "../../assets/img/neargig-logo.png";
import "./chat.css";

const dummyChats = [
  {
    category: "Freelance",
    chats: [
      {
        id: 1,
        name: "John Doe",
        jobTitle: "Web Developer",
        lastMessage: "Looking forward to the next steps...",
        dateSent: "2024-09-25",
        unreadMessages: 3,
        isUnread: true,
      },
      {
        id: 2,
        name: "Alice Cooper",
        jobTitle: "UI/UX Designer",
        lastMessage: "Please find attached the designs.",
        dateSent: "2024-09-24",
        unreadMessages: 1,
        isUnread: true,
      },
      {
        id: 3,
        name: "Tolu jane",
        jobTitle: "UI/UX Designer",
        lastMessage: "Please find attached the designs.",
        dateSent: "2024-09-24",
        unreadMessages: 0,
        isUnread: false,
      },
    ],
  },
  {
    category: "Full-Time",
    chats: [
      {
        id: 3,
        name: "Mark Spencer",
        jobTitle: "Full Stack Engineer",
        lastMessage: "All good. Awaiting your approval.",
        dateSent: "2024-09-23",
        unreadMessages: 0,
        isUnread: false,
      },
    ],
  },
  {
    category: "Archived",
    chats: [
      {
        id: 4,
        name: "Chris Evans",
        jobTitle: "Data Scientist",
        lastMessage: "I'll send the report soon.",
        dateSent: "2024-09-22",
        unreadMessages: 0,
        isUnread: false,
      },
    ],
  },
];

const Chat = () => {
  const [activeCategory, setActiveCategory] = useState("Freelance");
  const [nearBalance, setnearBalance] = useState("0");
  const [neargigBalance, setneargigBalance] = useState("0");
  return (
    <>
      <div className="pagetitle">
        <h1>Chats</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/dashboard">Home</a>
            </li>
            <li className="breadcrumb-item active">chat</li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-8">
        <div className="row">
          <div className="job-list">
            <div className="nav-toggle">
              <button
                className={activeCategory === "Freelance" ? "active" : ""}
                onClick={() => setActiveCategory("Freelance")}
              >
                Freelance
              </button>
              <button
                className={activeCategory === "Full-Time" ? "active" : ""}
                onClick={() => setActiveCategory("Full-Time")}
              >
                Full-Time
              </button>
              <button
                className={activeCategory === "Archived" ? "active" : ""}
                onClick={() => setActiveCategory("Archived")}
              >
                Archived
              </button>
            </div>

            <div className="row">
              <Link to="/dashboard/chatdetails">
                <div className="chat-list">
                  {dummyChats
                    .filter((category) => category.category === activeCategory)
                    .map((category) =>
                      category.chats.map((chat) => (
                        <div
                          key={chat.id}
                          className={`chat-item ${
                            chat.isUnread ? "unread" : "read"
                          }`}
                        >
                          <img
                            src={logo}
                            alt="profile"
                            className="chat-image"
                          />
                          <div className="chat-details">
                            <div className="chat-header">
                              <span className="chat-name">{chat.name}</span>
                              <span className="chat-date">{chat.dateSent}</span>
                            </div>
                            <div className="chat-job">{chat.jobTitle}</div>
                            <div className="chat-message">
                              {chat.lastMessage}
                            </div>
                          </div>
                          {chat.unreadMessages > 0 && (
                            <div className="unread-count">
                              {chat.unreadMessages}
                            </div>
                          )}
                        </div>
                      ))
                    )}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        {/* Recent Activity */}
        <div className="card info-card revenue-card">
          <div className="card-body">
            <h5 className="card-title">Escrow Funds:</h5>
            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <img id="balance" src={near} alt="" />
              </div>
              <div className="ps-3">
                <h6>{nearBalance} NEAR</h6>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <img id="balance" src={neargig} alt="" />
              </div>
              <div className="ps-3">
                <h6>{neargigBalance} NGIG</h6>
              </div>
            </div>
          </div>
        </div>
        {/* End Recent Activity */}
      </div>
    </>
  );
};

export default Chat;
