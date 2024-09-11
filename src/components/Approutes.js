import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Navbar from "../components/Navbar";
import Freelance from "./Freelance.jsx";
import Sidenav from "./Sidenav";
import Fulltimejob from "./Fulltimejob.jsx";
import Myfreelance from "./my/Myfreelance.jsx";
import Myfulltime from "./my/Myfulltime.jsx";
import Mygigs from "./my/Mygigs.jsx";

import Settings from "../views/Settings";
import Topquiz from "./Freelance.jsx";
import Footer from "../components/Footer";
import Gigdetails from "./Gigdetails";
import Referrals from "./referrals/Referrals.jsx";
import Wallet from "./Wallet.jsx";

// Css files
import "../assets/vendor/simple-datatables/style.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/quill/quill.bubble.css";
import "../assets/vendor/quill/quill.snow.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/css/style.css";

import "../assets/css/dashboard.css";

const Approutes = () => {
  const [activeLink, setActiveLink] = useState("");
  return (
    <div className="">
      <Navbar />
      <Sidenav activeLink={activeLink} setActive={setActiveLink} />
      <main id="main" className="main">
        <section className="section dashboard">
          <div className="row">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/freelance" element={<Freelance />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/mygigs" element={<Mygigs />} />
              <Route path="/myfulltime" element={<Myfulltime />} />
              <Route path="/myfreelance" element={<Myfreelance />} />
              <Route path="/fulltimejob" element={<Fulltimejob />} />

              <Route path="/Home" element={<Topquiz />} />
              <Route path="/Science" element={<Topquiz />} />
              <Route path="/Art" element={<Topquiz />} />
              <Route path="/Commerce" element={<Topquiz />} />
              <Route path="/Blockchain" element={<Topquiz />} />
              <Route path="/History" element={<Topquiz />} />
              <Route path="/Sport" element={<Topquiz />} />
              <Route path="/Notification" element={<Topquiz />} />
              <Route path="/Wallet" element={<Topquiz />} />
              <Route path="/Profile" element={<Settings />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/gigdetails" element={<Gigdetails />} />
              <Route path="/referrals" element={<Referrals />} />
            </Routes>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Approutes;
