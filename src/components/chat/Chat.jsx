import React, { useState } from "react";
import logo from "../../assets/address.jpg";
import "./chat.css"; // External CSS file for professional styling

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

  return (
    <>
      <div className="col-lg-8">
        <div className="row">
          <div className="chat-toggle">
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

          <div className="chat-list">
            {dummyChats
              .filter((category) => category.category === activeCategory)
              .map((category) =>
                category.chats.map((chat) => (
                  <div
                    key={chat.id}
                    className={`chat-item ${chat.isUnread ? "unread" : "read"}`}
                  >
                    <img src={logo} alt="profile" className="chat-image" />
                    <div className="chat-details">
                      <div className="chat-header">
                        <span className="chat-name">{chat.name}</span>
                        <span className="chat-date">{chat.dateSent}</span>
                      </div>
                      <div className="chat-job">{chat.jobTitle}</div>
                      <div className="chat-message">{chat.lastMessage}</div>
                    </div>
                    {chat.unreadMessages > 0 && (
                      <div className="unread-count">{chat.unreadMessages}</div>
                    )}
                  </div>
                ))
              )}
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="card info-card revenue-card">
          {/* Sidebar content */}
        </div>
      </div>
    </>
  );
};

export default Chat;
