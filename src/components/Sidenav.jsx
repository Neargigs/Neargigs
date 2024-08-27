import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidenav = ({ activeLink, setActive }) => {
  const gigcategory = [
    { id: 1, path: "freelance", name: "Freelance Jobs", icon: "bi-briefcase" },
    {
      id: 2,
      path: "fulltimejob",
      name: "Full-time Jobs",
      icon: "bi-briefcase-fill",
    },
    { id: 3, path: "wnj", name: "My Gigs", icon: "bi-clipboard-check" },
    { id: 4, path: "wnj", name: "My Freelance Jobs", icon: "bi-briefcase" },
    {
      id: 5,
      path: "wnj",
      name: "My Full-time Jobs",
      icon: "bi-briefcase-fill",
    },
  ];

  const userlist = [
    { id: 1, path: "wnj", name: "Wallet", icon: "bi-wallet" },
    { id: 2, path: "wnj", name: "Governance", icon: "bi-bank" },
    { id: 3, path: "wnj", name: "Referrals", icon: "bi-people" },
    { id: 4, path: "wnj", name: "Settings", icon: "bi-gear" },
  ];

  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname, setActive]);

  const isActive = (path) => {
    return activeLink === path;
  };

  return (
    <aside id="sidebar" className={`sidebar ${"ml-[300px]"}`}>
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link gap-1 collapsed" to="/dashboard">
            <i className="bi bi-house"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        {gigcategory.map((gignav) => (
          <li key={gignav.id} className="nav-item">
            <Link
              className={`nav-link gap-1 collapsed ${
                isActive(`/dashboard/${gignav.path.toLowerCase()}`)
                  ? "active"
                  : ""
              }`}
              to={`/dashboard/${gignav.path.toLowerCase()}`}
            >
              <i className={`bi ${gignav.icon}`}></i>
              <span>{gignav.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <br />
      <ul className="sidebar-nav" id="sidebar-nav">
        {userlist.map((user) => (
          <li key={user.id} className="nav-item">
            <Link
              className={`nav-link scrollto ${
                isActive(`/dashboard/${user.name.toLowerCase()}`)
                  ? "active"
                  : ""
              }`}
              onClick={() => setActive(`/${user.name.toLowerCase()}`)}
              to={`/dashboard/${user.name.toLowerCase()}`}
            >
              <i className={`bi ${user.icon}`}></i>
              <span>{user.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidenav;
