import React, { useState } from "react";
import person from "../assets/address.jpg";
import { Link } from "react-router-dom";

const freelanceJobsData = [
  {
    id: 1,
    logo: person,
    title: "Virtual Assistant for Marketing and Sales",
    assigner: "John Doe",
    description:
      "We're seeking a highly motivated and tech-savvy Virtual Assistant to join our dynamic team. You'll play a crucial role.",
    tags: ["Design & Creative", "Motion Design", "Graphic Design"],
    price: "$1,200",
    rating: "★★★★☆(10)",
  },
  {
    id: 2,
    logo: person,
    title: "Virtual Assistant for Marketing and Sales",
    assigner: "Jane Smith",
    description:
      "We're seeking a highly motivated and tech-savvy Virtual Assistant to join our dynamic team. You'll play a crucial role...",
    tags: ["Development", "Blockchain", "Solidity"],
    price: "$2,500",
    rating: "★★★★☆(0)",
  },
  {
    id: 3,
    logo: person,
    title: "Virtual Assistant for Marketing and Sales",
    assigner: "John Doe",
    description:
      "We're seeking a highly motivated and tech-savvy Virtual Assistant to join our dynamic team. You'll play a crucial role.",
    tags: ["Design & Creative", "Motion Design", "Graphic Design"],
    price: "$1,200",
    rating: "★★★★☆(4)",
  },
  {
    id: 4,
    logo: person,
    title: "Virtual Assistant for Marketing and Sales",
    assigner: "Jane Smith",
    description:
      "We're seeking a highly motivated and tech-savvy Virtual Assistant to join our dynamic team. You'll play a crucial role...",
    tags: ["Development", "Blockchain", "Solidity"],
    price: "$2,500",
    rating: "★★★★☆(15)",
  },
  // Add more freelance jobs as needed
];

const Freelance = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="pagetitle">
          <h1>Browse Jobs</h1>
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
            <div className="freelance-job-list">
              {freelanceJobsData.map((job) => (
                <div className="freelance-job-card" key={job.id}>
                  <Link to="/dashboard/gigdetails">
                    <div className="freelance-job-card-body">
                      <img
                        src={job.logo}
                        alt="Company Logo"
                        className="freelance-company-logo"
                      />
                      <div className="freelance-job-details">
                        <h4 className="freelance-job-title">{job.title}</h4>
                        <p className="freelance-task-assigner">
                          {job.assigner}
                        </p>
                        <span style={{ color: "#ddd", fontSize: "12px" }}>
                          May 26, 2024
                        </span>
                        <div
                          style={{ color: "goldenrod" }}
                          className="gig-job-rating"
                        >
                          {job.rating}
                        </div>

                        <p className="freelance-job-description">
                          {job.description}
                        </p>
                        <div className="freelance-job-tags">
                          {job.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="freelance-job-card-footer">
                    <p className="freelance-job-price">{job.price}</p>
                    <Link to="/dashboard/gigdetails">
                      <button className="freelance-more-info-btn">
                        See details
                      </button>
                    </Link>
                  </div>
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

export default Freelance;
