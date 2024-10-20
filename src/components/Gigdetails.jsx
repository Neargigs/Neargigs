// Gigdetails.js
import React, { useState } from "react";
import xp from "../assets/img/xp.jpg";
import useimage from "../assets/address.jpg";
import Moregigs from "./Moregigs";
import Gigdetailsmodal from "./Gigdetailsmodal";
import Buygigmodal from "./Buygigmodal";
import { FaFacebook, FaTwitter, FaTelegram, FaLinkedin } from "react-icons/fa";

const Hiring = [
  { id: 1, title: "Tolujohn Bob", jobs: "1" },
  { id: 2, title: "Fabrre don", jobs: "6" },
  { id: 3, title: "Naccy colen", jobs: "3" },
  { id: 4, title: "Petter collin", jobs: "5" },
  { id: 5, title: "Rugberbs", jobs: "2" },
];

const Gigdetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="giginfo gig-details-container row">
      {/* Gig Info Section */}
      <div className="col-lg-8 gig-info">
        <div className="gig-info-header d-flex align-items-center">
          <img src={xp} alt="Gig" className="gig-image" />
          <div className="gig-info-text">
            <h2 className="gig-name">Tolu John</h2>
            <div className="gig-rating">Rating: ★★★★☆</div>
          </div>
        </div>
        <h3 className="gig-title">Professional Gig Title</h3>
        <p style={{ color: "whitesmoke" }} className="gig-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula
          malesuada orci non venenatis. Sed hendrerit ut risus nec consectetur.
          Curabitur sit amet nisl ut quam egestas facilisis. Nulla ut orci in
          nisl laoreet venenatis non at eros.
        </p>
        <div className="job-tags">
          <span className="tag">Design</span>
          <span className="tag">Development</span>
          <span className="tag">Marketing</span>
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="col-lg-4 gig-sidebar">
        <div
          style={{ border: "1px solid whitesmoke" }}
          className="card info-card"
        >
          <div className="card-body">
            <h5 className="card-title">$ 250 (If talent)</h5>
            <p className="gig-balance">NEAR, USDT</p>

            <div className="gig-actions">
              <button
                style={{
                  borderRadius: "20px",
                  width: "100%",
                  marginBottom: "15px",
                }}
                className="sidebutton"
                onClick={openModal} // Open modal on button click
              >
                Apply for this job
              </button>
              <button
                style={{ borderRadius: "20px", width: "100%" }}
                className="sidebutton"
              >
                Save for later
              </button>
            </div>

            <div className="gig-share">
              <p style={{ color: "whitesmoke" }}>Share this job:</p>
              <div className="share-container">
                <div className="social-icons">
                  <a href="#" className="icon facebook" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="icon twitter" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="icon telegram" aria-label="Telegram">
                    <i className="fab fa-telegram-plane"></i>
                  </a>
                  <a href="#" className="icon linkedin" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ border: "1px solid whitesmoke" }} className="card">
          <div className="card-body">
            <h5 className="card-title">Terms of work:(if customer)</h5>
            <p className="gig-balance">$ 250</p>
            <p className="gig-balance">6 purchases</p>

            <div className="gig-actions">
              <button
                style={{
                  borderRadius: "20px",
                  width: "100%",
                  marginBottom: "15px",
                }}
                className="sidebutton"
                onClick={openModal} // Open modal on button click
              >
                Buy this gig
              </button>
              <button
                style={{ borderRadius: "20px", width: "100%" }}
                className="sidebutton"
              >
                Save for later
              </button>
            </div>

            <div className="gig-share">
              <p style={{ color: "whitesmoke" }}>Share this job:</p>
              <div className="share-container">
                <div className="social-icons">
                  <a href="#" className="icon facebook" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="icon twitter" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="icon telegram" aria-label="Telegram">
                    <i className="fab fa-telegram-plane"></i>
                  </a>
                  <a href="#" className="icon linkedin" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Hiring Managers */}
        <div className="card">
          <div className="card-body pb-0">
            <h5 className="card-title">Top Hiring Manager</h5>
            <div className="news">
              {Hiring.map((card) => (
                <div
                  key={card.id}
                  className="post-item clearfix"
                  style={{
                    borderBottom: "1px solid gray",
                    paddingBottom: "5px",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <img
                        style={{ height: "60px", width: "60px" }}
                        src={useimage}
                        alt=""
                      />
                      <h4>
                        <a href="#">{card.title}</a>
                      </h4>
                      <span style={{ color: "#b1bad3", marginLeft: "10px" }}>
                        Jobs: {card.jobs}
                      </span>
                    </div>
                    <div>
                      <button className="usbutton">Follow</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* End sidebar recent posts */}
          </div>
        </div>
      </div>

      {/* More Gigs Section */}
      <div className="col-lg-12">
        <Moregigs />
      </div>

      {/* Job Application Modal */}
      <Gigdetailsmodal
        recruiterImage={xp} // Use the gig image as the recruiter's image
        recruiterName="Tolu John" // Replace with the appropriate name
        jobTitle="UI/ux Designer" // Replace with the appropriate job title
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Buy gig Modal */}
      <Buygigmodal
        recruiterImage={xp}
        recruiterName="Tolu John"
        jobTitle="Transcriber"
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Gigdetails;
