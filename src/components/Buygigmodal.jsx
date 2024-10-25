import React, { useState } from "react";

const Buygigmodal = ({
  recruiterImage,
  recruiterName,
  jobTitle,
  isOpen,
  onClose,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("USDT");
  const [cvFile, setCvFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting the application (e.g., send data to the backend)
    console.log("Application Submitted:", {
      paymentMethod,
      cvFile,
      description,
    });
    // Redirect to the chat page
    window.location.href = "/dashboard/chatdetails";
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          ×
        </span>
        <h2>Buy gigs - {jobTitle}</h2>
        <div className="recruiter-info">
          <img
            src={recruiterImage}
            alt={recruiterName}
            className="recruiter-image"
          />
          <div>
            <h4>{recruiterName}</h4>
            <p>{jobTitle}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="application-form">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Your Application"
            required
          ></textarea>

          <label>Attach Doc</label>
          <input type="file" onChange={handleFileChange} required />

          <button type="submit" className="usbutton">
            Buy this Gig
          </button>
        </form>
      </div>
    </div>
  );
};

export default Buygigmodal;
