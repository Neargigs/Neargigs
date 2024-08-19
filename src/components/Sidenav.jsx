import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidenav = ({ activeLink, setActive }) => {
  const gigcategory = [
    { id: 1, name: "Freelance Jobs", icon: "bi-briefcase" },
    { id: 2, name: "Full-time Jobs", icon: "bi-briefcase-fill" },
    { id: 3, name: "My Gigs", icon: "bi-clipboard-check" },
    { id: 4, name: "My Freelance Jobs", icon: "bi-briefcase" },
    { id: 5, name: "My Full-time Jobs", icon: "bi-briefcase-fill" },
  ];

  const userlist = [
    { id: 1, name: "Wallet", icon: "bi-wallet" },
    { id: 2, name: "Governance", icon: "bi-bank" },
    { id: 3, name: "Referrals", icon: "bi-people" },
    { id: 4, name: "Settings", icon: "bi-gear" },
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
        {gigcategory.map((quiz) => (
          <li key={quiz.id} className="nav-item">
            <Link
              className={`nav-link gap-1 collapsed ${
                isActive(`/dashboard/${quiz.name.toLowerCase()}`)
                  ? "active"
                  : ""
              }`}
              to={`/dashboard/${quiz.name.toLowerCase()}`}
            >
              <i className={`bi ${quiz.icon}`}></i>
              <span>{quiz.name}</span>
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
