import React, { useState } from "react";
import person from "../assets/address.jpg";
import { Link } from "react-router-dom";

const jobsData = [
  {
    id: 1,
    hr: "Tom Bornr",
    logo: person,
    title: "Senior Graphic Designer",
    paragraph:
      "About the RoleWe are seeking a dynamic and strategic Marketing Manager with a strong focus on Web3 technologies. The ideal candidate will have a background in emergent consumer brand marketing and possess excellent brand",
    date: "Posted 2 days ago",
    location: "Boston, USA | Full-time | Remote",
    tags: ["Design & Creative", "Motion Design", "Graphic Design"],
  },
  {
    id: 2,
    hr: "paul Janeth",
    logo: person,
    title: "Blockchain Developer",
    paragraph:
      "strategic Marketing Manager with a strong focus on Web3 technologies. The ideal candidate will have a background in emergent consumer brand marketing and possess excellent brand",
    date: "Posted 5 days ago",
    location: "San Francisco, USA | Full-time | On-site",
    tags: ["Development", "Blockchain", "Solidity"],
  },
  {
    id: 3,
    hr: "Ahmed cane",
    logo: person,
    title: "Senior Graphic Designer",
    paragraph:
      "RoleWe are seeking a dynamic and strategic Marketing Manager with a strong focus on Web3 technologies. The ideal candidate will have a background in emergent consumer brand marketing and possess excellent brand",
    date: "Posted 2 days ago",
    location: "Boston, USA | Full-time | Remote",
    tags: ["Design & Creative", "Motion Design", "Graphic Design"],
  },
  {
    id: 4,
    hr: "Tom Janeth",
    logo: person,
    title: "Blockchain Developer",
    paragraph:
      "About the RoleWe are seeking a dynamic and strategic Marketing Manager with a strong focus on Web3 technologies. ",
    date: "Posted 5 days ago",
    location: "San Francisco, USA | Full-time | On-site",
    tags: ["Development", "Blockchain", "Solidity"],
  },
  {
    id: 5,
    hr: "Tom auther",
    logo: person,
    title: "Senior Graphic Designer",
    paragraph:
      "Marketing Manager with a strong focus on Web3 technologies. The ideal candidate will have a background in emergent consumer brand marketing and possess excellent brand",
    date: "Posted 2 days ago",
    location: "Boston, USA | Full-time | Remote",
    tags: ["Design & Creative", "Motion Design", "Graphic Design"],
  },
  {
    id: 6,
    hr: "Tom Janeth",
    logo: person,
    title: "Blockchain Developer",
    paragraph:
      "About the RoleWe are seeking a dynamic and strategic Marketing Manager with a strong focus on Web3 technologies. The ideal candidate will have a background in emergent consumer brand marketing and possess excellent brand",
    date: "Posted 5 days ago",
    location: "San Francisco, USA | Full-time | On-site",
    tags: ["Development", "Blockchain", "Solidity"],
  },
  // Add more jobs as needed
];

const Fulltimejob = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="pagetitle">
          <h1>Browse Full-time Jobs</h1>
        </div>
        <div className="row">
          {/* jobs search */}

          <div className="col-lg-12">
            {/* Filter Section */}
            <div className="filter-section">
              <input
                type="text"
                className="search-bar"
                placeholder="Search for jobs..."
              />
              <select className="role-filter">
                <option value="">All Roles</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="marketing">Marketing</option>
                {/* Add more roles as needed */}
              </select>
              <select className="sort-by-filter">
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="relevance">Relevance</option>
                {/* Add more sort options as needed */}
              </select>
            </div>
            <div className="fulltime-job-list">
              {jobsData.map((job) => (
                <div className="job-card" key={job.id}>
                  <Link to="/dashboard/gigdetails">
                    <div className="job-card-header">
                      <img
                        src={job.logo}
                        alt="Company Logo"
                        className="company-logo"
                      />
                      <h4 className="job-hr">{job.hr}</h4>
                      <div className="job-meta">
                        <span className="job-date">{job.date}</span>
                        <i className="save-icon">&#9734;</i>
                      </div>
                    </div>
                    <div className="job-info">
                      <h4 className="job-title">{job.title}</h4>
                      <p>{job.paragraph}</p>

                      <p>{job.location}</p>
                      <div className="job-tags">
                        {job.tags.map((tag, index) => (
                          <span key={index}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* End games */}
        </div>
      </div>
    </>
  );
};

export default Fulltimejob;
