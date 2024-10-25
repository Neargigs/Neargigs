import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import person from "../../assets/address.jpg"; // Fallback image

const Myfulltime = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [jobs, setJobs] = useState({
    all: [],
    apply: [],
    progress: [],
    archive: [],
  });
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/v1/jobs/getAlljobs`);
        const allJobs = response.data;
        
        // Assuming the API returns all jobs and you categorize them into the tabs:
        setJobs({
          all: allJobs, // All jobs
          apply: allJobs.filter(job => job.status === "apply"), // 'Apply' tab jobs
          progress: allJobs.filter(job => job.status === "progress"), // 'In Progress' tab jobs
          archive: allJobs.filter(job => job.status === "archive"), // 'Archive' tab jobs
        });
      
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };
    
    fetchJobs();
  }, [API_URL]);

  // Log the jobs data for debugging
  // console.log("Jobs for current tab:", jobs[selectedTab]);

  if (loading) {
    return <p>Loading jobs...</p>;
  }

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
            {jobs[selectedTab].length > 0 ? (
              jobs[selectedTab].map((job) => {
                console.log(job); // Debugging each job

                return (
                  <div className="job-card" key={job.id || Math.random()}>
                    <Link to="/dashboard/gigdetails">
                      <div className="job-card-header">
                        <img
                          src={job.logo || person} // Fallback to default image
                          alt="Company Logo"
                          className="company-logo"
                        />
                        <div className="job-hr">
                          <h4 className="job-head">{job.hr || "HR Name"}</h4>
                          {/* rating */}
                          <div className="job-rating">
                            <span className="stars">★★★★☆</span>
                            <span className="rating-count">(25)</span>
                          </div>
                        </div>

                        <div className="job-meta">
                          <span className="job-date">{job.date || "No Date"}</span>
                          <i className="save-icon">&#9734;</i>
                        </div>
                      </div>
                      <div className="job-info">
                        <h4 className="job-title">{job.jobTitle || "Job Title"}</h4>

                        <p>{job.location || "Location not available"}</p>
                        <div className="job-tags">
                          {/* Uncomment this once tags are available */}
                          {/* {job.tags && job.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                          ))} */}
                        </div>
                        <p>{job.paragraph || "Job description not available"}</p>
                      </div>
                    </Link>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="job-amount">{job.amount || "N/A"}</span>
                      <button className="btn chat-button">
                        <i className="bi bi-chat"></i> Chat
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No jobs found for the selected tab.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Myfulltime;
