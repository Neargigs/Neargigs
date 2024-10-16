import React, { useState } from "react";
import { FaPaperclip, FaPaperPlane } from "react-icons/fa";
import logo from "../../../assets/address.jpg";
import "../chat.css";
import near from "../../../assets/img/nearlogo.jpg";
import neargig from "../../../assets/img/neargig-logo.png";

const Chatdetails = () => {
  const [activeCategory, setActiveCategory] = useState("Thread");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [mediaPreview, setMediaPreview] = useState(null); // Store preview for selected media
  const [mediaType, setMediaType] = useState(""); // Store whether it's an image or file

  const handleSendMessage = () => {
    if (inputMessage.trim() || mediaPreview) {
      const newMessage = {
        text: inputMessage || mediaPreview,
        sender: "self", // assuming this user is 'self'
        time: new Date().toLocaleTimeString(),
        type: mediaType,
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
      setMediaPreview(null); // Reset the preview after sending
    }
  };

  const handleAttachMedia = (event) => {
    const file = event.target.files[0];
    if (file) {
      const mediaType = file.type.startsWith("image") ? "image" : "file";
      setMediaType(mediaType);

      const reader = new FileReader();
      reader.onload = () => {
        setMediaPreview(reader.result); // Store file preview (image or file name)
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="chat-details-container">
      <div className="col-lg-8 chat-section">
        <div className="sender-preview">
          <img src={logo} alt="profile" className="sender-image" />
          <div className="sender-details">
            <span className="sender-name">John Doe</span>
            <span className="sender-rating">⭐⭐⭐⭐⭐</span>
            <div className="sender-job">Web Developer</div>
          </div>
          <button className="usbutton">More Details</button>
        </div>

        <div className="nav-toggle">
          {["Thread", "Files", "Images", "Links"].map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="chat-content">
          {activeCategory === "Thread" && (
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${
                    message.sender === "self" ? "sent" : "received"
                  }`}
                >
                  <img src={logo} alt="profile" className="message-image" />
                  <div className="message-content">
                    {message.type === "image" ? (
                      <img
                        src={message.text}
                        alt="sent media"
                        className="sent-media"
                      />
                    ) : (
                      <p>{message.text}</p>
                    )}
                    <span className="message-time">{message.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeCategory === "Files" && (
            <div className="media-list">
              {messages
                .filter((msg) => msg.type === "file")
                .map((file, index) => (
                  <div key={index} className="media-item">
                    {file.text}
                  </div>
                ))}
            </div>
          )}
          {activeCategory === "Images" && (
            <div className="media-list">
              {messages
                .filter((msg) => msg.type === "image")
                .map((image, index) => (
                  <img
                    key={index}
                    src={image.text}
                    alt="sent media"
                    className="media-item"
                  />
                ))}
            </div>
          )}
        </div>

        {activeCategory === "Thread" && (
          <div className="chat-input-container">
            {mediaPreview && (
              <div className="media-preview">
                {mediaType === "image" ? (
                  <img
                    src={mediaPreview}
                    alt="preview"
                    className="preview-img"
                  />
                ) : (
                  <p className="preview-file">{mediaPreview}</p>
                )}
              </div>
            )}
            <label htmlFor="attach-file" className="attach-icon">
              <FaPaperclip />
            </label>
            <input
              type="file"
              id="attach-file"
              style={{ display: "none" }}
              onChange={handleAttachMedia}
            />
            <input
              type="text"
              placeholder="Type a message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="chat-input"
            />
            <button className="usbutton" onClick={handleSendMessage}>
              <FaPaperPlane />
            </button>
          </div>
        )}
      </div>

      <div className="col-lg-4">
        <div className="card info-card revenue-card">
          <div className="card-body">
            <h5 className="card-title">Escrow Funds:</h5>
            <h5 className="card-title">Escrow Funds:</h5>
            <h5 className="card-title">Escrow Funds:</h5>
            <h5 className="card-title">Escrow Funds:</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatdetails;
