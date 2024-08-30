import React, { useState } from "react";
import useImage from "../../assets/address.jpg";
import { Link } from "react-router-dom";
import person from "../../assets/address.jpg";

const jobData = {
  all: [
    {
      id: 1,
      hr: "Tom Bornr",
      logo: person,
      title: "Senior Graphic Designer",
      paragraph:
        "About the RoleWe are seeking a dynamic and strategic Marketing Manager with a strong focus on Web3 technologies. The ideal candidate will have a background in emergent consumer brand marketing and possess excellent brand",
      date: "2 days ago",
      location: "Boston, USA | Full-time | Remote",
      amount: "$90,000/year",
      tags: ["Design & Creative", "Motion Design", "Graphic Design"],
    },
    {
      id: 2,
      hr: "paul Janeth",
      logo: person,
      title: "Blockchain Developer",
      paragraph:
        "strategic Marketing Manager with a strong focus on Web3 technologies. The ideal candidate will have a background in emergent consumer brand marketing and possess excellent brand",
      date: "5 days ago",
      location: "San Francisco, USA | Full-time | On-site",
      amount: "$90,000/year",
      tags: ["Development", "Blockchain", "Solidity"],
    },
    {
      id: 3,
      hr: "Ahmed cane",
      logo: person,
      title: "Senior Graphic Designer",
      paragraph:
        "RoleWe are seeking a dynamic and strategic Marketing Manager with a strong focus on Web3 technologies. The ideal candidate will have a background in emergent consumer brand marketing and possess excellent brand",
      date: "2 days ago",
      location: "Boston, USA | Full-time | Remote",
      amount: "$90,000/year",
      tags: ["Design & Creative", "Motion Design", "Graphic Design"],
    },
  ],
  apply: [
    {
      id: 1,
      hr: "Tom Janeth",
      logo: person,
      title: "Blockchain Developer",
      paragraph:
        "About the RoleWe are seeking a dynamic and strategic Marketing Manager with a strong focus on Web3 technologies. ",
      date: "5 days ago",
      location: "San Francisco, USA | Full-time | On-site",
      amount: "$90,000/year",
      tags: ["Development", "Blockchain", "Solidity"],
    },
    {
      id: 2,
      hr: "Tom auther",
      logo: person,
      title: "Senior Graphic Designer",
      paragraph:
        "Marketing Manager with a strong focus on Web3 technologies. The ideal candidate will have a background in emergent consumer brand marketing and possess excellent brand",
      date: "2 days ago",
      location: "Boston, USA | Full-time | Remote",
      amount: "$90,000/year",
      tags: ["Design & Creative", "Motion Design", "Graphic Design"],
    },
  ],
  progress: [
    {
      id: 1,
      hr: "Tom Janeth",
      logo: person,
      title: "Blockchain Developer",
      paragraph:
        "About the RoleWe are seeking a dynamic and strategic Marketing Manager with a strong focus on Web3 technologies. The ideal candidate will have a background in emergent consumer brand marketing and possess excellent brand",
      date: "5 days ago",
      location: "San Francisco, USA | Full-time | On-site",
      amount: "$90,000/year",
      tags: ["Development", "Blockchain", "Solidity"],
    },
  ],

  archive: [
    {
      id: 1,
      hr: "Tom Janeth",
      logo: person,
      title: "Blockchain Developer",
      paragraph:
        "About the RoleWe are seeking a dynamic and strategic Marketing Manager with a strong focus on Web3 technologies. The ideal candidate will have a background in emergent consumer brand marketing and possess excellent brand",
      date: "Posted 5 days ago",
      location: "San Francisco, USA | Full-time | On-site",
      tags: ["Development", "Blockchain", "Solidity"],
    },
  ],
};

const Myfulltime = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <>
      <div className="pagetitle">
        <h1>My Jobs</h1>
      </div>
      <div className="job-list">
        <div className="nav-toggle">
          <button
            className={selectedTab === "all" ? "active" : ""}
            onClick={() => setSelectedTab("all")}
          >
            All
          </button>
          <button
            className={selectedTab === "apply" ? "active" : ""}
            onClick={() => setSelectedTab("apply")}
          >
            Apply
          </button>
          <button
            className={selectedTab === "progress" ? "active" : ""}
            onClick={() => setSelectedTab("progress")}
          >
            In Progress
          </button>

          <button
            className={selectedTab === "archive" ? "active" : ""}
            onClick={() => setSelectedTab("archive")}
          >
            Archive
          </button>
        </div>

        <div className="row">
          <div className="fulltime-job-list">
            {jobData[selectedTab].map((job) => (
              <div className="job-card" key={job.id}>
                <div className="job-card-header">
                  <img
                    src={job.logo}
                    alt="Company Logo"
                    className="company-logo"
                  />
                  <div className="job-hr">
                    <h4 className="job-head">{job.hr}</h4>
                    {/* rating */}
                    <div className="job-rating">
                      <span className="stars">★★★★☆</span>
                      <span className="rating-count">(25)</span>
                    </div>
                  </div>

                  <div className="job-meta">
                    <span className="job-date">{job.date}</span>
                    <i className="save-icon">&#9734;</i>
                  </div>
                </div>
                <div className="job-info">
                  <h4 className="job-title">{job.title}</h4>

                  <p>{job.location}</p>
                  <div className="job-tags">
                    {job.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                  <p>{job.paragraph}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="job-amount">{job.amount}</span>
                  <button className="btn chat-button">
                    <i className="bi bi-chat"></i> Chat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Myfulltime;
